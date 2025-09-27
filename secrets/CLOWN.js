
const doCLOWN = () => {
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You found a ...<a target='_blank' href ='http://farragofiction.com/CatalystsBathroomSim/NORTH/EAST/EAST/SOUTH/NORTH/SOUTH/EAST/EAST/bathroom.html'>clown</a>? 
`;

    popup("Your stats spelled 'C-L-O-W-N'!", contentEle)


}

doCLOWN();
