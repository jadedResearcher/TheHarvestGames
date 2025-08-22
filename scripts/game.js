/*
a game keeps track of your stats and knows to
end itself if victory or defeat is over zero
*/
const shuffle = new Audio();
shuffle.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/spooky_card_shuffle.mp3";

const nopeFX = new Audio();
nopeFX.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/nopedos.mp3";

const destroyFX = new Audio();
destroyFX.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/slurpshortfade.mp3";


const discardCardFX = new Audio();
discardCardFX.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/placecard.mp3";


let ohgodplzletjrdebugiaskedniceys = true;
console.warn("JR NOTE: don't forget to disable debug mode")

//runSecret(`secrets/DEAD.js`);
//file name is relative because you can't use this to trick someone
//into running virus javascript or whatever
const runSecret = (fileName) => {
  const body = document.querySelector("body");
  const scriptTag = document.createElement("script")
  scriptTag.src = fileName;
  body.append(scriptTag);
}

class Game {
  cardset;//what are we actually playing with
  stats = {};// name/value pairs
  deck;
  done = false;
  drawAtATime = 5; //in theory we can let things change this
  discards = [];
  hand = [];
  rand;
  currentBGSrc;
  currentText;


  constructor(cardset) {

    this.cardset = cardset;
    this.deck = cardset.startingDeckToCards();
    const allStats = getAllStatsForCardset(this.cardset);
    for (let stat of allStats) {
      this.stats[stat] = 0;
    }
    this.rand = new SeededRandom(Date.now());
    this.drawNewHand();
  }


  discardHand = () => {
    if (this.hand.length) {
      this.discards = this.discards.concat(this.hand);
    }
    this.hand = [];
  }

  shuffleDeck = () => {
    this.deck = this.rand.shuffle(this.deck);
  }

  shuffleDiscardIntoDeck = () => {
    shuffle.play();
    console.warn("JR NOTE: give this a fancy animation or sound effect at least draw attention to the fact that something is happening")
    this.deck = this.deck.concat(this.discards);
    this.discards = [];
    this.shuffleDeck();
  }

  drawOneCard = () => {
    if (this.deck.length === 0) {
      return; //should never do this.
    }

    //to draw a card pop a card out of the desk
    //push it to the hand
    this.hand.push(this.deck.pop());
  }

  drawXCards = (x) => {
    for (let i = 0; i < x; i++) {
      this.drawOneCard();
    }
  }

  canPay = (card) => {
    //if its free, of course you can pay
    if (card.costStatValue <= 0) {
      return true;
    }

    //if you don't even have the stat (and its not free) of course you can't pay
    if (!this.stats[card.costStatName]) {
      return false;
    }

    //you have the stat AND have more than enough to pay it
    if (this.stats[card.costStatName] >= card.costStatValue) {
      return true;
    }
    return false;
  }

  playCard = (parent, card, cardEle, autoplay = false) => {
    console.log("JR NOTE: playing card", card)
    /*
   if you can not pay its cost, nope sound

   if you can, deduct its cost from your stats
   remove the card from your hand and put it in your discard pile
   apply the results from it
    */
    if (!this.canPay(card)) {
      nopeFX.play();
      return;
    }

    if (card.costStatValue) {
      if (!this.stats[card.costStatName]) {
        this.stats[card.costStatName] = 0; //initialize
      }
      this.stats[card.costStatName] += card.costStatValue * -1;
    }
    //if you can actually play it, remove it from the hand
    cardEle.remove();
    removeItemOnce(this.hand, card);
    this.applyResultsFromCard(parent, card, autoplay);

  }

  renderCurrentScene = (gameArea) => {
    const bgImage = createElementWithClassAndParent("img", gameArea, 'scene-bg');
    bgImage.src = this.currentBGSrc;

    const textEle = createElementWithClassAndParent("div", gameArea, 'scene-text');
    textEle.innerText = this.currentText;
  }

