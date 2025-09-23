/*
A relic can mutate the global name space (including the game)
however it likes. 

On refresh, a relic will no longer be in effect.

A relic should add itself to localStorage so it can be rendered as a book
you can click any time in order to re-apply it (along with the popup)

these relics won't be able to run outside the game, cuz it assumes certain other files loaded
*/
const doAJAR = () => {
    THE_DOOR_IS_A_JAR = true; //her mind is open
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/ajar.gif";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the DOOR relic! 
    <br><br>When is a door not a door? 
    <br><br>When it's ajar!
    <br><br>The Harvest's Mind is now AJAR. You can view the text of any card in the deck view by hovering over it or clicking it, without having to play the game!
    <br><br>It will be applied until you refresh the page! Don't worry though, you can re-apply it any time from your bookshelf.`;

    popup("Your stats spelled 'A-J-A-R'!", contentEle)

    addRelicToBar("AJAR", image.src);

}

doAJAR();

//i will never stop finding this shitty joke funny and that is a promise
