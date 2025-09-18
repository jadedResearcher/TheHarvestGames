/*
A relic can mutate the global name space (including the game)
however it likes. 

On refresh, a relic will no longer be in effect.

A relic should add itself to localStorage so it can be rendered as a book
you can click any time in order to re-apply it (along with the popup)

these relics won't be able to run outside the game, cuz it assumes certain other files loaded
*/
const doSWEET = () => {
    candyEarnedPerVictory += candyEarnedPerVictory; //lets get multiplicative baby
    const parent = document.querySelector("body");

    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://lavinraca.eyedolgames.com/Week1/Corn/images/candy_small.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the EXPERT CANDY relic!
    <br><br>
    Candy is so great!
    <br><br>
    More please!
    `;

    popup("Your stats spelled 'S-W-E-E-T'!", contentEle)

    addRelicToBar("SWEET", image.src);

}

doSWEET();

/*
it always comes back to candy doesn't it? 

the reason for the season as we pig out and have fun and theres more than one way to reap what you sow

candy is currency and always will be in lavinraca
*/
