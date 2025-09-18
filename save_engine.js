//up to what uses this to define this
const SAVE_KEY = "PLEASE_HELP_THE_HARVEST_FIND_A_PURPOSE";

//up to what uses this to define this
let globalDataObject = {
    candy: 13,
    relicHintsBought: [],
    deckVictories: {}//deck name, number victories
}


const deleteSave = () => {
    localStorage.removeItem(SAVE_KEY);
}


//up to what uses this to decide how often to save
const save = () => {
    globalDataObject.lastSaveTimeCode = Date.now();
    localStorage.setItem(SAVE_KEY, JSON.stringify(globalDataObject));
    const saveNoise = new Audio("http://farragofiction.com/CatalystsBathroomSim/EAST/SOUTH/EAST/NORTH/NORTH/NORTH/audio/fx/single_heart.mp3");
    saveNoise.play();
}


//if theres any fancy stuff you need to do to save
//like turn hash maps into objects
//you gotta add code here
const load = () => {
    let data = localStorage.getItem(SAVE_KEY);
    if (data) {
        globalDataObject = JSON.parse(data);
        globalDataObject.lastLoadTimeCode = Date.now();
        /*
          only objects that need to respond to functions have to be separately parsed as json
          if they just store data (like facts) its fine to leave them as parsed json
        */
    }

}

