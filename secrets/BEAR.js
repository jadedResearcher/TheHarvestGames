/*
A relic can mutate the global name space (including the game)
however it likes. 

On refresh, a relic will no longer be in effect.

A relic should add itself to localStorage so it can be rendered as a book
you can click any time in order to re-apply it (along with the popup)

these relics won't be able to run outside the game, cuz it assumes certain other files loaded
*/
const doBear = () => {
    ALLOWZAMPANIOINFECTION = true; //the reaper of life will destroy all challenge with endless mindlessly spreading life
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "images/Relics/THEDEVILOFFLESHANDCHILDREN_byguideofhunters.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the BEAR relic! 
    <br><br>It's a statue of one of the EIGHT DIVINES!
    <br><Br>The Devil of Flesh and Children allows you to create new cards from a mysterious source to add to any deck!
    <br><br>It will be applied until you refresh the page! Don't worry though, you can re-apply it any time from your bookshelf.`;

    popup("Your stats spelled 'B-E-A-R'!", contentEle)

    addRelicToBar("BEAR", image.src);

}

doBear();

//and of course, nidhogg directly effects the echidna, causing the  "no one can die within truth's horrdors" effect, i.e. Zawhei's power is active in killing death

