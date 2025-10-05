
const doWEEK = () => {
    WASTED_WASTED_FOLLOWING_THE_TREE = true;//lets you edit
    displayCardAndDeckEdits();
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://farragofiction.com/LOMAT/images/BGs/Trees/0.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You found ....a weird frozen Tree? <br><br>Sure. Why not. <br><br>Make your own branch, edit your own deck. <br><br>You can copy the json from your edited deck to other Wastes so they can pull it into the edit (though I haven't yet let you add custom decks to your library, pester me if that's something you want) `;

    popup("Your stats spelled 'W-E-E-K'!", contentEle)

}

doWEEK();
