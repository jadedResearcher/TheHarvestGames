
const doCircus = () => {
    global_background_music.src = "http://lavinraca.eyedolgames.com/Week1/Corn/audio/006141890-carnival-fair-carousel-ambienc.mp3";
    global_background_music.play();
    globalDataObject.candy += 10; //a bit more of a taste than simple Tent
    const parent = document.querySelector("body");

    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://lavinraca.eyedolgames.com/Week1/Corn/images/Maze/circus.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the CIRCUS relic!
    <br><br>
    The sweet taste of circuses and carnivals are at the core of Lavinraca (or was it Lavinraca, you can never tell)...
    <br><br>
    Enjoy your time here.
    <br><br>Have ten candy.
    `;

    popup("Your stats spelled 'C-I-R-C-U-S'!", contentEle)

    addRelicToBar("CIRCUS", image.src);

}

doCircus();
