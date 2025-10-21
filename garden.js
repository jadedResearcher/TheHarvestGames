const flower_url = "http://www.farragofiction.com/DollSource/images/Flower/Body/";
const fruit_url = "http://www.farragofiction.com/DollSource/images/Fruit/Body/";
let random_flowers;
let random_fruit;

const garden = async () => {
    const contentEle = createElementWithClassAndParent("div", container, "garden");
    const instructions = createElementWithClassAndParent("div", contentEle);
    instructions.innerHTML = `Each Prayer sent to the Harvest becomes a Seed in her Garden.<br><br>Over time, each seed will blossom into a Flower, and eventually a Fruit.<br><br>Reap the Fruit to gain candy, cards or even whole new decks to play in the Harvest's Library. Candy and Cards can only be Reaped a single time, but Decks can be Reaped again and again.`;
    await initFlowerImages();
    //debugImages(contentEle);
    const story_so_far = await fetchInitialStoryRaw();
    const hidden_prayers = parseAllHiddenPrayers(story_so_far);
    let index = 0;
    for (let hidden_prayer of hidden_prayers) {
        //if we already reaped, skip
        if (!globalDataObject.seedsHarvested) {
            globalDataObject.seedsHarvested = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        }
        if (!globalDataObject.seedsHarvested.includes(index)) {
            console.log(`JR NOTE: hidden prayer ${index} is drawn `)

            drawAHiddenPrayer(contentEle, hidden_prayer, index);
        } else {
            console.log(`JR NOTE: hidden prayer ${index} is skipped (already harvested) `)

        }
        index++;
    }
    drawAHiddenPrayer(contentEle, JSON.stringify(secretDeckFromSomeone), -31)



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
    return prayer_json.title; //technically it looks for both card (new) and deck uploads but not for generic prayers
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

        if (deckTitle && fruit.cards) {
            //do NOT remove decks, they should stay here and you should be able to re-add it whenever
            //better than putting it in local storage...i think... decks can get big
            const deck = new CardSet();
            deck.syncToJSON(fruit);
            unlockedDecks.push(deck);
            cardSetRenderInPopup(document.querySelector("#library"), deck, document.querySelector("body"));
            //fruit does NOT go in the seedsHarvest pile, because you can come back her eand get it again later (it doesn't stay)
            //or mayb eit will if i change my mind
        } else if (deckTitle) { //its a sown card (instead of random)
            const card = new Card();
            card.syncToJSON(fruit);
            if (!globalDataObject.cardsReaped || !globalDataObject.cardsReaped.length) {
                globalDataObject.cardsReaped = [];
            }
            globalDataObject.cardsReaped.push(card);

            const contentEle = createElementWithClassAndParent("div", container);
            contentEle.style.padding = "31px"
            card.renderCard(contentEle);

            const popupEle = popup(`You Reaped A Card Made By The Faithful!`, contentEle)
            //when you reap, its no longer there (lets you get rid of rot)
            globalDataObject.seedsHarvested.push(index);
        }


        else {

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

            const json = JSON.parse(unhidden_prayer);
            console.log("JR NOTE: parsed correctly")
            const deckTitle = isThePrayerADeckUpload(json)
            const candy = json.candy ? json.candy : 0;

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
            console.log(unhidden_prayer)
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


const secretDeckFromSomeone = {
    "title": "&z",
    "description": "<img id=\"testimg\" src=\"nothing\" onerror='document.getElementById(\"testimg\").remove();buttons = document.getElementsByTagName(\"button\");thebutton=null;for(i=0;i<buttons.length;i++)if(buttons[i].innerText == \"Play Game\") {thebutton=buttons[i];}thebutton.onclick=function(){const container = document.querySelector(\"#container\");const gameContainer = createElementWithClassAndParent(\"div\", container, \"game-container\"); thedeck= new CardSet(\"testdeck\", \"desc\", [], {});el = document.createElement(\"div\"); for(i=0;i<3;i++){thedeck.addRandomZampanioCardToDeck(el);} class ThisIsNotAGame extends Game{turns = 0; enableLinks = false; links = [{text: \"eyes\", url: \"http://farragofiction.com/CatalystsBathroomSim/NORTH/EAST/EAST/NORTH/bathroom.html\"}, {text: \"friend\", url: \"http://farragofiction.com/CatalystsBathroomSim/EAST/NORTH/EAST/SOUTH/EAST/EAST/NORTH/SOUTH/NORTH/SOUTH/EAST/NORTH/SOUTH/bathroom.html\"}, {text: \"fractal\", url: \"http://farragofiction.com/FractalShitpost/\"}, {text: \"myth\", url: \"http://lavinraca.eyedolgames.com/XConByMediumOfThreads/Corn.html\"}, {text: \"lies\", url: \"http://lavinraca.eyedolgames.com/XConByMediumOfThreads/Corn.html\"}, {text: \"teeth\", url:\"https://the1whoscreams.neocities.org/\"}, {text: \"watch\", url:\"https://lostinzampanio.neocities.org/\"}, {text: \"weave\", url:\"https://c0l0rw34vr.neocities.org/\"}, {text: \"ocean\", url: \"https://omniasnetwork.neocities.org/\"}, {text: \"drown\", url: \"https://hazyscrounger.tumblr.com/\"}, {text: \"paint\", url: \"https://togigageta.tumblr.com/\"}, {text: \"puppet\", url: \"https://otherworldpuppet.tumblr.com/\"}, {text: \"thread\", url: \"https://www.tumblr.com/unravelingspirals\"}, {text: \"new\", url: \"https://ezknews.neocities.org/\"}, {text: \" rest\", url: \"https://spiralsrest.neocities.org/\"}, {text: \" two \", url: \"https://hydrozoa-games.itch.io/zam2anio\"}, {text: \"many\", url: \"https://offlineland.io/hexeddecimal\"}, {text: \"doctor\", url: \"https://www.tumblr.com/clinicofzampanioa1\"}]; randomSounds = [new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/crunch.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/drip.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/nope.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/nopedos.mp3\")]; extraSounds = [new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/circusreversus.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/double_slurp.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/singing.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/twangeve.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/whistling_westernFAST.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/wishes.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/soothingbell.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/slow_danger.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/melody2.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/lament_001.mp3\"), new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/haunting_melody.mp3\")]; adjustVolume = (sounds, multiplier) => {for(i = 0; i < sounds.length; i++){sounds[i].volume = sounds[i].volume * multiplier;}}; constructor(cardset){super(cardset); const randomStartVolume = 0.1; const extraStartVolume = 0.5; this.adjustVolume(this.randomSounds, randomStartVolume); this.adjustVolume(this.extraSounds, extraStartVolume); const click = new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/alya_click.mp3\"); click.volume = 2.0 * randomStartVolume; this.randomSounds.push(click); const thrum = new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/thrum.mp3\"); thrum.volume = 1.5 * randomStartVolume; this.randomSounds.push(thrum); const lighthum = new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/125064__everydaysounds__faulty-fluorescent-light-starter-hum.mp3\"); lighthum.volume = 1.5 * randomStartVolume; this.randomSounds.push(lighthum); const dadhouse = new Audio(\"http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/krs_dads_house.mp3\"); dadhouse.volume = 2.0 * randomStartVolume; this.randomSounds.push(dadhouse);  const playCardOrig = this.playCard; const applyResultsFromCardOrig = this.applyResultsFromCard; this.playCard = (parent, card, cardEle, autoplay = false) => { this.cardset.addRandomZampanioCardToDeck(el); this.deck=this.cardset.startingDeckToCards(); switch(this.turns){case 13: this.enableLinks = true; case 5: case 10: case 15: case 20: case 25: case 30: this.adjustVolume(this.randomSounds, 1.2); break; case 35: this.randomSounds = this.randomSounds.concat(this.extraSounds); break; case 40: case 50: this.adjustVolume(this.randomSounds, 1.2); break; break;default: break;} if(this.enableLinks){let cardtext = card.text.toLowerCase(); for(i = 0; i < this.links.length; i++){if(cardtext.includes(this.links[i].text)){window.open(this.links[i].url); break;}}} if(this.turns > 113){card.text = \"Obsession is a dangerous thing.\";} if(this.turns > 213){let rand = Math.floor(Math.random() * this.cardset.cards.length); for(i = 0; i < rand; i++){let randcard = Math.floor(Math.random() * this.cardset.cards.length); this.cardset.cards[randcard].text = \"Obsession is a dangerous thing.\";}} if(this.turns > 666){location.reload();} if(Math.floor(Math.random() * 5) == 3){let rand = Math.floor(Math.random() * this.randomSounds.length); this.randomSounds[rand].play();} playCardOrig(parent, card, cardEle, autoplay);};this.applyResultsFromCard = (parent, card, autoplay) => {this.turns += 1; applyResultsFromCardOrig(parent, card, autoplay);};}numberOfReshufflesBeforeLose=Infinity;outOfReshuffles = () => {return false;}} game = new ThisIsNotAGame(thedeck);cardpopups=document.getElementsByClassName(\"card-popup\");if(cardpopups[0]){cardpopups[0].style.display=\"none\";cardpopups[0].remove();document.querySelectorAll(\".popup\").forEach((x) => x.remove());}document.getElementById(\"library\").style.display=\"none\";maybeeditcontainer=document.getElementsByClassName(\"edit-container\");if(maybeeditcontainer[0]){maybeeditcontainer[0].style.display=\"none\";}game.render(gameContainer, null);}'>find the",
    "cards": [
        {
            "title": "",
            "text": "not what",
            "costStatName": "",
            "singleUse": true,
            "autoPlay": false,
            "costStatValue": 13,
            "bgAbsoluteSrc": "",
            "resultStatName": ".....................................................................................................\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r",
            "resultChangeValue": 20
        }
    ],
    "hueRotate": "265",
    "brightness": "2",
    "saturation": "113",
    "contrast": "5",
    "startingDeck": {
        "": 1
    }
}