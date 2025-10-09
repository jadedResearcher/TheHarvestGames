const flower_url = "http://www.farragofiction.com/DollSource/images/Flower/Body/";
const fruit_url = "http://www.farragofiction.com/DollSource/images/Fruit/Body/";
let random_flowers;
let random_fruit;

const garden = async () => {
    const contentEle = createElementWithClassAndParent("div", container, "garden");
    await initFlowerImages();
    //debugImages(contentEle);
    const story_so_far = await fetchInitialStoryRaw();
    const hidden_prayers = parseAllHiddenPrayers(story_so_far);
    let index = 0;
    for (let hidden_prayer of hidden_prayers) {
        //if we already reaped, skip
        if (!globalDataObject.seedsHarvested.includes(index)) {
            drawAHiddenPrayer(contentEle, hidden_prayer, index);
        }
        index++;
    }



    const popupEle = popup("Reap What You And Others Have Sown With Prayers", contentEle)

}


//render them all
const debugImages = (container) => {
    for (let flower of random_flowers) {
        const image = createElementWithClassAndParent("img", container);
        image.src = flower;
    }

    for (let fruit of random_fruit) {
        const image = createElementWithClassAndParent("img", container);
        image.src = fruit;
    }
}

const initFlowerImages = async () => {
    let tmp = await getImages(flower_url);
    random_flowers = tmp.map((item) => flower_url + item);

    tmp = await getImages(fruit_url);
    random_fruit = tmp.map((item) => fruit_url + item);

}

//hidden prayers will be in [HIDE][/HIDE] blocks
const parseAllHiddenPrayers = (story_so_far) => {
    const pattern = /\[HIDE\][\s\S]*?\[\/HIDE\]/g;
    const ret = story_so_far.match(pattern);
    console.log("JR NOTE: ret is", ret)
    return ret;
}

const isTimeCodeOlderThanADay = (milliseconds_since_epoch) => {
    const milliseconds_in_day = 1000 * 60 * 60 * 24; //1000 ms in second, 60 seconds in minute, 60 minutes in hour, 24 hours in day
    //if the current milliseconds since epoch is more than the saved plus milliseconds in a day then its true
    return Date.now() > milliseconds_since_epoch + milliseconds_in_day
}

const isTimeCodeOlderThanThreeDays = (milliseconds_since_epoch) => {
    const milliseconds_in_day = 1000 * 60 * 60 * 24; //1000 ms in second, 60 seconds in minute, 60 minutes in hour, 24 hours in day
    //if the current milliseconds since epoch is more than the saved plus milliseconds in a day times three then its true
    return Date.now() > milliseconds_since_epoch + 3 * milliseconds_in_day
}

const isThePrayerADeckUpload = (prayer_json) => {
    return prayer_json.title;
}

const emitGardenSass = (parent, text) => {
    const sass = createElementWithClassAndParent("div", parent, "sass garden-sass");
    sass.innerText = text
    setTimeout(() => {
        sass.className = "sass fadeout";

    }, 3000);

    setTimeout(() => {
        sass?.remove();
    }, 5000);
}

const reapWhatYouSowed = (ele, fruit, index, isRot) => {
    ele.remove();
    if (!isRot) {
        const deckTitle = isThePrayerADeckUpload(fruit);

        if (deckTitle) {
            //do NOT remove decks, they should stay here and you should be able to re-add it whenever
            //better than putting it in local storage...i think... decks can get big
            const deck = new CardSet();
            deck.syncToJSON(fruit);
            unlockedDecks.push(deck);
            cardSetRenderInPopup(document.querySelector("#library"), deck, document.querySelector("body"));
            //fruit does NOT go in the seedsHarvest pile, because you can come back her eand get it again later (it doesn't stay)
            //or mayb eit will if i change my mind
        } else {

            const candy = fruit.candy ? fruit.candy : 0;
            globalDataObject.candy += candy;
            //the card will handle creating itself correctly
            const seedCard = new Card(fruit);
            if (!globalDataObject.cardsReaped || !globalDataObject.cardsReaped.length) {
                globalDataObject.cardsReaped = [];
            }
            globalDataObject.cardsReaped.push(seedCard);
            const contentEle = createElementWithClassAndParent("div", container);
            contentEle.style.padding = "31px"
            seedCard.renderCard(contentEle);

            const popupEle = popup(`You Reaped A Card With ${candy} 🍬!`, contentEle)
            //when you reap, its no longer there (lets you get rid of rot)
            globalDataObject.seedsHarvested.push(index);
        }
    } else {
        //when you reap, its no longer there (lets you get rid of rot)
        globalDataObject.seedsHarvested.push(index);
    }

    //even for rot, save that you cleared it
    if (!globalDataObject.seedsHarvested || !globalDataObject.seedsHarvested.length) {
        globalDataObject.seedsHarvested = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    }

    //you get the candy from the prayer (lets go viral lol)

    save();

}


