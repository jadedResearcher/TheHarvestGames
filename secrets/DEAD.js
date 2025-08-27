/*
A relic can mutate the global name space (including the game)
however it likes. 

On refresh, a relic will no longer be in effect.

A relic should add itself to localStorage so it can be rendered as a book
you can click any time in order to re-apply it (along with the popup)

these relics won't be able to run outside the game, cuz it assumes certain other files loaded
*/
const doDEAD = () => {
    DEADhax = true;//the guide of void will let you void anything out to guide you to secrets
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "images/Relics/StatueOfTheANGELOFDARKNESSANDUNDERDOGS_originallybyGuideofHunters.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the DEAD relic! <br><br>It's a statue of one of the EIGHT DIVINES!<br><Br>The Angel of Darkness and Underdogs allows you to void out any stat to better find secrets!`;

    popup("Your stats spell 'D-E-A-D'!", contentEle)

}

doDEAD();