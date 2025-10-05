
const doREAP = () => {
    WASTED_WASTED_FOLLOWING_THE_TREE = true;//lets you edit
    displayCardAndDeckEdits(); //waste doesnt work as well as i thought

    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You can now edit decks. If you have a deck you've already edited, you can also copy its datastring here, to add it to your save data and share with others when your prayers become fruit. `;

    popup("Your stats spelled 'R-E-A-P'!", contentEle)



}

doREAP();


/*
theorist of labyrinths: Protip: talk directly to the dev to unlock free accidental gameplay secrets!
*/