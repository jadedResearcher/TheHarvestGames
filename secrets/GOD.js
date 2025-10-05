
const doGod = () => {
    global_drawAtATime += global_drawAtATime; //doubled
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "images/Harvest/womanlearnstoreadby_IC_transparent.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the GOD relic! 
    <br><br> You can now draw twice as many cards per turn. Surely this will not be game breaking and destroy all potential challenge.`;

    popup("Your stats spelled 'G-O-D'!", contentEle)

    addRelicToBar("GOD", image.src);

}

doGod();
