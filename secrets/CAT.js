
const doCAT = () => {
    addBookToBookcase(all_hallows_eve);
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/hallow.gif";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You found Hallow, the faceless Halloween Cat!  You unlocked the book ${all_hallows_eve.title}! `;

    popup("Your stats spelled 'C-A-T'!", contentEle)

}

doCAT();
