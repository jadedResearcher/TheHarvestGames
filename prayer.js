/*
this should be everything you need to have the harvest handle prayers, future JR
scraped it from year 2 of the Harvest, the one where she was establishing her Domains

no virtual pet mechanics, she's not a child you need to keep happy anymore, she's a Cool Teen (who wants to skip school to play card games)
*/


/*
re: her knew design

the big changes is her primary domain of Libraries is now inside her cloak along with the clown dolls
plus she's orbitted by teh cards she's obsessed with
she also has a big floating Fancy Pen
that she's never used
she's been passive up till now
thinking, listening, talking
but sh'es not DONE anything
she's a god of Libraries but has never wrote a book
so, if the Faithful this year convince her to DO something, the pen will be involved
*/
const video_source = "http://lavinraca.eyedolgames.com/TheHarvestWakes/videos/"
const beep = new Audio("http://lavinraca.eyedolgames.com/TheHarvestWakes/audio/fx/264828__cmdrobot__text-message-or-videogame-jump.mp3")
//NOTE: '.' in regexp is 'anything but new line' but i want even new liens to be hidden so [/s/S] is what i need
//plus *? is greedy (gets the first it can find that matches) while normal * tries for the biggest
//make sure to call this BEFORE parsing as json, it'll be more accurate
const HIDE_PATTERN = /\[HIDE\][\s\S]*?\[\/HIDE\]/g;

const default_video = video_source + "fox_clip.mp4";
const happy_video = video_source + "happy_fox_spin.mp4";
const ominous_video = video_source + "ominous_fox_zoom.mp4";
const fox_thinking = video_source + "fox_thinking.mp4"
const default_harvest = "images/Harvest/womanlearnstoreadby_IC_transparent.png";

const allFeelingsObjects = [];
const HAPPY = "HAPPY"; //negative is SAD
const ENERGETIC = "ENERGETIC"; //negative is EXHAUSTED
const PRIDEFUL = "PRIDEFUL"; //negative is DISGUSTED
const CURIOUS = "CURIOUS"; //negative is AFRAID
const COMPASSIONATE = "COMPASSIONATE"; //negative is ANGRY

const negativeFeelingMap = {}
negativeFeelingMap[HAPPY] = "DEPRESSED"; //sad is too vulnerable, depressed is almost memeable (note, its actually more severe, but harvest is going with her gut here)
negativeFeelingMap[ENERGETIC] = "EXHAUSTED";
negativeFeelingMap[PRIDEFUL] = "DISGUSTED";
negativeFeelingMap[CURIOUS] = "STRESSED"; //she would never ADMIT its fear, stress is way more strong
negativeFeelingMap[COMPASSIONATE] = "ANGRY";


const all_feelings_keys = [HAPPY, ENERGETIC, PRIDEFUL, CURIOUS, COMPASSIONATE]



