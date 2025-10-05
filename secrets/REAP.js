
const doREAP = () => {
    WASTED_WASTED_FOLLOWING_THE_TREE = true;//lets you edit
    displayCardAndDeckEdits(); //waste doesnt work as well as i thought

    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You can now edit decks. If you have a deck you've already edited, you can also copy its datastring here, to add it to your save data and share with others when your prayers become fruit. `;
    const jsonForm = createTextAreaInputWithLabel(contentEle, 'json', "Shared Deck*:", JSON.stringify(this, null, 4), 31);
    const note = createElementWithClassAndParent("div", container, 'sub-section');
    note.innerHTML = "* NOTE: You can only have one deck shared (through the prayers you send, and then in the Garden) at a time. This will also add the deck to your library (until you refresh).";
    note.style.cssText = `    font-size: 14px;
    width: fit-content;
    margin-bottom: 32px;`;

    jsonForm.input.onchange = () => {
        const data = (JSON.parse(jsonForm.input.value))
        addBookToBookcase(data);
        globalDataObject.sharedDeck = data;
        save();

    }


    popup("Your stats spelled 'R-E-A-P'!", contentEle)



}

doREAP();


/*
theorist of labyrinths: Protip: talk directly to the dev to unlock free accidental gameplay secrets!
*/