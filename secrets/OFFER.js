
const doOffer = () => {
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You found a ...<a target='_blank' href ='http://lavinraca.eyedolgames.com/Week1/butler.html'>job offer?</a>? 
`;

    popup("Your stats spelled 'O-F-F-E-R'!", contentEle)

}

doOFFER();