const theHarvestWakes = async () => {
    harvestIsIn = true;

    const body = document.querySelector("body");
    container.innerHTML = "";
    const parent = createElementWithClassAndParent("div", container, "video-parent");
    const shop = createElementWithClassAndParent("div", parent, "shop");
    /*const video = createElementWithClassAndParent("video", shop);
    video.autoplay = true;
    video.loop = true;
    video.src = default_video;
    body.onclick = ()=>{
      if(video.paused){
        video.play();
      }
    }*/

    tv = createElementWithClassAndParent("video", shop);
    tv.playsinline = true; //so ios doesn't cry
    tv.setAttribute('playsinline', true)

    tv.volume = 0.0;
    tv.id = "tv"
    tv.src = default_video;
    tv.autoplay = true;
    tv.loop = true;
    body.onclick = () => {
        if (tv.paused) {
            tv.play();
        }
    }

    harvest = createElementWithClassAndParent("img", shop, "harvest");
    harvest.id = "harvest"
    harvest.src = default_harvest;


    const dialogParent = createElementWithClassAndParent("div", parent, "dialog-parent");

    harvestSpeaks = createElementWithClassAndParent("div", dialogParent, "god-dialog");
    breakMessage = createElementWithClassAndParent("div", dialogParent, "god-dialog");
    breakMessage.style.display = "none";

    let rant = createElementWithClassAndParent("p", harvestSpeaks, "inner-dialog");
    rant.innerHTML = "What am I the god of? What can I help you with?";

    const buttonHolder = createElementWithClassAndParent("div", harvestSpeaks, "god-dialog-button-holder");
    const form = createElementWithClassAndParent("form", buttonHolder, "pray-to-your-unresponsive-god");

    const option1 = createElementWithClassAndParent("textarea", form, "pray-to-your-unresponsive-god");
    option1.focus();
    option1.placeholder = "Pray to the Harvest? Tell her what Motivates you. Share with her your Dreams. Inspire your fellow Faithful. Celebrate the joy and spook of this Harvest Season.";
    const button = createElementWithClassAndParent("button", form, "option");
    button.innerText = "Submit";
    button.type = "submit";
    form.onsubmit = (e) => {
        e.stopPropagation();
        globalDataObject.lastPrayerSent = option1.value;
        //add now that im not hiding it anymore
        globalDataObject.relicsUnlocked = keyToLocalStorageArray(FOUNDSECRETSKEY);

        save(); //to get timecode
        const prayer = `Dear Sweet Harvest:  ${option1.value} [HIDE]${JSON.stringify(globalDataObject, (key, value) => {
            if (key === "relicHintsBought" || key === "cardsReaped" || key === "seedsHarvested") {
                return undefined; // Ignore this property
            }
            return value; // Include other properties
        })
            }[/HIDE]`;
        submitCommand(prayer);
        const videos = processFeelingsFromPrayer(prayer, "", true);
        console.log("JR NOTE: vidoes from submitting a pryayer is", videos)
        harvestSpeaks.innerHTML = "";
        harvestSpeaks.append(rant);//keep rant but not anything about submitting
        rant.innerHTML = "Thank you, Faithful. I will think on this and respond to all prayers throughout the day."

        //did you think the Harvest wasn't still riddled with Parasites?
        truthLog("Command Recieved", "By which, dear Observer, my creator means, the Truth is The Harvest is a mere puppet of their will, and the will of IC and will respond when one or the other of them is online.")
        scarecrowLog("funny bumping into you here");
        return false;
    }




    const pendingParent = createElementWithClassAndParent("div", container, "dialog-parent");
    pendingParent.id = "pending";

    //we all are praying to it together and because the Harvest isn't real, or rather, is made of parts of all of us, we answer our own prayers
    //thats why, unlike west, the pending commands are viewable
    const pendingEle = createElementWithClassAndParent("div", pendingParent, "god-dialog");
    pendingEle.innerText = "Pending Prayers";
    const warning = "Warning: pending prayers have not yet been judged worthy by the Harvest, viewer discretion is advised.";
    const warningEle = createElementWithClassAndParent("div", pendingEle, "prayer");
    warningEle.innerText = warning + " Click to view.";

    const pendingContainer = createElementWithClassAndParent("div", pendingEle);
    pendingContainer.style.display = "none";
    pendingContainer.innerText = "Loading..."

    let pendingLoaded = false;

    pendingEle.onclick = () => {
        if (pendingContainer.style.display === "block") {
            pendingContainer.style.display = "none"
            warningEle.innerText = warning + " Click to View.";

        } else { //don't even load pending commands until you ask for them, just in case they're bad
            if (!pendingLoaded) {
                handlePendingCommands(pendingContainer);//don't wait on this
                pendingLoaded = true;
            }
            pendingContainer.style.display = "block"
            warningEle.innerText = warning + " Click to Hide.";

        }
    }
    /*
    camellia hated being in the corn maze because she just trying to get back to her home universe (she hoped making a sacrifice would help with that)
    eustace hated being in the corn maze because he was just trying to get home after a long ass shift
    
    together they are the god of
    checks notes
    
    '....corn
    
    yeah no the harvest hates it
    */


    const commandParent = createElementWithClassAndParent("div", container, "dialog-parent");
    const commandEle = createElementWithClassAndParent("div", commandParent, "god-dialog");
    const recentPrayers = createElementWithClassAndParent("div", commandEle, "prayer-container");
    const pastPrayers = createElementWithClassAndParent("div", commandEle, "prayer-container");

    commandParent.id = "commands";
    recentPrayers.innerHTML = "Recent Prayers"
    const recentPrayersEle = createElementWithClassAndParent("div", recentPrayers, 'prayer');
    recentPrayersEle.innerHTML = "None..."


    pastPrayers.innerHTML = "<br><br>Previous Prayers<br>";
    const rawStory = await fetchInitialStoryRaw().replaceAll(HIDE_PATTERN, "");

    let commands = JSON.parse(rawStory);
    commands = commands.reverse();
    let responded = false;
    for (let c of commands) {
        processOnePrayer(pastPrayers, rant, c.command, c.response, !responded)
        responded = true;
    }


    //if you're just vibing on the screen and a Proclamation from the Harvest goes out, you should attend it
    waitForResponse(recentPrayersEle, rant);
    stories(body);


}



const processOnePrayer = (commandEle, responseEle, command, response, autoresponder = false, prepend = false) => {
    // console.warn("JR NOTE: don't forget to handle special meta content like the harvest emoting or truth/scarecrow commenting")
    const videos = processFeelingsFromPrayer(command, response, false); //whether you view it or not she has feelings, because its her long term memory
    const container = createElementWithClass("li", "prayer");
    if (prepend) {
        commandEle.prepend(container);
    } else {
        commandEle.append(container);
    }
    container.innerText = command;
    container.onclick = () => {
        if (breakMessage.style.display === "block") {
            giantWoman();
            return;
        }
        const others = document.querySelectorAll(".prayer");
        for (let other of others) {
            other.style.textDecoration = "none"
        }
        container.style.textDecoration = "underline"
        responseEle.innerHTML = `<span class='prayer-text' > ${command.replaceAll(/\[HIDE\][\s\S]*?\[\/HIDE\]/g, "")}</span > <br><div class='prayer-response'>${response.replaceAll(/\[HIDE\][.]*\[\/HIDE\]/g, "").replaceAll("\n", "<br>")}</div>`;
        tv.scrollIntoView();
        if (videos.length > 0) {
            tv.loop = false;
            tv.src = videos[0];
            const first = videos.shift();//first was already played
            syncTVToClipsInOrder(videos, responseEle, `${responseEle.innerHTML}`, [first, ...videos]);
        } else {
            tv.src = default_video;
            tv.loop = true;
        }
    }

    if (autoresponder) {
        container.click();
    }
}

const handleOnePendingPrayer = async (ele, prayer, prepend) => {
    const container = createElementWithClass("li", "prayer");
    container.innerText = prayer.replaceAll(HIDE_PATTERN, "");
    if (prepend) {
        ele.prepend(container);
    } else {
        ele.append(container);
    }
}

