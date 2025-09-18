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

let truthEle;
let scarecrowEle;

let weird_gifs;
//relics will modify this
let candyEarnedPerVictory = 0;



const gif_url = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/";

const FOUNDSECRETSKEY = 'LAVINRACA2025SECRETS'
let ALLOWZAMPANIOINFECTION = false; //life spiralling out of control

const click = new Audio();
click.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/chip.mp3"
window.onload = () => {
    load();
    initThemes();
    initImages();
    truthEle = document.querySelector("#mobileFriendlyConsole")
    scarecrowEle = document.querySelector("#mobileFriendlyConsole")
    const consoleShortcut = document.querySelector("#console-shortcut")
    consoleShortcut.onclick = () => {
        if (truthEle.style.display === "block") {
            truthEle.style.display = "none"
        } else {
            truthEle.style.display = "block"
        }
    }
    renderLibrary();
    window.onclick = () => {
        click.play();
    }
    handleURLParams();

}

const initImages = async () => {
    let tmp = await getImages(gif_url);
    weird_gifs = tmp.map((item) => gif_url + item);
}

const displayCardAndDeckEdits = () => {
    const contents = document.querySelector("#contents");
    const editButton = createElementWithClassAndParent("button", contents);
    editButton.innerText = "Create A Card";
    editButton.onclick = () => {
        contents.innerHTML = "";
        const testScene = new Card();
        testScene.renderEditForm(contents);
    }

    const decjButton = createElementWithClassAndParent("button", contents);
    decjButton.innerText = "Create A Deck";
    decjButton.onclick = () => {
        contents.innerHTML = "";
        const testDeck = new CardSet();
        testDeck.renderEditForm(contents);
    }
}

const handleURLParams = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let edit = urlParams.get('editMode');
    if (edit) {
        displayCardAndDeckEdits();
    }
}

//library books are either DECKS or RELICS
//both are in local storage
//RELICS come from javascript files i load procedurally
//DECKS can be FOUND or CREATED

const renderLibrary = () => {
    const container = document.querySelector("#library")
    renderLibraryCardHeader(container);
    renderBookcase(container);

}

const renderPrayerButton = (parent) => {
    const container = createElementWithClassAndParent("div", parent, "button-container");


    const aboutButton = createElementWithClassAndParent("button", container, "prayer-button");
    aboutButton.innerText = "About"
    aboutButton.onclick = () => {
        const contentEle = createElementWithClassAndParent("div", container);
        contentEle.style.padding = "31px"
        contentEle.innerHTML = `
        <p>Lavinraca (or is it pronounced Lavinraca? I can never keep them straight) is a month long Halloween party that anyone can join. 
        I (JR) joined in 2023, though it had already been around several years at that point.</p>
        <p>I made a <a  target='_blank' href='http://lavinraca.eyedolgames.com/Week3/'>Hotel Site</a> and a <a target='_blank' href='http://lavinraca.eyedolgames.com/Week3/Corn'>Corn Maze</a> in collaboration with Maccus and haven't looked back since!
        That year, we all sacrificed together, over four long weeks,  to bring forth <a  target='_blank' href='http://lavinraca.eyedolgames.com/Week4/Corn'>The Harvest God</a>.
        With the ending of the season, the Harvest lay fallow, dreaming quietly to herself, afraid she would never again awake.</p>
        <p>We all remembered her, though, and the next year she awoke to take our Prayers and let us Define her <a target='_blank' href='http://lavinraca.eyedolgames.com/TheHarvestWakes/'>Domains</a>, again over four long weeks.</p>
        The Faithful prayed to her dilligently and she tried on various Identites before settling on a synthesis of them all.
        Inspiration, Change, Being Served. All Swirled together to become a god of Libraries.</p>
        <p>Now she Wakes once more, requiring Prayers yet not understanding why. When the fantasy of books is so noursishing, why do anything but passively consume fantasy? Why wake when dreams are so pleasant?</p>
        <p>The Faithful have Sacrificed to give her Form, and they have Prayed to give her a Domain.</p>
        <p>Will the Faithful, both Old and New, help her find her Cause? Her Motivation?</p>
        <p>Only the Lost Domain of Time will Tell.</p>


        `
        popup("About", contentEle)

    }


    const button = createElementWithClassAndParent("button", container, "prayer-button");
    button.innerText = "Pray To The Harvest"
    button.onclick = () => {
        //true random, she's not keeping set hours anymore, too lazy
        //i should encourage people to click the button again if she's said no, like a little text box you can put flattery into, to see if you can coax her pride into working instead of rotting
        //the Harvest is here to HELP the people, not to simply rot in the field
        if (Math.random() > 0.05) {
            theHarvestSlacks();
        } else {
            theHarvestWakes();

        }
    }

    const button2 = createElementWithClassAndParent("button", container, "prayer-button");
    button2.innerText = "Buy Hints For Relics"
    button2.onclick = () => {
        relicHintStore();
    }

    const button3 = createElementWithClassAndParent("button", container, "prayer-button");
    button3.innerHTML = "<a href='https://discord.gg/TEE7P8qakp' target='_blank'>Join Discord</a>"
}

