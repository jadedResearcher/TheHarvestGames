
const doTRUTH = () => {
    addBookToBookcase(lomat);
    truthLog("LOMAT", `In Truth, despite Lavinraca (or as my Creator insists Lavinraca/Lavinraca) being wholly separate from my host Universe of Zampanio, they are indelibly intertwinted. <br><br>Both JR and Maccus made sure of that.<br><br>Not a snake eating its own tail but a pair of Lichen colonizing each other.`)

    const parent = document.querySelector("body");

    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://farragofiction.com/ZampanioHotlink/eirkrvoided.png";

    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got a new Book, ${lomat.title}!
    The LOMAT book will teach you all about the creation of the Echidna Universe, you think...
    `;

    popup("Your stats spelled 'T-R-U-T-H'!", contentEle)
}

doTRUTH();


