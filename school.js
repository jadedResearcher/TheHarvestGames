/*
Week 2 had a lot of people trying to TEACH.

Some people tried to show the Harvest how to find her own motivation (admirable, but not how this god works, she needs SACRIFICES from the faithful, ,by which I mean we're doing collaborative improv with all our Guests)

Some people hacked the game and showed off how to do it to others (hi wastes!)
*/

const school = async () => {
    const body = document.querySelector("body");
    container.innerHTML = "";
    const parent = createElementWithClassAndParent("div", container, "video-parent");
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
    relicViewing(parent);





}


const relicViewing = (parent) => {
    const container = createElementWithClassAndParent("div", parent, "school-house god-dialog");

    const form = createElementWithClassAndParent("form", container, "pray-to-your-unresponsive-god");
    const instructions = createElementWithClassAndParent("div", form);
    instructions.innerText = "Would  you like to learn the Secrets of a Relic?"

    const option1 = createElementWithClassAndParent("input", form, "relic-viewer-input");
    option1.focus();
    option1.placeholder = "Relic Name";
    const button = createElementWithClassAndParent("button", form, "option");
    button.innerText = "Submit";
    button.type = "submit";
    const javascriptEle = createElementWithClassAndParent("div", parent, "javascript-console");

    form.onsubmit = (e) => {
        const secret = option1.value.toUpperCase();
        runSecret(secret, () => { syncNewestRelicToEle(option1.value.toUpperCase(), javascriptEle) });
        return false;

    }


}

const syncNewestRelicToEle = async (secret, parent) => {

    const text = await fetchText(`http://lavinraca.eyedolgames.com/TheHarvestGames/secrets/${secret}.js`);
    parent.innerText = `Secrets of http://lavinraca.eyedolgames.com/TheHarvestGames/secrets/${secret}.js
    ${text}`;
}