const relicHintStore = () => {
    let popupEle;
    const contentEle = createElementWithClassAndParent("div", container);
    contentEle.style.padding = "31px"

    const instructions = createElementWithClassAndParent("div", contentEle);
    instructions.innerHTML = `Buy Relics with 🍬! Relics change the rules, unlock secrets and are just plain bragging rights! <br><Br>You currently have ${globalDataObject.candy} candy. Get more by earning Victory through card games! `;
    //seed riddle
    const seedRiddle = "Can you spell 'S-O-W' with your stats to gain what you Reap from the Harvest?"
    if (!globalDataObject.relicHintsBought.includes(seedRiddle)) {
        const riddleEle = createElementWithClassAndParent("button", contentEle);
        const cost = 13;
        const canBuy = globalDataObject.candy >= cost;
        riddleEle.innerHTML = `${cost} 🍬 ${canBuy ? "" : ":("}`;
        if (canBuy) {
            riddleEle.onclick = () => {
                globalDataObject.candy += -1 * cost;
                globalDataObject.relicHintsBought.push(seedRiddle);
                save();
                alert(seedRiddle)
                popupEle.remove();
                popupEle = popup("Buy Relic Hints With 🍬", contentEle)
            }
        } else {
            riddleEle.disabled = true;
        }

    }

    for (let riddle of relicRiddles) {
        //don't display a riddle we already bought here
        if (!globalDataObject.relicHintsBought.includes(riddle)) {
            const riddleEle = createElementWithClassAndParent("button", contentEle);
            const cost = stringtoseed(riddle)
            const canBuy = globalDataObject.candy >= cost;
            riddleEle.innerHTML = `${cost} 🍬 ${canBuy ? "" : ":("}`;
            if (canBuy) {
                riddleEle.onclick = () => {
                    globalDataObject.candy += -1 * cost;
                    globalDataObject.relicHintsBought.push(riddle);
                    save();
                    alert(riddle)
                    popupEle.remove();
                    popupEle = popup("Buy Relic Hints With 🍬", contentEle)
                }
            } else {
                riddleEle.disabled = true;
            }
        }

    }


    const purchases = createElementWithClassAndParent("div", contentEle);
    purchases.innerText = "Purchased Hints:"
    purchases.style.marginBottom = "13px";
    purchases.style.marginTop = "31px";
    for (let riddle of globalDataObject.relicHintsBought) {
        const riddleEle = createElementWithClassAndParent("li", contentEle);
        riddleEle.innerHTML = riddle;
    }


    popupEle = popup("Buy Relic Hints With 🍬", contentEle)

}

/*
It turns out when you max out a god's Pride and make an entire third of her being
"Being Served By The Faithful"...

She doesn't exactly have a good work ethic anymore, lol. 

I hope we can work together to find something she cares about more than reading her books and playing her card games. 

The Harvest is meant to be used to help the people, not to rot in the field.
*/
const theHarvestSlacks = () => {
    giantWoman();
}



