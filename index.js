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
    renderLibrary();
    window.onclick = () => {
        click.play();
    }

}

//library books are either DECKS or RELICS
//both are in local storage
//RELICS come from javascript files i load procedurally
//DECKS can be FOUND or CREATED
const renderLibrary = () => {

    const parent = createElementWithClassAndParent("div", container, "video-parent");
    parent.style.height = "fit-content";


    const shop = createElementWithClassAndParent("div", parent, "shop");
    shop.style.maxHeight = "700px";
    shop.style.height = "600px";
    const harvest = createElementWithClassAndParent("img", shop, "harvest");
    //the Harvest of Inspiration looks like whatever she inspires in you
    //which, practically speaking
    //means fanart you make of her that i edit to have a space for her video (if i can)
    //it is NOT easy to get the video working with whatever image so if i choose more than one
    //it'll be not many
    harvest.src = "http://lavinraca.eyedolgames.com/TheHarvestWakes/images/HarvestEyes/Offerings/InspiredHarvests/LibraryCardVideoReady.png";

    const defaultHarvestCSS = ` width: 310px;
                                z-index: 1;
                                height: auto;
                                left: 0px`;
    harvest.style.cssText = defaultHarvestCSS;
    const tv = createElementWithClassAndParent("video", shop);
    tv.playsinline = true; //so ios doesn't cry
    tv.setAttribute('playsinline', true)
    tv.style.cssText = `    height: 14px;
    top: 148px;
    left: 107px;
    z-index: -1;`;

    tv.volume = 0.0;
    tv.id = "tv"
    tv.src = "http://lavinraca.eyedolgames.com/TheHarvestWakes/videos/happy_fox_spin.mp4";
    tv.autoplay = true;
    tv.loop = true;
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