/*

summary of prayers:

* will harvest have a halloween costume? (card blessed) (they never got back about what color the harvest should be for halloween) (should i pick randomly)
* noting mysteries are hidden
* where am i? x3
* dreams
* PLEASE
* The Harvest helps open the Protected Realm to newcomers (and should be praised)
* consumption and metamorphisis (so tempting to have her start eating her own web page) (catapillars sometimes eat their cocoons before flying off, right? what if she starts eating her page at the end of each season, and tahts why its no longer available.... not really appropriate for week 3 though, besides foreshadowing)
* the medium, in general, rivalry
* 99 keys for truth sim (and a snitch aint one)
* paradox (various purposefully confusing things, the harvest takes it literally that "broken bones georg" is real)
* gratitude
* roleplay, serving of 1000 candies
* the catalyst pointing out that the Harvest is the Observer, suggesting year round legacy (garden doesn't go fallow even as the Harvest sleeps)
* explaining zampanio cards
* several decks
* best sacrifices to make


Ideas:

* the Harvest gives in to the scarecrow's hunger and starts randomly eating parts of the website (though not permanently, it restores on refresh) (hacked card, 1000 candies)  (makes the skinning noise from the corn maze when she eats something, plus a popup of her commenting on how delicious it was, seeded by the text of whatever she ate)

* allowing herself to feed, finally, instead of denying, will give her the strength to keep the garden going even while she sleeps (catalyst's prayer)

* she also justifies it as gathering her strength against that Rival god the medium keeps creating

* have all her screens show sharp sharp teeth (maybe from the jump scarecrow)

* If she eats part of the page, you'll get a random relic unlocked (note, this means i'll need a list of relics in the code, which means its not secret anymore but we're three weeks in , this is fine, just want something to deal with all the relic talk in teh prayers)

* also implement the suggested relic effects
*/

const imsohungry = () => {
    console.log("JR NOTE: imsohungry")
    const body = document.querySelector("body")
    //have a button in the bottom left of the screen at all times that says 'imsohungry' (don't do this at random, people seem to be having fun making decks, don't make this unplayable)
    //pick a dom element at random
    //remove it while playing a eating/chewing/slurping/skinning noise and display a harvest quip explaining what's going on


    const meatButton = createElementWithClassAndParent("button", body);
    meatButton.id = "sleepsoftly";
    meatButton.innerText = "sleep deeply for you are fed";
    meatButton.onclick = () => {
        const prayer = `Gentle Creature Harvest: You have fed her meat. She sleeps deeply with the surety of one with a full stomach, reassured in the knowledge that good things come to those who wait.`
        submitCommand(prayer);
        GodOfDreams();


    }

    const button = createElementWithClassAndParent("button", body);
    button.id = "imsohungry";
    button.innerText = "imsohungry";
    button.onclick = () => {
        const prayer = `Ravenous Beast Harvest: You have fed her candy. She stirs to half sleep, just enough energy to allow seeds to be sown and cards to be played.`
        submitCommand(prayer);
        //as long as you have this up, until you close it, she's going to be eating
        const contentEle = createElementWithClassAndParent("div", body, "imsohungry-popup");
        const bigScreenTV = createElementWithClassAndParent("video", contentEle, "hungry-screen");
        bigScreenTV.playsinline = true; //so ios doesn't cry
        bigScreenTV.setAttribute('playsinline', true)
        bigScreenTV.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/harvest_eating_imsohungry.mp4";
        bigScreenTV.play();



        bigScreenTV.autoplay = true;
        bigScreenTV.loop = true;


        const bigLady = createElementWithClassAndParent("img", contentEle, "hungry-lady");
        bigLady.src = "http://lavinraca.eyedolgames.com/images/Harvest/shessohungry.png";

        const popupEle = popup("imsohungry feed me your website", contentEle)
        popupEle.querySelector(".popup-body").style.backgroundColor = "black";
        popupEle.style.transform = "scale(0.5)";
        popupEle.style.overflow = "hidden";

        eatAsLongAsPopupIsOpen(body, popupEle);

    }

}
/*
and now the eye killer challenging them to duels is even funnier
earlier loops it was a terrifying off wall thing for a serial killer to do
very few cultists even had decks
now its just
"oh yes of course the monster in the air vent wants to play yugioh'
*/

//if you eat the popup that counts as it not being open anymore, dunkass
//don't get greedy
const eatAsLongAsPopupIsOpen = async (target, popup) => {
    const children = target.querySelectorAll("*");
    const child = pickFrom(children);
    scarecrowLog("im so hungry");
    child.remove();

    const fx = ["http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/crunch_static4.mp3"
        , "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/crunch_static3.mp3",
        , "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/crunch_static2.mp3",

        , "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/crunch_static.mp3",

    ]

    global_fx_one_at_a_time.src = pickFrom(fx);
    global_fx_one_at_a_time.play();

    if (document.body.contains(popup)) {
        await sleep(500);
        console.log("JR NOTE: popup is still open, going to eat")
        eatAsLongAsPopupIsOpen(target, popup);
    }
}