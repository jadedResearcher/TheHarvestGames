
const doHand = () => {
    global_drawAtATime += 1; //doubled
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://lavinraca.eyedolgames.com/Week1/Corn/images/Maze/hand.PNG";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the HAND relic! 
    <br><br> You can now draw 1 more card per turn. `;

    popup("Your stats spelled 'H-A-N-D'!", contentEle)

    addRelicToBar("HAND", image.src);

}

doHand();