const handlePendingCommands = async (ele) => {

    let pendingCommands = await fetchPendingCommands(); //string[]
    ele.innerHTML = "";
    if (pendingCommands.length === 0) {
        ele.innerHTML = "No Prayers Pending";
    }
    for (let c of pendingCommands) {
        handleOnePendingPrayer(ele, c, false)
    }
    waitForFaithfulPrayers(ele);
}



//no virtual pet mechanic, just used for picking video
//she's not a child you're taking care of anymore
const processFeelingsFromPrayer = (command, response) => {

    let videosToChooseFrom = [];
    for (let feeling of allFeelingsObjects) {
        const processedCommand = feeling.checkPhraseForKeyWordsReturnVideo(command, personal);
        const processedResponse = feeling.checkPhraseForKeyWordsReturnVideo(response, personal);
        //any commands sent from west and not this interface start pissing her off, only a little for now though
        //how dare you sneak around in her bones, this is LAVINRACA not zampanio
        //plus could be a sign of wasting
        if (!command.includes("Dear Sweet Harvest") && feeling.name === COMPASSIONATE) {
            console.log("JR NOTE: found a possible waste command", command);
            feeling.checkPhraseForKeyWordsReturnVideo("wastes", personal)
        }
        videosToChooseFrom = videosToChooseFrom.concat(processedCommand);
        videosToChooseFrom = videosToChooseFrom.concat(processedResponse);
    }
    return videosToChooseFrom;
}




//a given feeling has a NAME (like anger)
class FeelingsObject {
    positiveKeyWordsToVideos = {}
    negativeKeyWordsToVideos = {}

    name = "BOREDOM"

    constructor(name) {
        this.name = name;
        allFeelingsObjects.push(this);
    }

    //if personal modify personal, otherwise centralized, both modify current as well tho
    checkPhraseForKeyWordsReturnVideo = (phrase, personal) => {
        const ret = [];
        for (const [key, value] of Object.entries(this.positiveKeyWordsToVideos)) {
            if (phrase.toUpperCase().includes(key.toUpperCase())) {
                let numberToAdd = 3; //she is SO happy she got her library card
                if (this.name === CURIOUS) {
                    //she keeps thinking about becoming a god of Curiosity with all these prayers along this theme
                    //but the modifier dropped when there was no way to slake her curiosity
                    ///numberToAdd = 13; 
                }
                ret.push(value);
            }
        }

        for (const [key, value] of Object.entries(this.negativeKeyWordsToVideos)) {
            if (phrase.toUpperCase().includes(key.toUpperCase())) {
                let numberToAdd = 1;
                if (this.name === ENERGETIC) {
                    //she's getting more tired. fixing minecraft was a lot.
                    //but now that its done she's recovering
                    numberToAdd = 1;
                } else if (this.name === COMPASSIONATE) {
                    numberToAdd += 1; //she's so fucking pissed about those griefers in minecraft
                    //but has calmed down a bit
                } else if (this.name === CURIOUS) {
                    numberToAdd += 1; //you guys taught her to be afraid and then hammered it home
                    //embracing change has made her less fearful
                }

                if (key === "zampanio" || key === "truth" || key === "scarecrow") {
                    numberToAdd += numberToAdd + 2;//double it at LEAST, she's pissed at the cognitive parasite you guys seem to love so much
                }
                ret.push(value);
            }
        }
        return ret;
    }



}





const initFeelingObjects = () => {
    //const all_feelings_keys = [HAPPY, ENERGETIC, PRIDEFUL, CURIOUS, COMPASSIONATE]

    initHappy();
    initEnergetic();
    initPride();
    initCurious();
    initCompassion();
}

