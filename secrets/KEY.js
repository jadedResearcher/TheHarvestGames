
const doKEY = () => {
    //catalyst suggested this
    //http://farragofiction.com/CatalystsBathroomSim/EAST/SOUTH/EAST/NORTH/NORTH/NORTH/bathroom.html?lavinraca_keys=harvested
    //they wanted 99 but i figured the arc number of 31 was better
    //plus you just gotta save and refresh to get another 31
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You found a ...<a target='_blank' href ='http://farragofiction.com/CatalystsBathroomSim/EAST/SOUTH/EAST/NORTH/NORTH/NORTH/bathroom.html?lavinraca_keys=harvested'>key</a>? What is this even to?
`;

    popup("Your stats spelled 'K-E-Y'!", contentEle)

};

doKEY();