/*
    will be a single [HIDE][/HIDE] tag
    will either have a lastSaveTimeCode or will not.
    if there is no lastSaveTimeCode it will rot on the vine
    if there is one, after one day it will be a flower
    after three days it will be a fruit
    size is based on if its a deck or if it something random
    if its a deck it will be large and give you teh deck when it fruits (clicking it will add to library till you refresh)
    if its not a deck, clicking it will give you a card you can add to any deck, it will be ??? based (mystery gambling) but its numbers and names will be seeded from the contents of the hidden prayer
    the deck/game will know what to do with ??? cards () (hopefully each deck has Hidden Lore to add to it)
*/
const drawAHiddenPrayer = (parent, hidden_prayer, index) => {

    const unhidden_prayer = hidden_prayer.replaceAll(/\[HIDE\]/g, "").replaceAll(/\[\/HIDE\]/g, "").replaceAll(/\\n/g, '').replaceAll(/\\/g, '').trim();
    //you guys are literally sowing seeds
    const rand = new SeededRandom(stringtoseed(unhidden_prayer));
    const container = createElementWithClassAndParent("div", parent, "garden-container");

    if (unhidden_prayer.includes("lastSaveTimeCode")) {
        //assume its json for me, okay? why else would it have lastSaveTimeCode
        try {
            console.log(`JR NOTE: going to assume json '${unhidden_prayer}'`)

            const json = JSON.parse(unhidden_prayer);
            const deckTitle = isThePrayerADeckUpload(json)
            const candy = json.candy ? json.candy : 0;

            console.log("JR NOTE: json found is", json)
            if (isTimeCodeOlderThanThreeDays(json.lastSaveTimeCode)) {
                const fruit = createElementWithClassAndParent("img", container, deckTitle ? "garden-deck pulse-animation" : "garden-card pulse-animation");
                fruit.src = rand.pickFrom(random_fruit);
                fruit.alt = deckTitle ? deckTitle : "???";
                fruit.style.filter = `hue-rotate(${rand.getRandomNumberBetween(0, 360)}deg)`;
                //TODO pick a random color for it;
                fruit.onclick = () => {
                    reapWhatYouSowed(fruit, json, index)
                }
            } else if (isTimeCodeOlderThanADay(json.lastSaveTimeCode)) {
                const flower = createElementWithClassAndParent("img", container, deckTitle ? "garden-deck" : "garden-card");
                flower.src = rand.pickFrom(random_flowers);
                flower.alt = deckTitle ? deckTitle : "???"
                flower.style.filter = `hue-rotate(${rand.getRandomNumberBetween(0, 360)}deg)`;
                container.onclick = () => { emitGardenSass(container, `Good Things Come To Those Who Wait: ${deckTitle ? deckTitle : `Prayer With ${candy} Candy`}`) }

            } else {
                const seed = createElementWithClassAndParent("img", container, deckTitle ? "garden-deck" : "garden-card");
                seed.alt = deckTitle ? deckTitle : "???";
                seed.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/pumpkinseedhack.png";
                container.onclick = () => { emitGardenSass(container, "Good Things Come To Those Who Wait: What Will This Seed Become?") }


            }
        } catch (e) {
            console.error("Something went wrong parsing this prayer...rotten seed.", e);
            const rotten_seed = createElementWithClassAndParent("img", container, 'garden-rot');
            rotten_seed.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/pumpkinseedhack-moshed-10-05-22-49-37-179.gif";
            container.onclick = () => {
                emitGardenSass(container, "The Rot Has Claimed What You Sowed Before You Could Reap");
                reapWhatYouSowed(rotten_seed, null, index, true);
            }


        }

    } else {
        const rotten_seed = createElementWithClassAndParent("img", container, 'garden-rot');
        rotten_seed.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/pumpkinseedhack-moshed-10-05-22-49-37-179.gif";
        container.onclick = () => {
            emitGardenSass(container, "Seeds Planted Before A Garden Rot In The Ground");
            reapWhatYouSowed(rotten_seed, null, index, true);
        }

    }

}