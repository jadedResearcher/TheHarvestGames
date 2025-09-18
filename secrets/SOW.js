/*
A relic can mutate the global name space (including the game)
however it likes. 

On refresh, a relic will no longer be in effect.

A relic should add itself to localStorage so it can be rendered as a book
you can click any time in order to re-apply it (along with the popup)

these relics won't be able to run outside the game, cuz it assumes certain other files loaded
*/
const doSow = () => {
    candyEarnedPerVictory = 1; //other relics might ADD or MULTIPLY but this simply starts it up. you reap what you sow
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://lavinraca.eyedolgames.com/Week1/Corn/images/candy_small.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the BASIC CANDY relic!
    <br><br>
    It makes sense to at least get SOMETHING for winning right?
    <br><br>
    Doesn't reward make the effort all the sweeter?
    <br><Br>
    If there's not a reward, you're basically not playing a game, now are you?
    `;

    popup("Your stats spelled 'S-O-W'!", contentEle)

    addRelicToBar("SOW", image.src);

}

doSow();

/*
it always comes back to candy doesn't it? 

the reason for the season as we pig out and have fun and theres more than one way to reap what you sow

candy is currency and always will be in lavinraca
*/
