
const doSmile = () => {
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You found an ...<a target='_blank' href ='drive_through'>abandoned drive-through?</a>? 
`;

    popup("Your stats spelled 'S-M-I-L-E'!", contentEle)


}

doSmile();
