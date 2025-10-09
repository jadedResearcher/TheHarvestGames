//a cardset should be a playstyle, along with a clown type, ask maccus what those clown types were again

/*
  <li>existence of cardset vs deck. a cardset has a title and a narrative blurb (i.e. 'a story about saving a princess', 'a story about camille going to the doctor'), while a deck is the cards you currently have available to play. you unlock cards from your cardset as you go. (after ever shuffle?)</li>

*/

let game;
let startingCardSets = [];



const getAllStatsForCardset = (cardset) => {
  const ret = [];
  const cards = cardset.cards;
  for (let card of cards) {
    const cost = card.costStatName;
    if (cost && !ret.includes(cost)) {
      ret.push(cost)
    }

    const reward = card.resultStatName;
    if (reward && !ret.includes(reward)) {
      ret.push(reward)
    }
  }
  return ret;
}

/*
its june 2025 now, i have three kittens (Alya, Hallow and Eve) and they aaaalmost get along (hallow and eve are still besties tho). 

i made the new eyedol games landing page and a BUNCH of kitten related things while i was focusing my spoons onto them but
i think im ready to get back into this


*/

const getCardWithTitle = (title, cardArray) => {
  console.log("JR NOTE: trying to get card with title", title)
  return cardArray.find((i) => i.title === title);
}

//map of title: amount pairs
const howManyOfThisCardTitleInStartingDeck = (title, deckMap) => {
  const results = deckMap[title];
  if (results !== undefined) {
    return results;
  } else {
    return 0; //if its one, the form is annoying to edit, cuz only saves if differnet
  }
}

class CardSet {
  title = "Test Card Set";
  description = "A cardset is a playstyle, mostly oriented around a narrative theme or clown type. This cardset is based around just, normal heroic tropes. Fighting evil and all that.";
  //all cards possibly to find in a cardset
  cards = [victory, findPotato, eatPotato, defeat, evilRises, trainingStrength, fightEvilWithStrength, superTrain];
  //a nice bright orange back for the cards for default
  //brightness(2) contrast(2) saturate(3) hue-rotate(359deg)
  hueRotate = "359";
  brightness = "2";
  saturation = "3";
  contrast = "2";
  //what cards you begin the game with
  startingDeck = {}

  constructor(title, description, cards, startingDeck) {
    this.title = title ? title : this.title;
    this.cards = cards ? cards : this.cards;
    this.description = description ? description : this.description;
    //since its a map little harder to set default
    if (!startingDeck) {
      this.startingDeck[victory.title] = 1
      this.startingDeck[findPotato.title] = 4
      this.startingDeck[victory.title] = 1
      this.startingDeck[eatPotato.title] = 2
      this.startingDeck[defeat.title] = 1
      this.startingDeck[evilRises.title] = 2
      this.startingDeck[trainingStrength.title] = 3
      this.startingDeck[fightEvilWithStrength.title] = 1
      this.startingDeck[superTrain.title] = 0
    } else {
      this.startingDeck = startingDeck;

    }
  }

  //the color of the card deck's back
  filterValues = () => {
    return `brightness(${this.brightness}) contrast(${this.contrast}) saturate(${this.saturation}) hue-rotate(${this.hueRotate}deg)`;
  }

  startingDeckToCards = () => {
    console.log("JR NOTE: this.startingDeck", this.startingDeck)
    const ret = [];
    //for every map in the starting deck, find a card that matches its title and add it the correct amount of times
    for (let category of Object.keys(this.startingDeck)) {
      for (let i = 0; i < this.startingDeck[category]; i++) {
        const card = getCardWithTitle(category, this.cards);
        if (card) {
          ret.push(card);
        }
      }
    }
    return ret;
  }

