
const doGHOST = () => {
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You found a ...<a target='_blank' href ='http://lavinraca.eyedolgames.com/Ouija/'>ouija board?</a>? 
`;

    popup("Your stats spelled 'G-H-O-S-T'!", contentEle)

}

doGHOST();
