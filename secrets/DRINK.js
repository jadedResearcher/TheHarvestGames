
const doDRINK = () => {
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You found a ...<a target='_blank' href ='http://lavinraca.eyedolgames.com/Week2/menu'>menu?</a>? 
`;

    popup("Your stats spelled 'D-R-I-N-K'!", contentEle)

}

doDRINK();
