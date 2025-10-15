//up to what uses this to define this
const SAVE_KEY = "PLEASE_HELP_THE_HARVEST_FIND_A_PURPOSE";

//up to what uses this to define this
//https://catalystsbathroomlibrary.neocities.org/
let globalDataObject = {
    candy: 13,
    swearJar: 0,
    relicHintsBought: [],
    seedsHarvested: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], //list of indexes from prayer list, first 31 prayers are rotten, just clear so its not spammy
    cardsReaped: [], //json for seeds reaped from the prayer garden
    deckVictories: {}, //deck name, number victories
    lastPrayerSent: "",//for the garden
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


/*
alright i hit midnight, seriously time to stop
but
i got a lot done today
i felt really inspired
i think , gun to my head etc etc

that my 'secret' is just
i try to always have it so when i feel inspired theres an obvious hook into doing what less inspired me wanted
current me might not feel like coding or writing or whatever
but they CAN write a quick note to try to influence future me
and future me struggles with feeling inspired but not knowing what to do, which usually turns into a million started projects that are never finished
so having a specific list means that before i start anything new i can look at the list and go "oh oh does this spark anything"
and its not even USUALLY what past me was thinking with the note
but at least the chaos is in teh direction of the thing past me wanted
instead of going in a thousand different directions, i june bug around what i wanted to do before
so i finish a lot of what i start 
okay for real, rest time 
*/