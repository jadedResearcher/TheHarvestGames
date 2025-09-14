
const doHallow = () => {
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/hallow.gif";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You found Hallow, the faceless Halloween Cat! `;

    popup("Your stats spelled 'H-A-L-L-O-W'!", contentEle)

}

doHallow();