  addRandomZampanioCardToDeck = (parent, playCallback, quitCallback) => {
    console.log("JR NOTE: addRandomZampanioCardToDeck");
    const card = new Card();

    //todo procedural

    const chosenTheme = pickFrom(Object.values(all_themes));
    const person = titleCase(chosenTheme.pickPossibilityFor(PERSON));
    const adj = titleCase(chosenTheme.pickPossibilityFor(ADJ));
    const compliment = titleCase(chosenTheme.pickPossibilityFor(COMPLIMENT));
    const insult = titleCase(chosenTheme.pickPossibilityFor(INSULT));
    const supermove = titleCase(chosenTheme.pickPossibilityFor(SUPERMOVE));
    const object = titleCase(chosenTheme.pickPossibilityFor(OBJECT));
    const location = titleCase(chosenTheme.pickPossibilityFor(LOCATION));
    const philosophy = titleCase(chosenTheme.pickPossibilityFor(PHILOSOPHY));

    const childbackstory = titleCase(chosenTheme.pickPossibilityFor(CHILDBACKSTORY));
    const generalbackstory = titleCase(chosenTheme.pickPossibilityFor(GENERALBACKSTORY));
    const miracle = titleCase(chosenTheme.pickPossibilityFor(MIRACLE));
    const loc_desc = titleCase(chosenTheme.pickPossibilityFor(LOC_DESC));
    const monster_desc = titleCase(chosenTheme.pickPossibilityFor(MONSTER_DESC));
    const smell = titleCase(chosenTheme.pickPossibilityFor(SMELL));
    const taste = titleCase(chosenTheme.pickPossibilityFor(TASTE));
    const feeling = titleCase(chosenTheme.pickPossibilityFor(FEELING));
    const sound = titleCase(chosenTheme.pickPossibilityFor(SOUND));
    const effects = titleCase(chosenTheme.pickPossibilityFor(EFFECTS));

    const titlePossibilities = [`${sound} Sound`, `${feeling} Texture`, `Summon ${object}`, `Summon ${person}`, `Teleport ${location}`, `${smell} Smell`, `${supermove}`, `${taste} Flavor`]
    card.title = pickFrom(titlePossibilities);
    card.text = pickFrom([childbackstory, generalbackstory, miracle, loc_desc, monster_desc, effects])
    card.resultStatName = pickFrom([compliment, insult, adj])

    if (weird_gifs.length > 0) {
      card.bgAbsoluteSrc = pickFrom(weird_gifs)
    }

    this.cards.push(card);
    //exactly one
    this.startingDeck[card.title] = 1;
    //refresh
    parent.innerHTML = "";
    this.render(parent, playCallback, quitCallback)
  }


  render = (parent, playCallback, quitCallback) => {
    const title = createElementWithClassAndParent("h2", parent);
    title.innerText = this.title;
    const description = createElementWithClassAndParent("div", parent, 'sub-section');
    description.innerHTML = this.description;

    if (ALLOWZAMPANIOINFECTION) {
      //more life more life
      const zampanioButton = createElementWithClassAndParent("button", parent);
      zampanioButton.innerText = "Infect With Zampanio Card?"
      zampanioButton.onclick = () => {
        this.addRandomZampanioCardToDeck(parent, playCallback, quitCallback);
      }
    }

    const gameTestButton = createElementWithClassAndParent("button", parent);
    gameTestButton.innerText = "Play Game";
    gameTestButton.onclick = () => {
      console.log("JR NOTE: play game")
      const container = document.querySelector("#container")

      const gameContainer = createElementWithClassAndParent("div", container, 'game-container');
      const quitButton = createElementWithClassAndParent("button", container);
      quitButton.id = "quit-game"
      //expose for testing
      game = new Game(this);
      parent.style.display = "none";
      if (playCallback) {
        console.log("JR NOTE: play callback")
        playCallback(); //any other cleanup we need to do
      }
      quitButton.innerText = "Quit Game";
      quitButton.style.position = "fixed";
      quitButton.style.top = "31px"
      quitButton.style.right = "31px"

      const quit = () => {
        gameContainer.remove();
        parent.style.display = "block";
        quitButton.remove();
        if (quitCallback) {
          quitCallback(); //any other cleanup we need to do
        }
      }
      game.render(gameContainer, quit);

      quitButton.onclick = () => {
        quit();
      }

    }
    const label = createElementWithClassAndParent("div", parent);
    label.innerText = "All Possible Cards:"
    label.style.marginTop = "31px"
    const cardsContainer = createElementWithClassAndParent("div", parent, 'grid tiny-cards');

    for (let card of this.cards) {
      card.renderCard(cardsContainer);
    }

    const label2 = createElementWithClassAndParent("div", parent);
    label2.innerText = "Starting Deck:"
    label2.style.marginTop = "31px"

    const deckContainer = createElementWithClassAndParent("div", parent, 'grid tiny-cards');

    const hydratedDeck = this.startingDeckToCards();
    console.log("JR NOTE: hydratedEck", hydratedDeck)
    for (let card of hydratedDeck) {
      card.renderCard(deckContainer);
    }

  }
  //this just in, the segundian lamia played a game called "shrub"
  //(based on a typo i made the other day)
  syncCardsToJSONString = (jsonArray) => {
    this.cards = []
    for (let card of jsonArray) {
      this.cards.push(makeCardFromJSON(card));
    }
  }

