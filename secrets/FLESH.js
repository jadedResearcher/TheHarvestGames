
const doFLESH = () => {
    candyEarnedPerVictory += candyEarnedPerVictory * candyEarnedPerVictory * candyEarnedPerVictory; //lets get exponential baby
    const parent = document.querySelector("body");

    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://lavinraca.eyedolgames.com/Week1/Corn/images/candy.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the ??? CANDY relic!
    <br><br>
    Uh.
    <br><br>
    Was this...
    <br><br>
    ALWAYS made of meat and bone and blood and fat?
    <br><br>
    Now that you look...
    <br><br>Closer?
    `;

    popup("Your stats spelled 'F-L-E-S-H'!", contentEle)

    addRelicToBar("FLESH", image.src);

}

doFLESH();
