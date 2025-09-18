/*
A relic can mutate the global name space (including the game)
however it likes. 

On refresh, a relic will no longer be in effect.

A relic should add itself to localStorage so it can be rendered as a book
you can click any time in order to re-apply it (along with the popup)

these relics won't be able to run outside the game, cuz it assumes certain other files loaded
*/
const doMEAT = () => {
    candyEarnedPerVictory += candyEarnedPerVictory * candyEarnedPerVictory; //lets get exponential baby
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

    popup("Your stats spelled 'M-E-A-T'!", contentEle)

    addRelicToBar("MEAT", image.src);

}

doMEAT();

/*
it always comes back to candy doesn't it? 

the reason for the season as we pig out and have fun and theres more than one way to reap what you sow

candy is currency and always will be in lavinraca
*/
