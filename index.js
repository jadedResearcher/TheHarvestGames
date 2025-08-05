/*
she's figuring herself out
year zero she didn't exist till the very end and was so confused and upset
last year she's like , okay, i exist, i have accepted that, but who AM i
now she knows who she is and what she wants
and is kinda
how to put it
coasting on that?
the Faithful will be the impetus for her to go "wait, whoa, actually theres something i want that i don't have"
basically now she needs motivation
the first two years were heart and mind i think
the core of her, and then which her she would be
but now we need some breath
which includes all the freedom (from just being a servant) that implies
and we can't forget that she is IN zampanio now, the god the cult worships
if we find out her Motivation, we can better flesh out the struggle between teh cult and training
but right now, no motivation means she's just enjoying her summer break
maybe our goal this year is to get the Faithful to tell her about the outside world (not just the layer of reality they are in) 
and if she learns things she wants to Change, that could be a motivation
if its all just stories, she can lay around and read them forever
maybe she wont find motivation this year
but if she does, that'll be fun

if she learns about zampanio she might pick between the two endings: kill the echidna or get wanda therapy

and it would be OBJECTIVELY funny if theres an entire spooky cult (being murdered by the eye killer in a blind panic) whose sole purpose is to get that billionaire some therapy
*/

const click = new Audio();
click.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/chip.mp3"
window.onload = () => {
    renderTest();
    window.onclick = () => {
        click.play();
    }

}

const renderTest = () => {
    const contents = document.querySelector("#contents");
    const editButton = createElementWithClassAndParent("button", contents);
    editButton.innerText = "Create A Card";
    editButton.onclick = () => {
        contents.innerHTML = "";
        const testScene = new Card();
        testScene.renderEditForm(contents);
    }

    const decjButton = createElementWithClassAndParent("button", contents);
    decjButton.innerText = "Create A CardSet";
    decjButton.onclick = () => {
        contents.innerHTML = "";
        const testDeck = new CardSet();
        testDeck.renderEditForm(contents);
    }
    //note: these are accessed from card set creator now

    /*const cardSetButton = createElementWithClassAndParent("button", contents);
    cardSetButton.innerText = "View Simple Cardset";
    cardSetButton.onclick = ()=>{
        contents.innerHTML = "";
        genericCardset.render(contents)
    }

    const gameTestButton = createElementWithClassAndParent("button", contents);
    gameTestButton.innerText = "Play Test Game";
    gameTestButton.onclick = ()=>{
        contents.innerHTML = "";
        const game = new Game(genericCardset);
        game.render(contents)
    }*/

}