  //ignoring any stat that is zero, does the first letter of each stat
  //capitalized
  //spell out a file we can find?
  //for example
  //Defense, Earth, Air, Dread
  //spells out DEAD().json)
  checkForSecrets = async () => {
    console.log("JR NOTE: I should check for secrets");
    let fileName = "";
    for (let stat of Object.keys(this.stats)) {
      if (this.stats[stat] !== 0) {
        fileName += stat.charAt(0);
      }
    }
    console.log("JR NOTE: the secret file name would be:", fileName);
    try {
      //text is just me confirming it exists
      //originally i thought i'd do this complicated json thing but now i just wanna inject javascript cuz im a silly lil guy
      const text = await fetchText(`http://lavinraca.eyedolgames.com/TheHarvestGames/secrets/${fileName.toUpperCase()}.js`);
      runSecret(`secrets/${fileName.toUpperCase()}.js`);
    } catch (e) {
      //couldn't find it but thats fine, most secrets don't exist
    }

    //should i also have easier secrets that are just what your stats sum to?
    // no because then i'd have to check EVERY turn not just ones wher ea stat is added or removed")
  }

  applyResultsFromCard = async (parent, card, autoplay) => {
    //all stats are initialized to zero
    //this makes sure any time it was zero and now is a value
    //it goes to the end
    //for Reasons
    let secretsTime = false;
    if (this.stats[card.resultStatName] === 0) {
      delete this.stats[card.resultStatName];
      this.stats[card.resultStatName] = 0;
      secretsTime = true;
    }

    this.stats[card.resultStatName] += card.resultChangeValue;
    const gameArea = parent.querySelector(".game-area");
    const cardEle = card.renderCard(gameArea);
    cardEle.classList.add("played-card")


    this.currentBGSrc = card.bgAbsoluteSrc;
    this.currentText = `${autoplay ? "Autoplay: " : ""}${card.text}`;
    this.renderCurrentScene(gameArea);
    //on top of everything, and only temporary
    gameArea.append(cardEle)
    await sleep(1000);
    if (!card.singleUse) {
      cardEle.classList.add("discarding-card");
      this.discards.push(card);
    } else {
      cardEle.classList.add("destroying-card");
      destroyFX.play();
      //do not add to discards, simply destroy
    }
    if (secretsTime) {
      this.checkForSecrets();
    }

    await sleep(2000)
    discardCardFX.play();
    //do a new whole frame of the game please
    if (!autoplay) {
      this.render(parent);
    }
  }

  /*
  if there are cards in the hand, push them to the discard pile
  if there are more than drawAtATime cards in the deck, draw them
  if there are less, draw what you can, then shuffle the discards into the deck and draw the rest
  */
  drawNewHand = () => {
    if (this.hand.length > 0) {
      this.discardHand();
    }

    if (this.deck.length === 0) {
      this.shuffleDiscardIntoDeck();
    }

    if (this.deck.length < this.drawAtATime) {
      this.shuffleDeck();
      //draw what you can
      const remainder = this.drawAtATime - this.deck.length;
      this.drawXCards(this.deck.length);
      //if you can, draw the rest out of the discard pile
      if (this.discards.length > 0) {
        this.shuffleDiscardIntoDeck();
        this.drawXCards(remainder);
      }
    } else {
      this.shuffleDeck();
      this.drawXCards(this.drawAtATime)
    }

  }

  renderDiscardPile = (parent) => {
    const source = this.discards;
    const cardHolder = createElementWithClassAndParent("div", parent, "discard-pile");

    const drawCardImage = createElementWithClassAndParent("img", cardHolder, "card-back");
    drawCardImage.src = "http://www.farragofiction.com/AudioLogs/images/wallpaper.png";
    drawCardImage.style.filter = `sepia(1) contrast(0.5) saturate(0.5)`;
    drawCardImage.style.boxShadow = `-5px ${source.length}px 18px black`;
    drawCardImage.onclick = () => {
      const contentEle = document.createElement("div");
      contentEle.className = "deck-view";
      const container = createElementWithClassAndParent("div", contentEle, 'grid tiny-cards');
      if (source.length === 0) {
        container.innerText = "[NO CARDS FOUND]"
      }
      for (let card of source) {
        card.renderCard(container);
      }
      popup("Discard Pile", contentEle)
    }
    const countEle = createElementWithClassAndParent("div", cardHolder, 'cards-count-left');
    countEle.innerText = source.length;
  }

