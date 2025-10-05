
const doFog = () => {
    global_statRange = 10; //go wild with the rng
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://lavinraca.eyedolgames.com/Week1/Corn/images/Maze/fg%20fog-tileable.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the FOG relic! 
    <br><br> Being lost and confused and running in circles is the BEST part of the corn maze, so why not bring that experience to the Lavinraca Card Game? All stat ranges are now super large (which means you CAN lose stats by playing cards now, lol).`;

    popup("Your stats spelled 'FOG'!", contentEle)

    addRelicToBar("FOG", image.src);

}

doFog();
