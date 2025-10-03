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


const default_video = video_source + "fox_clip.mp4";
const happy_video = video_source + "happy_fox_spin.mp4";
const ominous_video = video_source + "ominous_fox_zoom.mp4";
const fox_thinking = video_source + "fox_thinking.mp4"
const default_harvest = "images/Harvest/quick_Ic_sketch_krita_refusedtowakeup_muchliketheharvest_color.png";

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

    const option1 = createElementWithClassAndParent("input", form, "pray-to-your-unresponsive-god");
    option1.focus();
    option1.placeholder = "Pray to the Harvest?";
    const button = createElementWithClassAndParent("button", form, "option");
    button.innerText = "Submit";
    button.type = "submit";
    form.onsubmit = (e) => {
        console.log("JR NOTE: test")
        e.stopPropagation();
        const prayer = `Dear Sweet Harvest:  ${option1.value} [HIDE]${JSON.stringify(globalDataObject)}[/HIDE]`;
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


    pastPrayers.innerHTML = "<br><br>Previous Prayers<br>"
    let commands = await fetchInitialStory();
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
    container.innerText = command.replaceAll(/\[HIDE\].*\[\/HIDE\]/g, "");
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
        responseEle.innerHTML = `<span class='prayer-text'>${command.replaceAll(/\[HIDE\].*\[\/HIDE\]/g, "")}</span><br><div class='prayer-response'>${response.replaceAll(/\[HIDE\].*\[\/HIDE\]/g, "").replaceAll("\n", "<br>")}</div>`;
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
    container.innerText = prayer.replaceAll(/\[HIDE\].*\[\/HIDE\]/g, "");
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
        const jsonArray = (JSON.parse(httpGet("http://farragofiction.com:1972/StoryTimePleaseDearGod"))).reverse();
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
        , "Seriously, can it not wait?", "You just do not give up, do you?", "Blessings be upon you. There. That's good enough, right?", "I am going to level with you, Faithful, I do not even know what you could pray FOR anymore. Aren't I already perfect?", "Ugh, fine, but make it quick."]
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


    bigScreenTV.src = video_source + "glitchwaterangry.mp4"; //flash of anger before anything else

    bigScreenTV.autoplay = true;
    bigScreenTV.loop = true;


    const bigLady = createElementWithClassAndParent("img", fullScreenEle, "harvest big-lady");
    bigLady.src = "images/Harvest/quick_Ic_sketch_krita_refusedtowakeup_muchliketheharvest_color.png";

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
        if (index < spiels.length || Math.random() > 0.05 + ((2 * index) / 10)) { //slightly more likely to help you out each time
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


