
const doBell = () => {
    global_numberOfReshufflesBeforeLose++;
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/bell.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the BELL relic! 
    <br><br>You can now have one more reshuffle before losing the bell tolls for thee (and you lose the game) (you just lost The Game, by the way, you're welcome)`;

    popup("Your stats spelled 'B-E-L-L'!", contentEle)

    addRelicToBar("BELL", image.src);

}

doBell();
