/*
A relic can mutate the global name space (including the game)
however it likes. 

On refresh, a relic will no longer be in effect.

A relic should add itself to localStorage so it can be rendered as a book
you can click any time in order to re-apply it (along with the popup)

these relics won't be able to run outside the game, cuz it assumes certain other files loaded
*/
const doBird = () => {
    displayCardAndDeckEdits(); //the witch of blood lets you see how everything is connected and twist them to your purpose
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "images/Relics/STATUE_OF_THEANGELOFISOLATIONANDROYALTY_GUIDE_OFhUNTERS.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the BIRD relic! 
    <br><br>It's a statue of one of the EIGHT DIVINES!
    <br><Br>The Angel of Isolation and Royalty allows you to view the card and deck builder!
    <br><br>It will be applied until you refresh the page! Don't worry though, you can re-apply it any time from your bookshelf.`;

    popup("Your stats spelled 'B-I-R-D'!", contentEle)

    addRelicToBar("BIRD", image.src);

}

doBird();

/*
our witch of blood was always absent from her session
only showing up after it all was over
and here we have our two bound friends/lovers of wodin and the intern never able to reach each other 
its always been connected even when it wasn't

similarly the dinosaur boy never really connected with anyone
*/
