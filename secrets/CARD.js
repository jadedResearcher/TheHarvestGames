//not a relic, a book
const doCARD = () => {
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You found a ...<a target='_blank' href ='http://lavinraca.eyedolgames.com/TheHarvestGames/secrets/In_Her_Library_At_Lavinraca_The_Harvest_Waits_Dreaming-1.pdf'>book</a>? 
`;

    popup("Your stats spelled 'C-A-R-D'!", contentEle)


}

doCARD();

//!!! kr made this!
