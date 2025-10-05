
const doHop = () => {
    global_numberOfReshufflesBeforeLose++;
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You found a ...<a target='_blank' href ='http://lavinraca.eyedolgames.com/Week1/butler.html'>job application?</a>? 
`;

    popup("Your stats spelled 'H-O-P'!", contentEle)

}

doHop();
