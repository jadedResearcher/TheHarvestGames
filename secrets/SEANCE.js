
const doSEANCE = () => {
    const parent = document.querySelector("body");

    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the ....
    <br><br>
    Oh no!
    <br><br>
    Watched Eyes says: "(Warning: Guessing this secret will destroy all your progress by erasing your save file. Trust)"
    <br><br>
    And the Medium^2 of Threads confirms its this very secret!!!
    `;

    popup("Your stats spelled 'S-E-A-N-C-E'!", contentEle)


}

doSEANCE();