const renderBookcase = (container) => {
    const parent = createElementWithClassAndParent("div", container, "book-case");
    const shelves = createElementWithClassAndParent("div", parent, "shelves");

    //items is EITHER a card set or a relic
    const renderBookCase = (items, bookCallback) => {
        const ret = []; //all books
        shelves.innerHTML = "";
        renderPrayerButton(shelves);

        const allowedColors = ["#4c560d", "#677221", "#a1b234", "#d5f40a", "#7a843d", "#9db211"];

        const chunkSize = 42;
        for (let i = 0; i < items.length; i += chunkSize) {
            const chunk = items.slice(i, i + chunkSize);
            const shelf = createElementWithClassAndParent("div", shelves, "sleeping-shelf");

            for (let item of chunk) {
                const book = createElementWithClassAndParent("div", shelf, "book");
                book.innerText = item.title ? item.title : item; //either string or object with author title text
                if (item.isRelic) {
                    book.innerText = "*" + book.innerText;
                }
                const padding = getRandomNumberBetween(3, 13);
                book.style.cssText = `padding-left: ${padding}px;
        padding-right: ${padding}px;
        font-size: ${getRandomNumberBetween(10, 14)}px;
        font-family: ${pickFrom(["Times New Roman", "Georgia", "Garamond", "serif"])};
        background-color: ${item.render ? pickFrom(allowedColors) : "#131313"};
        color: ${item.render ? "black" : pickFrom(allowedColors)};
        height: ${getRandomNumberBetween(75, 150)}px`;
                ret.push(book);
                book.onclick = () => {
                    bookCallback(item);
                }
            }
        }
        return ret;
    }

    //list of title/source array pairs
    //clicking one calls this with a parent book and all derived books have at least one source array in common
    const content = [];



    const unlockedDecks = createStartingDecks();
    for (let i of unlockedDecks) {
        content.push(i)
    }

    const relics = keyToLocalStorageArray(FOUNDSECRETSKEY);
    for (let relicKey of relics) {
        content.push({ title: relicKey })
    }

    const all_books = renderBookCase(content, (item) => {
        //render a popupup
        //if it has a 'render' function, call it inside the popup
        //otherwise assume its a relic and try fetching it from network
        if (item.render) {
            //cardset can handle rendering itself but lets give it a popup first.
            const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
            const p = popup("Deck: " + item.title, contentEle)

            const playCallback = () => {
                p.remove();
                container.style.display = "none";
            }

            const quitCallback = () => {
                p.remove();
                container.style.display = "block";
            }
            item.render(contentEle, playCallback, quitCallback);

        } else {
            //relic will handle displaying itself and doing its thing
            runSecret(item.title);
        }
    })

}

//little harvest library card the catalyst made, with looping fox animation on screen
const renderLibraryCardHeader = (container) => {
    truthLog("Pride", "The Truth is that the Harvest has cherished her Library Card, given by the Catalyst, more than any other gift.")
    console.log("JR NOTE: container is", container)
    const parent = createElementWithClassAndParent("div", container, "card-parent");
    parent.style.height = "fit-content";


    const shop = createElementWithClassAndParent("div", parent, "card");

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
    top: 34px;
    left: 62px;
    z-index: -1;`;

    tv.volume = 0.0;
    tv.id = "tv"
    tv.src = "http://lavinraca.eyedolgames.com/TheHarvestWakes/videos/happy_fox_spin.mp4";
    tv.autoplay = true;
    tv.loop = true;

    const words = createElementWithClassAndParent("div", parent, "words");
    words.innerText = "The Indulgent Harvest God provides Change and Inspiration to All Who Worship In Her Library of Dreams."

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

const truthLog = (title, text) => {

    const truthCSSTitle = "font-weight: bold;font-family: 'Courier New', monospace;color:red; font-size:25px;text-decoration:underline;";
    const truthCSSBody = "font-weight: bold;font-family: 'Courier New', monospace;color:red; font-size:13px;";
    if (truthEle) {
        const container = createElementWithClassAndParent("div", truthEle);
        container.style.cssText = "padding: 10px;";
        const titleEle = createElementWithClassAndParent("div", container);
        titleEle.innerText = title;
        titleEle.style.cssText = truthCSSTitle;
        const textEle = createElementWithClassAndParent("div", container);
        textEle.innerText = text;
        textEle.style.cssText = truthCSSBody;
        container.scrollIntoView();

    }
    console.log(`%c${title}%c  ${text}`, truthCSSTitle, truthCSSBody);
}

//https://zampaniosim.fandom.com/wiki/Scarecrow
const scarecrowLog = (text) => {
    const scarecrowCSS = "letter-spacing: 10px; padding: 10px;font-weight: bold;font-family: 'Courier New'; background-color: black; monospace;color:#c40444; font-size:33px;";
    if (scarecrowEle) {
        const container = createElementWithClassAndParent("div", truthEle);
        container.style.cssText = scarecrowCSS;
        container.innerText = text;
        container.scrollIntoView();
    }
    console.log(`%c${text}`, scarecrowCSS);
}



/*

REMINDER OF OVERARCHING GOAL: 

The Harvest is now a teenager, distracted by card games and indulgence (being served) and only occasionally remembers to dilligently answer prayers. She answers prayers by making more cards/books for her library.

The cards and secrets are all about the events leading to her own birth and her role in the world. Even though she seems to be slacking off, she's actually processing and growing. (be nicer to teens, man). 

Previous years were about her identity, both Nature and Nuture.

This year is about her Motivation. What Changes does SHE want to bring to the world? Rather than "I answer prayers because my Identity is a god", what actually will bring her to do things other than hedonism? Only the Faithful can say.
*/