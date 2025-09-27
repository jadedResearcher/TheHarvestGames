
const doDARK = () => {
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You found a ...<a target='_blank' href ='darkness.html'>flashlight</a>?  You hope you have enough candy to power it...
`;

    popup("Your stats spelled 'D-A-R-K'!", contentEle)

}
doDARK();
