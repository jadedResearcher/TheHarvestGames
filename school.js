/*
Week 2 had a lot of people trying to TEACH.

Some people tried to show the Harvest how to find her own motivation (admirable, but not how this god works, she needs SACRIFICES from the faithful, ,by which I mean we're doing collaborative improv with all our Guests)

Some people hacked the game and showed off how to do it to others (hi wastes!)
*/

const school = async () => {
    const body = document.querySelector("body");

    const quitButton = createElementWithClassAndParent("button", body);
    quitButton.innerText = "Return To Library";
    quitButton.style.position = "fixed";
    quitButton.style.top = "31px"
    quitButton.style.right = "31px"




    container.style.display = "none";
    const parent = createElementWithClassAndParent("div", body, "video-parent");

    quitButton.onclick = () => {
        parent.remove();
        quitButton.remove();
        container.style.display = "block";
        //re-render library cuz you mighta unlocked a book
        renderLibrary();

    }


    const shop = createElementWithClassAndParent("div", parent, "shop");
    tv = createElementWithClassAndParent("video", shop);
    tv.playsinline = true; //so ios doesn't cry
    tv.setAttribute('playsinline', true)

    tv.volume = 0.0;
    tv.id = "tv"
    tv.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/harvest_teaches.mp4";
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

    const buttonHolder = createElementWithClassAndParent("div", harvestSpeaks, "god-dialog-button-holder");

    const form = createElementWithClassAndParent("form", buttonHolder, "pray-to-your-unresponsive-god");

    const option1 = createElementWithClassAndParent("textarea", form, "pray-to-your-unresponsive-god");
    option1.focus();
    option1.placeholder = "Pray For A Relic? The Harvest just may create it. Or do you instead wish insight on how existing Relics work? (Or even how to find them?). You'll need to visit the Prayer section to see her answers, of course, but this is a great place to fire off questions.";
    const button = createElementWithClassAndParent("button", form, "option");
    button.innerText = "Submit";
    button.type = "submit";
    form.onsubmit = (e) => {
        e.stopPropagation();
        globalDataObject.lastPrayerSent = option1.value;
        //add now that im not hiding it anymore
        globalDataObject.relicsUnlocked = keyToLocalStorageArray(FOUNDSECRETSKEY);

        save(); //to get timecode
        const prayer = `Great Teacher Harvest:  ${option1.value} [HIDE]${JSON.stringify(globalDataObject, (key, value) => {
            if (key === "relicHintsBought" || key === "cardsReaped" || key === "seedsHarvested") {
                return undefined; // Ignore this property
            }
            return value; // Include other properties
        })
            }[/HIDE]`;
        submitCommand(prayer);
        form.remove();
        return false;

    }

    javascriptHacking(parent);

    relicViewing(parent);



}

/*
i bet flower chick finds the cult to be a headache now
they were easy to ignore, just the eye killers weird obsession
but now that theres a group of people with Dangerous Knowoledge (tm) and flower chicks whole thing is preventing apocalypyses....
jadedResearcher — 11:14 AM
peewee was bad enough, with his skull being an Artifact that could let people access the javascript console
she made sure to get that after each of his deaths to prevent it from falling into the wrong hands
but NOW
*/

const javascriptHacking = (parent) => {
    const container = createElementWithClassAndParent("div", parent, "school-house god-dialog");
    const title = createElementWithClassAndParent("div", container);
    title.innerText = "Learn To Hack!"

    const instructions = createElementWithClassAndParent("div", container, 'instructions');
    instructions.innerHTML = `If you can't access the javascript console (common for mobile users) you can input javascript here if you want to practice hacking!
    <br><br>
    TIP: If you have viewed the SOW relic, you'll see a variable inside it, it looks like this: <span style='text-decoration: italics; color: red;'>    candyEarnedPerVictory = 1; //other relics might ADD or MULTIPLY but this simply starts it up. you reap what you sow</span>
    <br><br>
    Try writing and submitting <span  style='text-decoration: italics; color: red;'>candyEarnedPerVictory = 1000</span> and try playing a game to see just how much candy you earn.
    <br><br>
    Most relics will have examples of simple hacks you can do (since they are themselves hacks). 
    <br><br>
    Try designing your own hacks to Change the game as you see fit!
    If anything goes wrong, just refresh the page and things should (mostly) fix themselves!
`

    const form = createElementWithClassAndParent("form", container, "pray-to-your-unresponsive-god");

    const option1 = createElementWithClassAndParent("textarea", form, "relic-viewer-input");
    option1.focus();
    option1.placeholder = "Type any JavaScript you want to execute here!";
    const button = createElementWithClassAndParent("button", form, "option");
    button.innerText = "Submit";
    button.type = "submit";

    form.onsubmit = (e) => {
        //option1.value
        return false;

    }

}

const relicViewing = (parent) => {
    const container = createElementWithClassAndParent("div", parent, "school-house god-dialog");

    const form = createElementWithClassAndParent("form", container, "pray-to-your-unresponsive-god");
    const instructions = createElementWithClassAndParent("div", form);
    instructions.innerText = "Would  you like to learn the Secrets of a Relic?"

    const option1 = createElementWithClassAndParent("input", form, "relic-viewer-input");
    option1.focus();
    option1.placeholder = "Relic Name (try SOW)";
    const button = createElementWithClassAndParent("button", form, "option");
    button.innerText = "Submit";
    button.type = "submit";
    const javascriptEle = createElementWithClassAndParent("div", parent, "javascript-console");

    form.onsubmit = (e) => {
        const secret = option1.value.toUpperCase();
        runSecret(secret, () => { syncNewestRelicToEle(option1.value.toUpperCase(), javascriptEle) });
        return false;

    }

    /*
i have 3/4 of it done
just gotta do the bit where i let non-wastes experiment with some javascript
btw the Harvest having a grace arc has GREAT implications for the cult that worships her that the EyeKiller keeps hunting down and murdering 
finally dangerous eldritch knowledge for me
    */


}

const syncNewestRelicToEle = async (secret, parent) => {
    parent.innerHTML = "";
    const url = `http://lavinraca.eyedolgames.com/TheHarvestGames/secrets/${secret}.js`;

    const link = createElementWithClassAndParent("a", parent);
    link.href = url;
    link.target = "_blank"
    link.innerText = `Secrets of ${url}`;
    const iframe = createElementWithClassAndParent("iframe", parent);
    iframe.src = url;



}