  /*
i realized something the other day
there's a whole community of people spreading rumors about zampanio that im getting to watch
its nice
nostalgic
  */
  syncToJSON = (json) => {
    for (let key of Object.keys(json)) {
      if (key === "cards") {
        //json[key]
        this.cards = [];
        for (let cardObj of json[key]) {
          this.cards.push(makeCardFromJSON(cardObj))
        }

      } else {
        this[key] = json[key]; //default behavior
      }
    }
  }


  /*
i think i have a really simple core game i am trying to build with it
as simple as something like this can be
that will let me quickly create new decks that tell their own stories/have their own secrets (except to wastes)
and we decided that obviously teh harvest will still accept prayers
but inverted now
before she accepted prayers all day besides during her breaks
but now she's remembered that 23 parts of herself come from a universe where all disputes are handled via childrens card game
so
she's playing zampanio the card game p much constantly 
then comes up for air twice a day for lunch and to panic remember she has prayers to answer
the prayers will then manifest as new card decks
created by me

there will be a lot of clowns inside them
but also i intend for the tools to be available to anyone brave enough to make their own decks to share
cuz the harvest is Change and Inspiration and Libraries and etc
i forgot all her domains
oh right, Being Served
she's a decadent self indulgent god who wants you to make things for her
  */

  renderEditForm = (parent) => {
    window.onerror = (e) => {
      console.error(e)
      console.log(e)
      alert("An error happened? If you have a javascript console, check to see it, otherwise.. uh. Whoops? Maybe it didn't break the page..." + e)
    }
    console.log("JR NOTE: rendering edit form for this", this)
    const container = createElementWithClassAndParent("div", parent, 'edit-container');
    //make a new one for each game
    let gameContainer;

    const headerEle = createElementWithClassAndParent("h2", container);
    headerEle.innerText = "Edit CardSet!";

    const summaryEle = createElementWithClassAndParent("div", container, 'summary');
    summaryEle.innerHTML = `${this.title}, ${this.cards.length} unique cards and ${Object.keys(this.startingDeck).length} cards in starting deck.`;

    const gameTestButton = createElementWithClassAndParent("button", container);
    gameTestButton.innerText = "Play Test Game With This Deck";
    gameTestButton.onclick = () => {
      gameContainer = createElementWithClassAndParent("div", parent, 'game-container');
      const quitButton = createElementWithClassAndParent("button", parent);
      //expose for testing
      game = new Game(this);
      container.style.display = "none";
      game.render(gameContainer);
      quitButton.innerText = "Quit Game And Go Back To Editing";
      quitButton.style.position = "fixed";
      quitButton.style.top = "31px"
      quitButton.onclick = () => {
        gameContainer.remove();
        container.style.display = "block";
        quitButton.remove();
      }

    }

    const shareButton = createElementWithClassAndParent("button", container);
    shareButton.innerText = "Sow This Deck To The Harvest's Faithful";

    shareButton.onclick = () => {
      //so ALL hides can have this
      this.lastSaveTimeCode = Date.now();
      console.log("JR NOTE: praying");
      save(); //to get timecode
      //sends  a special prayer to turn this deck into a Seed, in the hopes it may be one day reaped
      submitCommand(`A seed has been sown named ${this.title} [HIDE] ${JSON.stringify(this, null, 4)}[/HIDE]`, true);
      alert("If anything went wrong, your Seed will become Corrupt and no one can reap what you sowed. Good luck!")
    }


    const jsonForm = createTextAreaInputWithLabel(container, 'json', "Save Data*:", JSON.stringify(this, null, 4), 31);
    const note = createElementWithClassAndParent("div", container, 'sub-section');
    note.innerHTML = "* NOTE: you can edit this card either in the save data directly, or the form below.";
    note.style.cssText = `    font-size: 14px;
    width: fit-content;
    margin-bottom: 32px;`;



    jsonForm.input.onchange = () => {
      this.syncToJSON(JSON.parse(jsonForm.input.value))
      container.remove();
      this.renderEditForm(parent);
    }

    const syncThisToForm = (attributeName, value) => {
      if (attributeName.includes("startingDeck")) {
        console.log("JR NOTE: starting deck needs to be", attributeName.replace("startingDeck", ""), value)
        //in theory could have a system that parses ANY map as x.y or something but too risky in case the card title has a dot or whatever my separator is
        this.startingDeck[attributeName.replace("startingDeck", "")] = value;
      } else {
        this[attributeName] = value;
      }

      container.remove();
      this.renderEditForm(parent);
    }


    const titleForm = createTextInputWithLabel(container, 'title', "Title", this.title);
    titleForm.input.onchange = () => syncThisToForm("title", titleForm.input.value);

    const textForm = createTextAreaInputWithLabel(container, 'text', "Text", this.description);
    textForm.input.onchange = () => syncThisToForm("description", textForm.input.value);

    //brightness(2) contrast(2) saturate(3) hue-rotate(359deg)
    const brightnessInput = createNumberInputWithLabel(container, 'brightness', `# 'Card Back Brightness`, this.brightness);
    brightnessInput.input.onchange = () => syncThisToForm("brightness", brightnessInput.input.value);

    const contrastInput = createNumberInputWithLabel(container, 'contrast', `# 'Card Back Contrast`, this.contrast);
    contrastInput.input.onchange = () => syncThisToForm("contrast", contrastInput.input.value);

    const saturateInput = createNumberInputWithLabel(container, 'saturate', `# 'Card Back Saturation`, this.saturation);
    saturateInput.input.onchange = () => syncThisToForm("saturation", saturateInput.input.value);

    const hueInput = createNumberInputWithLabel(container, 'hue', `# 'Card Back Hue Rotation`, this.hueRotate);
    hueInput.input.onchange = () => syncThisToForm("hueRotate", hueInput.input.value);


    const drawCardImage = createElementWithClassAndParent("img", container, "card-back");
    drawCardImage.src = "http://www.farragofiction.com/AudioLogs/images/wallpaper.png";
    drawCardImage.style.filter = `${this.filterValues()}`;
    drawCardImage.style.boxShadow = `-5px 3px 18px black`;


    const jsonFormCards = createTextAreaInputWithLabel(container, 'json', "Cards in This Set:", JSON.stringify(this.cards, null, 4), 31);

    jsonFormCards.input.onchange = () => {
      this.syncCardsToJSONString(JSON.parse(jsonFormCards.input.value))
      container.remove();
      this.renderEditForm(parent);
    }

    const cardsNote = createElementWithClassAndParent("div", container, 'sub-section');
    cardsNote.innerHTML = "* NOTE: Each card shoulud only appear a single time unless you have a good reason. These will be the cards that the shop pulls from.";
    cardsNote.style.cssText = `    font-size: 14px;
    width: fit-content;
    margin-bottom: 32px;`;

    let index = 0;
    for (let card of this.cards) {
      index++;
      const numberInput = createNumberInputWithLabel(container, 'card-count' + index, `# '${card.title}' Cards In Starting Deck`, howManyOfThisCardTitleInStartingDeck(card.title, this.startingDeck));
      numberInput.input.onchange = () => syncThisToForm(`startingDeck${card.title}`, numberInput.input.value);

    }



    this.render(container);

  }
}

const genericCardset = new CardSet();



/*
 i need you to understand that i am adopting *kittens*

 itty bitty kittens

 they're too young to take home yet

 but the shelters letting me visit them tomorrow and i am so hype i can't codes

 im gonna turn their pics and videos into so many spooky things

*/

/*
okay actually no, that didn't work out, the kittens were too sick to visit AND someone else adopted them

but i found BETTER than them.

(sorry jimbo, i know your name was perfect but it wasn't meant to be)

i found an eyeless kitten named hallow, claimed to be born on halloween and his best friend who breathes really loud and scary but that lets him follow her around

they're so freaking adorable and loving and cute and hallow the eyesless void is so completely my aesthetic

faceless little kitty, its like the slugcatsona the herald made for me
*/

//https://www.tumblr.com/jadedresearcher/783279833598803968/eve-is-my-other-new-kitten-and-she-is-a-seeing?source=share
//https://www.tumblr.com/jadedresearcher/783279651810377728/everyone-stop-everything-theyre-doing-and-look-at?source=share