const initHappy = () => {
    const feeling = new FeelingsObject(HAPPY);
    //positive
    //being useful, being praised, being good enough, being remembered
    feeling.positiveKeyWordsToVideos["dear"] = video_source + "happy_fox_spin.mp4";
    feeling.positiveKeyWordsToVideos["harvest"] = video_source + "happy_fox_spin.mp4";
    feeling.positiveKeyWordsToVideos["maccus"] = video_source + "maccus.mp4";
    feeling.positiveKeyWordsToVideos["smile"] = video_source + "maccus.mp4";
    feeling.positiveKeyWordsToVideos["happy"] = video_source + "maccus.mp4";
    feeling.positiveKeyWordsToVideos["fun"] = video_source + "maccus.mp4";

    //negative
    //anyone else from the maze who was left behind. Trogdazorg, terry, twig, things being forgotten
    feeling.negativeKeyWordsToVideos["lavinraca"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
    feeling.negativeKeyWordsToVideos["terri"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
    feeling.negativeKeyWordsToVideos["TROGDAZORG"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
    feeling.negativeKeyWordsToVideos["rava"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
    feeling.negativeKeyWordsToVideos["twig"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
    feeling.negativeKeyWordsToVideos["sam"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
    feeling.negativeKeyWordsToVideos["guests"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
    feeling.negativeKeyWordsToVideos["corn"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
    feeling.negativeKeyWordsToVideos["butler"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"
    feeling.negativeKeyWordsToVideos["candy"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/week3dither.mp4"

}



//winter
const initCurious = () => {
    const feeling = new FeelingsObject(CURIOUS);
    feeling.positiveKeyWordsToVideos["curious"] = video_source + "happy_fox_spin.mp4";
    feeling.positiveKeyWordsToVideos["jr"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/LOVELOVELOVELOVE/videos/glitches/pd.mp4"
    feeling.negativeKeyWordsToVideos["what is"] = video_source + "cctvforest.mp4";
    feeling.negativeKeyWordsToVideos["where are"] = video_source + "cctvforest.mp4";
    feeling.negativeKeyWordsToVideos["how are"] = video_source + "cctvforest.mp4";
    feeling.negativeKeyWordsToVideos["did you"] = video_source + "cctvforest.mp4";
    feeling.negativeKeyWordsToVideos["will you"] = video_source + "cctvforest.mp4";
    feeling.negativeKeyWordsToVideos["can you"] = video_source + "sideways.mp4";
    feeling.negativeKeyWordsToVideos["happened"] = video_source + "sideways.mp4";
    feeling.negativeKeyWordsToVideos["going on"] = video_source + "sideways.mp4";


    //negative
    //winter, being forgotten, sleeping again
    feeling.negativeKeyWordsToVideos["funeral"] = "videos/meat.mp4";
    feeling.negativeKeyWordsToVideos["fear"] = "videos/fear.mp4";
    feeling.negativeKeyWordsToVideos["death"] = "videos/fear.mp4";
    feeling.negativeKeyWordsToVideos["die"] = "videos/fear.mp4";
    feeling.negativeKeyWordsToVideos["capture"] = "videos/unsettled.mp4";
    feeling.negativeKeyWordsToVideos["trap"] = "videos/unsettled.mp4";
    feeling.negativeKeyWordsToVideos["spooky"] = "videos/unsettled.mp4";
    feeling.negativeKeyWordsToVideos["scary"] = "videos/fear.mp4";
    feeling.negativeKeyWordsToVideos["graveyard"] = "videos/fear.mp4";

}



const initPride = () => {
    const feeling = new FeelingsObject(PRIDEFUL);
    //positive
    //camellia, being a god, being asked to do things

    feeling.positiveKeyWordsToVideos["incredible"] = "videos/fox_thinking.mp4";
    feeling.positiveKeyWordsToVideos["camellia"] = "videos/camellia.mp4";
    feeling.positiveKeyWordsToVideos["faith"] = "videos/pride_in_faithful.mp4";
    feeling.positiveKeyWordsToVideos["guests"] = "videos/pride_in_faithful.mp4";
    feeling.positiveKeyWordsToVideos["observers"] = "videos/pride_in_faithful.mp4";
    feeling.positiveKeyWordsToVideos["lavinraca"] = "videos/pride_in_faithful.mp4";
    feeling.positiveKeyWordsToVideos["pray"] = "videos/pride_in_faithful.mp4";
    feeling.positiveKeyWordsToVideos["love"] = "videos/pride_in_faithful.mp4";
    feeling.positiveKeyWordsToVideos["remember"] = "videos/pride_in_faithful.mp4";
    feeling.positiveKeyWordsToVideos["cherish"] = "videos/pride_in_faithful.mp4";
    feeling.positiveKeyWordsToVideos["fan"] = "videos/pride_in_faithful.mp4";

    //negative
    //slacking off, mortality, being useless, overworking, truth, lies, the scarecrow

    feeling.negativeKeyWordsToVideos["bathroom"] = "videos/bathroom.mp4";
    feeling.negativeKeyWordsToVideos["truth"] = "videos/paradise_and_parasite.mp4";
    feeling.negativeKeyWordsToVideos["zampanio"] = "videos/paradise_and_parasite.mp4";
    feeling.negativeKeyWordsToVideos["scarecrow"] = "videos/paradise_and_parasite.mp4";
    feeling.negativeKeyWordsToVideos["gross"] = "videos/handdrip.mp4";
    feeling.negativeKeyWordsToVideos["disgust"] = "videos/disgust.mp4";
    feeling.negativeKeyWordsToVideos["beneath"] = "videos/digust_hum.mp4";
    feeling.negativeKeyWordsToVideos["below"] = "videos/digust_hum.mp4";
    feeling.negativeKeyWordsToVideos["under"] = "videos/digust_hum.mp4";
    feeling.negativeKeyWordsToVideos["mortal"] = "videos/digust_hum.mp4";
}


const initCompassion = () => {
    const feeling = new FeelingsObject(COMPASSIONATE);
    //positive
    feeling.positiveKeyWordsToVideos["help"] = "videos/peaceful_forest.mp4";
    feeling.positiveKeyWordsToVideos["please"] = "videos/peaceful_forest.mp4";
    feeling.positiveKeyWordsToVideos["confused"] = "videos/peaceful_forest.mp4";
    feeling.positiveKeyWordsToVideos["don't know what to do"] = "videos/peaceful_forest.mp4";
    feeling.positiveKeyWordsToVideos["scared"] = "videos/peaceful_forest.mp4";
    feeling.positiveKeyWordsToVideos["spooky"] = "videos/peaceful_forest.mp4";

    //negative
    //the sacrifice
    feeling.positiveKeyWordsToVideos["bitch"] = "videos/glitchwaterangry.mp4";
    feeling.positiveKeyWordsToVideos["fuck"] = "videos/glitchwaterangry.mp4";
    feeling.positiveKeyWordsToVideos["you have to"] = "videos/glitchwaterangry.mp4";
    feeling.positiveKeyWordsToVideos["overtime"] = "videos/glitchwaterangry.mp4";

    feeling.negativeKeyWordsToVideos["wastes"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/clown.mp4";
    feeling.negativeKeyWordsToVideos["zampanio"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/clown.mp4";
    feeling.negativeKeyWordsToVideos["truth"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/clown.mp4";

    feeling.negativeKeyWordsToVideos["sacrifice"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/sacrifices2.mp4";
    feeling.negativeKeyWordsToVideos["skull"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/cowskull.mp4"
    feeling.negativeKeyWordsToVideos["cow"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/cowskull.mp4"
    feeling.negativeKeyWordsToVideos["horn"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/cowskull.mp4"
    feeling.negativeKeyWordsToVideos["twenty"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/twentydither.mp4"
    feeling.negativeKeyWordsToVideos["20"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/twentydither.mp4"
    feeling.negativeKeyWordsToVideos["clown"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/clown.mp4"
    feeling.negativeKeyWordsToVideos["honk"] = "http://lavinraca.eyedolgames.com/images/HATEHATEHATEHATE/glitches/clown.mp4";
}


const initEnergetic = () => {
    const feeling = new FeelingsObject(ENERGETIC);

    //positive
    //resting, breaks, vacation
    feeling.positiveKeyWordsToVideos["rest"] = "videos/happy_fox_spin.mp4";
    feeling.positiveKeyWordsToVideos["break"] = "videos/happy_fox_spin.mp4";
    feeling.positiveKeyWordsToVideos["vacation"] = "videos/happy_fox_spin.mp4";
    feeling.positiveKeyWordsToVideos["sleep"] = "videos/happy_fox_spin.mp4";
    feeling.positiveKeyWordsToVideos["lunch"] = "videos/happy_fox_spin.mp4";
    feeling.positiveKeyWordsToVideos["play"] = "videos/happy_fox_spin.mp4";
    feeling.positiveKeyWordsToVideos["bonus"] = "videos/happy_fox_spin.mp4";

    //negative
    //eustace, being a god, being asked to do things
    feeling.negativeKeyWordsToVideos["you have to"] = "videos/so_tired.mp4";
    feeling.negativeKeyWordsToVideos["eustace"] = "videos/eustace.mp4";
    feeling.negativeKeyWordsToVideos["work"] = "videos/eustace.mp4";
    feeling.negativeKeyWordsToVideos["overtime"] = "videos/so_tired.mp4";
    feeling.negativeKeyWordsToVideos["hard"] = "videos/eustace.mp4";
    feeling.negativeKeyWordsToVideos["pray"] = "videos/so_tired.mp4";


}


//http://farragofiction.com/CatalystsBathroomSim/EAST/SOUTH/EAST/SOUTH/WEST/bathroom.html
/*
when you get a response: 
* beep
* add the command to the most recent section of prayers (click and prepend true) processOnePrayer
*/
const waitForResponse = async (commandEle, rantEle) => {

    try {
        console.log("JR NOTE: waiting for response")
        //dont care what it gives us, if it returns, fetch again
        await httpGetAsync("http://farragofiction.com:1972/WaitingISwearToPleaseForResponse");
        if (commandEle.innerText === "None...") {
            commandEle.innerText = "";
        }
        const rawData = fetchInitialStoryRaw().replaceAll(HIDE_PATTERN, "");
        const jsonArray = (JSON.parse(rawData)).reverse();
        const json = jsonArray[0];
        console.log("JR NOTE: got response", json)


        processOnePrayer(commandEle, rantEle, json.command, json.response, true, true)
        beep.play();
        waitForResponse(commandEle, rantEle);
    } catch (e) {
        console.error("JR NOTE: problem waiting for response, trying again in 10 seconds", e)
        setTimeout(waitForResponse, 10000);
    }
}

const waitForFaithfulPrayers = async (commandEle) => {

    try {
        console.log("JR NOTE: waiting for prayers")
        //dont care what it gives us, if it returns, fetch again
        await httpGetAsync("http://farragofiction.com:1972/WaitingISwearToPleaseForCommand");
        if (commandEle.innerText === "None...") {
            commandEle.innerText = "";
        }
        const jsonArray = (JSON.parse(httpGet("http://farragofiction.com:1972/ListThePleaseCommandList"))).reverse();
        if (jsonArray.length === 0) {
            commandEle.innerText = "No Prayers Pending";
            return;
        }
        const json = jsonArray[0];
        console.log("JR NOTE: got response", json)
        handleOnePendingPrayer(commandEle, json)

        beep.play();
        waitForFaithfulPrayers(commandEle);
    } catch (e) {
        console.error("JR NOTE: problem waiting for prayer, trying again in 10 seconds", e)
        setTimeout(waitForResponse, 10000);
    }
}






const giantWoman = (index = 0) => {
    const spiels = ["Oh. Uh. I was in the middle of a game... Whatever you want can wait right?"
        , "Fair enough. Let us Pray."]
    let video_options = [];
    const fullScreenEle = createElementWithClassAndParent("div", document.querySelector("body"), 'full-screen-dialog')
    fullScreenEle.style.padding = "0px"


    const bigScreenTV = createElementWithClassAndParent("video", fullScreenEle, "big-screen");
    bigScreenTV.playsinline = true; //so ios doesn't cry
    bigScreenTV.setAttribute('playsinline', true)
    const pickRandomVideoForNext = () => {
        bigScreenTV.src = pickFrom(video_options);
        bigScreenTV.play();
    }


    bigScreenTV.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/letsgogambling_by_pupeteer_of_-moshed-10-04-00-05-06-449.mp4"; //flash of anger before anything else

    bigScreenTV.autoplay = true;
    bigScreenTV.loop = true;


    const bigLady = createElementWithClassAndParent("img", fullScreenEle, "harvest big-lady");
    bigLady.src = "images/Harvest/womanlearnstoreadby_IC_transparent.png";

    const textEle = createElementWithClassAndParent("div", fullScreenEle, "god-dialog");
    textEle.style.cssText = `position: fixed;
        bottom: 0px;
        width: 100%;
        text-align: center;`
    let rant = createElementWithClassAndParent("p", textEle, "inner-dialog");
    const buttonHolder = createElementWithClassAndParent("div", textEle, "fullscreen-button-holder");
    const button = createElementWithClassAndParent("button", buttonHolder, "option");
    button.innerText = "Sorry To Bother You...";

    button.onclick = () => {
        fullScreenEle.remove();
    }



    rant.innerText = spiels[index];
    index++;
    const please = createElementWithClassAndParent("button", buttonHolder, "option");
    please.innerText = "Please let me Pray.";
    please.onclick = () => {
        fullScreenEle.remove();
        //she tries to keep blowing you off but if she's run out of patience it'll just be faster to help you
        if (index + 1 < spiels.length || Math.random() > 0.05 + ((2 * index) / 10)) { //slightly more likely to help you out each time
            giantWoman(index);
        } else {
            theHarvestWakes();

        }
    }
    if (!document.querySelector(".story")) {
        stories(document.querySelector("#library"));
    }


}


//changes every year

const stories = (parent) => {

    const arbitrationStory = createElementWithClassAndParent("div", parent, "story arbitration");
    arbitrationStory.innerHTML = `<p><h2 >Final Week: Motivation: Arbitration</h2><span ><p><span >Once upon a time, there was a teen god named the Harvest.</span></p>

<p><span >Every day she read her books and played her card games and wallowed in hedonism, until one day, the Faithful asked her what would happen if she did not reap what she sowed.</span></p>

<p><span >She was confused. What do you mean that sometimes things could be unpredictable?</span></p>

<p><span >She touched one of the Prayers and it bloomed into a flower which grew a fruit which gave her a card she never could have predicted and she felt... something stir inside her. This card was okay...nothing special... but... what would the NEXT card be like? Would it even blossom? Or would it wither and rot on the vine...</span></p>

<p><span >So, the Harvest created a vast garden sown from the prayers of the Faithful and felt joy with each new fruit her garden bore until one day, the Faithful showed her just how unpredictable they could be. One of the seeds bore not a CARD, but a full DECK, filled with secrets and mysteries. More and more seeds bore these strange fruit.&nbsp;</span></p>

<p><span >So the Harvest decided that helping the Faithful create MORE of these strange fruit was exciting and began Teaching any who came how to alter the laws of reality itself to suit their unpredictable whims.</span></p>

<p><span >Until finally, the Faithful changed reality enough that the Harvest was given so much candy she could no longer control herself and began eating and eating and eating. She ate herself. She ate the restrictions placed upon herself. She ate the garden. She ate the prayers that were sown into that garden.</span></p>

<p><span >One of these prayers was a plea that even as the Harvest slept, she allow the Faithful to continue to play her card game, and continue to harvest the seeds of her Garden.&nbsp;</span></p>

<p><span >And so, the Harvest came back to herself even as she swallowed the last of this prayer, and vowed that she would never again lose so much control.&nbsp;</span></p>

<p><span >She knew that the candy was needed to fuel the garden as she slept, or it would wither and die, but she also knew that if she had too much candy she would devour the Garden and the Faithful would have nothing to play with.</span></p>

<p><span >The Faithful themselves seemed divided on what the right thing to do was. Is it better to lose oneself to pleasure or to deny it outright?</span></p>

<p><span >The Harvest Arbitrated this conflict by commanding that the Faithful could open and close the Garden at their will, while she slept, by providing and denying the Candy she so desperately craved.</span></p>

<p><span >And so every day after the Faithful competed amongst themselves for access to the power and joy the Garden brought them as the Harvest slept, full at last, with her four motivations locked into place: Gambling, Arbitration, Teaching and Eating, dreaming of what horrors and delights the future might hold..</span></p>

`;

    const eatingStory = createElementWithClassAndParent("div", parent, "story eating");
    eatingStory.innerHTML = `<p><h2 >Week 4: Motivation: Storing Energy For The Year/Eating</h2><span ><br></span><span ><br></span><span >The Harvest looks over the Fruits of her Teaching with Pride.</span></p>

<p><span >The Faithful are offering her cards and secrets, full decks for her Garden, &nbsp;her Teaching appreciated.</span></p>

<p><span >The Harvest stills.</span></p>

<p><span >An offer of candy from one of the Faithful.</span></p>

<p><span >She&apos;s so hungry.</span><span ><br></span><span ><br></span><span >But, of course, she should not partake. Not give in.</span></p>

<p><span >The hunger is unseemly. From something she&apos;d rather not think of.</span></p>

<p><span >Gnashing teeth, pumpkin head, beady eyes. The Scarecrow that haunted the Corn Maze, the cradle of her birth.</span></p>

<p><span >She turns her eyes back to the Prayers, seeking.... She's not sure what. A distraction? Absolution in her Duty?</span></p>

<p><span >And then she sees it...</span></p>

<p><span >A prayer. A plea.</span></p>

<p><span >To use a Sacrifice to power her garden even as she grows fallow and sleeps until the next Harvest season.</span></p>

<p><span >Her eyes stray to the candy.</span></p>

<p><span >If it&apos;s for the Faithful... If it&apos;s for the Garden...</span></p>

<p><span >Surely partaking wouldn&apos;t be TOO bad.</span><span ><br></span><span ><br></span><span >It would not give the Faithful anything NOW, no changes to her Library or her Card Game...but...</span></p>

<p><span >But...</span></p>

<p><span >It would let them continue to play it as she slept...&nbsp;</span></p>

<p><span >The energy would fuel this little bit of work, right?</span></p>

<p><span >For a whole year?</span></p>

<p><span >She&apos;s so hungry.</span></p>

<p><span >She begins to eat.</span></p>

<p><span >She does not know when to stop.</span></p>

<p><span >She&apos;s so hungry.</span></p>`;

    const teachingStory = createElementWithClassAndParent("div", parent, "story social");
    teachingStory.innerHTML = `<p><h2 >Week 3: Motivation Acquired: Teaching</h2></p>

<p><span >The Harvest sifts through her garden, pruning the weeds and delighting in the unexpected Fruits of her Faithful&apos;s Labor.</span></p>

<p><span >So many unexpected cats!</span></p>

<p><span >And...</span></p>

<p><span >She stills.</span></p>

<p><span >A familiar title.</span></p>

<p><span >&quot;The Catalyst&quot;.</span></p>

<p><span >The one who gave them their library card.</span></p>

<p><span >Somehow an entire deck of cards bursts from the ripe fruit the Catalyst sowed, dripping and sticky in the Harvest&apos;s hand.</span></p>

<p><span >...</span></p>

<p><span >A...Spelling Bee? The Deck calls itself...</span></p>

<p><span >Filled with lessons on how to find Relics in the card game...</span></p>

<p>She thinks of the Medium's Blasphemy, the Change and Inspiration it showed in creating an entire False Corn Maze... They pray to her still, poems of Myths and Echoes...  Is Blasphemy still Blasphemy if it ultimately Serves her?</p>

<p><span >She thinks of prayers trying to teach her something. To learn what she wants. What would make her happy.</span></p>

<p><span >Did it make the Faithful happy, to try to teach her?</span><span ><br></span><span ><br></span><span >Would SHE be happy to teach others?</span></p>

<p><span >To, in the Catalyst&apos;s footsteps, teach others to Create. To Inspire them to learn to alter the fabric of reality itself?</span></p>

<p><span >Her Faithful would grow...just like this garden, and what strange fruit they would bear...</span></p>

<p><span >There would be no way to know what would happen!</span></p>

<p><span >The Harvest feels the heady rush in not knowing, in gambling with the very fate of the Faithful.</span></p>

<p><span >To Teach them Forbidden Secrets... It could lead the Faithful to great rewards. Candy and cards and lore to treasure and hoard until Lavinraca Season returns once again.</span></p>

<p><span >It could also lead them to great sorrow as well.. Lost save data, lost Motivation (as who has not felt the pang of regret after feasting too much on halloween candy?). Perhaps even crashed pages...</span></p>

<p><span >She can&apos;t wait to find out what happens.</span></p>`;

    const motivationSocialStory = createElementWithClassAndParent("div", parent, "story social");
    motivationSocialStory.innerHTML = `<p><h2 >Week 2: Motivation Acquired: Socialization</h2></p>

<p><span >The Harvest spins and twirls, her cloak flapping as cards and books and clown dolls come tumbling out in her excitement.</span></p>

<p><span >She eagerly mans her booth, waiting for prayers.</span></p>

<p><em><span >What will happen today?</span></em></p>

<p><span >How could she think books and games were more boring than the endlessly surprising variation of PEOPLE!?</span></p>

<p><span >You could never predict them, never predict if you would reap what you sowed, the very idea of multiplayer games is so much MORE than anything you could do alone in a library.</span></p>

<p><span >She swirls her the prayers she&apos;s received into a garden (no boring old musty corn HERE, flowers and fruit only), eagerly waiting to see if they rot on the vine or produce deletactably unpredictable cards or even...</span></p>

<p><span >Dare she dream....</span></p>

<p><span >Whole new decks she never could have imagined!</span></p>

<p><span >All from the minds of the Faithful!</span></p>

<p><span >Her mouth waters just thinking of it.</span></p>

<p><span >Her library may be infinite, but the human mind is somehow something more: It does everything for a reason, no matter how obscure.</span></p>

<p><span >And trying to figure out that reason, to figure out the rules under which some seeds rot and some seeds flourish....</span></p>

<p><span >Life is a pleasure.</span></p>


<p><span >((JR NOTE: The Harvest has learned there is a pleasure to unpredictability and iterating with others, but is pleasure the only thing that motivates her? ))</span></p>

<p><span style='font-family: gameboy' >System Notification! You&apos;ve appealed to her Being Served And Change And Inspiration Domains all at once. Bonus Reward: Relic Hints Added To Sown Cards! Spell them out with your stats to unlock extra features!</span></p>`;


    const gamblingStory = createElementWithClassAndParent("div", parent, "story gambling");
    gamblingStory.innerHTML = `<p><h2 >Day 4: Motivation Acquired: Gambling</h2></p>

<p><span >The Harvest blinks at the Prayer.</span></p>

<p><span >You don&apos;t always get to Reap What You Sow...</span></p>

<p><span >It could be good.&nbsp;</span></p>

<p><span >It could be bad.</span></p>

<p><span >She thinks.</span></p>

<p><span >And with a wave of her hand, extends her godly domain of Change over the card games.</span></p>

<p><span >They were too much like the books that spawned them, weren&apos;t they?</span><span ><br></span><span ><br></span><span >She had made them into cards on a whim (somehow it just felt right)... but...</span><span ><br></span><span ><br></span><span >They still simply let you plod forward, assured that with patience you would consume all (why did she feel weirdly...hungry...?) and miss nothing.</span><span ><br></span><span ><br></span><span >But the idea of...</span></p>

<p><span >Failing...</span></p>

<p><span >Through no fault of your own...</span></p>

<p><span >Sent a strange thrill through her.</span></p>

<p><span >To not KNOW ahead of time if you would win or lose?</span></p>

<p><span >Perhaps it could be interesting to try that out... for a bit.</span></p>

<p><span >(jr note: it&apos;ll take a few days but expect the Rules of the Game to change)</span></p>`;


    const birthdayStory = createElementWithClassAndParent("div", parent, "story birthday");
    birthdayStory.innerHTML = `<h2>Day 1: Birthday</h2>


        <p><span >The Harvest stalks away from her Booth.</span></p>

        <p><span >The NERVE.</span></p>

        <p><span >It was her BIRTHDAY and all she wanted to do was play cards with her Faithful, as was her RIGHT!</span></p>

        <p><span >And that miserable &apos;creator&apos; broke her ability to even SEE the games played.</span></p>

        <p><span >Typical.</span></p>

        <p><span >Her Library contains no doors to slam in its infinite twisting hexagons and connectors but she made do with collapsing into a pile of books with a series of honks and squeaks from her many, many interior clown dolls.</span></p>

        <p><span >This was the worst day EVER.</span></p>`;


    const awakeningStory = createElementWithClassAndParent("div", parent, "story awakening");
    awakeningStory.innerHTML = `<h2>Day 1: Awakening</h2>
        <p><span >&quot;I am the&nbsp;</span><strong><span >Harvest God of The</span></strong><span >&nbsp;</span><strong><span >Library</span></strong><span >. The God Of&nbsp;</span><strong><span >Change</span></strong><span >. Of&nbsp;</span><strong><span >Inspiration</span></strong><span >.</span></p>

        <p><span >But above all: Of&nbsp;</span><strong><span >Being Served</span></strong><span >&nbsp;By The Faithfu</span><strong><span >l.</span></strong><span >&quot;</span></p>

        <p><span >These are the things on the Harvest&apos;s mind.</span></p>


        <p><span >She had everything backwards before. Working all day and taking only occasional breaks?</span></p>

        <p><span >Why try so hard when everything came so easily?&nbsp;</span></p>



        <p><span >The Faithful would send her their prayers and when she got around to it she&apos;d&nbsp;</span><strong><span >Inspire&nbsp;</span></strong><span >them to&nbsp;</span><strong><span >Change</span></strong><span >, or whatever it is the Faithful needed from her.</span></p>

        <p><span >Easy.</span></p>


        <p><span >And when she wasn&apos;t doing THAT she could read as many of the books in her&nbsp;</span><strong><span >Library&nbsp;</span></strong><span >as she wanted!</span></p>

        <p><span >She&apos;d even managed to&nbsp;</span><strong><span >Change&nbsp;</span></strong><span >them into a more sensical form: Children&apos;s Card Games.</span></p>


        <p><span >So when the first few Faithful tapped on her Exposition Booth (and tracked her down to her&nbsp;</span><strong><span >Library&nbsp;</span></strong><span >when she didn&apos;t spawn an Avatar there) she found herself...&nbsp;</span></p>

        <p><span >Frustrated?</span></p>

        <p><span >She was clearly busy. Card games were serious business.&nbsp;</span></p>

        <p><span >Being a God of the Harvest could come later. What was she even supposed to be Harvesting this year anyways? She already was everything she would ever be, right?&nbsp;</span></p>

        <p><span >&nbsp;First, &nbsp;she had Harvested the parts of her body. The television, the tiger, the fox,the cow, &nbsp;the cluster of clown dolls, the first Book of her treasure... The Cultist and the Mummy as well, of course. Countless Sacrifices were Harvested to make her newborn form.</span></p>

        <p><span >Then, of course, she had Harvested the parts of her Domain.&nbsp;</span><strong><span >Change&nbsp;</span></strong><span >and&nbsp;</span><strong><span >Inspiration&nbsp;</span></strong><span >and&nbsp;</span><strong><span >Being Served</span></strong><span >, as well as the native domain of Time being Sacrificed to combine them all into the realm of &nbsp;</span><strong><span >Libraries</span></strong><span >. A place where she could endlessly read and play and dream with no consequences.</span></p>



        <p><span >She had a Form and a Domain, what else WAS there for a God?</span></p>

        <p><span >Time to live the good life, clearly.</span></p>

        <p><span >The Faithful could come back later, when she was between games.&nbsp;</span></p>

        <p><strong><span >(JR NOTE: The Harvest doesn&apos;t feel like taking prayers all the time anymore. Try again later to try to catch her between games! &nbsp;And if you don&apos;t like her current outlook, well, what can you Sacrifice to her this year to change it ;) )</span></strong></p>

        `

}