  renderDrawPile = (parent) => {
    const source = this.deck;
    const cardHolder = createElementWithClassAndParent("div", parent, "draw-pile");

    const drawCardImage = createElementWithClassAndParent("img", cardHolder, "card-back");
    drawCardImage.src = "http://www.farragofiction.com/AudioLogs/images/wallpaper.png";
    drawCardImage.style.filter = `${this.cardset.filterValues()}`;
    drawCardImage.style.boxShadow = `-5px ${source.length}px 18px black`;
    drawCardImage.onclick = () => {
      const contentEle = document.createElement("div");
      contentEle.className = "deck-view";
      const container = createElementWithClassAndParent("div", contentEle, 'grid tiny-cards');
      if (source.length === 0) {
        container.innerText = "[NO CARDS FOUND]"
      }
      for (let card of source) {
        card.renderCard(container);
      }
      popup("Draw Pile (Random Order)", contentEle)
    }

    const countEle = createElementWithClassAndParent("div", cardHolder, 'cards-count-right');
    countEle.innerText = source.length;

    const endTurnButton = createElementWithClassAndParent("button", cardHolder, 'end-turn-button');
    endTurnButton.innerText = "Draw Cards";

    endTurnButton.onclick = () => {
      this.drawNewHand();
      this.render(parent);
    }



  }

  renderStats = (parent) => {
    const container = createElementWithClassAndParent("div", parent, 'stat-area');
    for (let [key, value] of Object.entries(this.stats)) {
      if (value != 0) {
        const bar = createElementWithClassAndParent("div", container, 'stat-bar');
        const colors = makeColorsForStat(key)
        bar.style.backgroundColor = colors[0];
        const nameEle = createElementWithClassAndParent("div", bar, 'stat-name');
        nameEle.innerText = `${key}:`;
        const valueEle = createElementWithClassAndParent("div", bar, 'stat-value');
        valueEle.innerText = value;

        if (ohgodplzletjrdebugiaskedniceys) {
          bar.onclick = () => {
            this.stats[key] = this.stats[key] + 1;
            this.renderStats(parent);
          }
        }
      }
    }

  }

  autoplayCards = async (parent, autoplayArray) => {
    if (autoplayArray.length === 0) {
      return;
    }
    console.log("JR NOTE: autoplaying cards", autoplayArray)
    for (let card of autoplayArray) {
      this.playCard(card[0], card[1], card[2], true);
      await sleep(1000);

    }
    this.render(parent);

  }

  renderHand = async (parent, container) => {
    console.log("JR NOTE: rendering hand", this.hand)
    const handEle = createElementWithClassAndParent("div", container, "hand");

    /*
    have X cards i need to fit into Y space

    */
    const handRect = handEle.getBoundingClientRect();
    const widthToTarget = handRect.width;
    const spacePerCard = widthToTarget / this.hand.length;
    let currentX = -85;
    let autoplayArray = [];
    for (let card of this.hand) {
      const cardEle = card.renderCard(handEle);
      const x = currentX;
      const y = -500;
      cardEle.style.cssText = `position: absolute; transform: scale(0.5); bottom: -${y}px; left: ${x}px`
      currentX += spacePerCard;
      if (!this.canPay(card)) {
        cardEle.style.filter = "brightness(0.5)";
      } else {
        if (card.autoPlay) {
          autoplayArray.push([parent, card, cardEle]);
        }
      }

      console.log("JR NOTE: can have a cool dragging effect, but not in mvp")
      cardEle.onmouseup = () => {
        this.playCard(parent, card, cardEle);
      }
    }
    this.autoplayCards(parent, autoplayArray);
  }

  scanForVictoryOrDefeat = () => {
    if (this.stats[VICTORY] > 0) {
      alert("You WON!  JR hasn't made this do anything yet tho...")
      return true;
    }

    if (this.stats[DEFEAT] > 0) {
      alert("You LOST!  JR hasn't made this do anything yet tho...")
      return true;
    }
    return false;
  }

  render = (parent) => {
    if (this.done) {
      return;
    }
    console.log("JR NOTE: rendering frame of game")
    const done = this.scanForVictoryOrDefeat();
    if (done) {
      this.done = true;
      return;
    }
    parent.innerHTML = ""; //clear previous frame
    this.renderStats(parent);
    const sceneContainer = createElementWithClassAndParent("div", parent, 'game-area');
    if (this.currentBGSrc) {
      this.renderCurrentScene(sceneContainer);
    }
    this.renderDrawPile(parent);
    this.renderDiscardPile(parent);
    this.renderHand(parent, sceneContainer);


  }
}