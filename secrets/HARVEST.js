
const doGod = () => {
    global_drawAtATime += global_drawAtATime + global_drawAtATime; //doubled
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "images/Harvest/womanlearnstoreadby_IC_transparent.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the HARVEST relic! 
    <br><br> You can now draw THRICE as many cards per turn. Surely this will not be game breaking and destroy all potential challenge.`;

    popup("Your stats spelled 'H-A-R-V-E-S-T'!", contentEle)

    addRelicToBar("HARVEST", image.src);

}

doGod();
