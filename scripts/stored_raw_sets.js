


//all_hallows_eve in relic
const createStartingDecks = () => {
  const ret = [];
  const jsonArray = [THEHARVESTTHINKS, TROGDAZORG, TERRI, SAMANDTWIGSWILDRIDE];
  for (let json of jsonArray) {
    const deck = new CardSet();
    deck.syncToJSON(json);
    ret.push(deck);
  }

  return ret;
}

const all_hallows_eve = {
  "title": "All  Hallow's Eve",
  "description": "Alya, Hallow and Eve are adorable halloween themed kittens I have recently adopted. \n\nThey will be my test cardset, because I am currently obsessed with them and this helps me to focus.\n\nPlus I have lots of gifs of them already.",
  "cards": [
    {
      "title": "Cute Explosion!",
      "text": "The cuteness has finally overwhelmed you, causing a singularity. Worth it!",
      "costStatName": "Cuteness",
      "singleUse": true,
      "autoPlay": true,
      "costStatValue": 13,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/eve_breathes-moshed-04-30-23-25-49-267.gif",
      "resultStatName": "Victory",
      "resultChangeValue": 13
    },
    {
      "title": "Behold Eve, the Gremlin!",
      "text": "Eve climbed JR and started attacking their hair in a bid to convince them to take her along with Hallow and it worked. Her heavy breathing makes her an incredible source of sound effects AND easy for Hallow to find when its time to wrestle. She was born on cinnamon bun day.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": true,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/suchagoodkitty_eve_is-moshed-05-18-22-10-08-842.gif",
      "resultStatName": "Cuteness",
      "resultChangeValue": 1
    },
    {
      "title": "Behold Hallow the Summoning Dark!",
      "text": "Hallow has no face but he must squeak. He has no fear, no limits, only the raw desire to eat bbq. He is extremely fluffy and full of cuddles and fights in equal measures. He was born on Halloween.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": true,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/hallow.gif",
      "resultStatName": "Cuteness",
      "resultChangeValue": 1
    },
    {
      "title": "Behold Alya, the High Lady!",
      "text": "Alya is a little older than Hallow and Eve, so can reach higher tiers of Crime than they can. Plus, she was born on 4/20. Her shape is best described as 'cryptid', but she DOES have two golden eyes.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": true,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/alya_is_afantastic_cat_nonotes-moshed-05-19-23-53-11-042.gif",
      "resultStatName": "Cuteness",
      "resultChangeValue": 1
    },
    {
      "title": "Hallow and Eve are Besties!",
      "text": "Eve was Hallow's 'seeing eye cat' at the shelter and they love each other so much.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/hallowandeve_loveeachothersoda-moshed-05-29-12-41-50-328.gif",
      "resultStatName": "Cuteness",
      "resultChangeValue": 1
    },
    {
      "title": "Hallow is Aesthetic",
      "text": "Hallow just seems to automatically pose in the spookiest places, 10/10, best blind cat.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/webhallow.gif",
      "resultStatName": "Cuteness",
      "resultChangeValue": 1
    },
    {
      "title": "Hallow and Eve Play Rough",
      "text": "Both Hallow and Eve seem to think that playing involves as many headlocks, bites and full on wrestling moves as possible. Because Hallow is blind, he tends to prefer to grab onto his playmate so he can keep track of them, and Eve has grown up with his style of roughhousing.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/hallow_and_eve_war-moshed-05-25-15-23-02-523.gif",
      "resultStatName": "Cuteness",
      "resultChangeValue": 1
    },
    {
      "title": "Alya is a cryptid",
      "text": "Alya can seemingly lengthen any part of her body she feels like at will. Every time I see her, she's a different shape.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/alya_has_such_wild_shapes-moshed-05-29-23-55-43-206.gif",
      "resultStatName": "Cuteness",
      "resultChangeValue": 1
    },
    {
      "title": "Hallow Vs Alya",
      "text": "Even besides the whole 'eyeless' thing, Hallow and Alya are extremely different black cats.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/alya_andhallow_slow.gif",
      "resultStatName": "Cuteness",
      "resultChangeValue": 1
    },
    {
      "title": "Alya Jumps",
      "text": "We had Hallow and Eve for a few weeks before getting Alya, so it was surprising that a year old kitten was so good at jumping compared to 7month old ones.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/alya_jump-moshed-05-17-22-11-52-105.gif",
      "resultStatName": "Cuteness",
      "resultChangeValue": 1
    },
    {
      "title": "Eve is so silly",
      "text": "She just has so much energy",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/eve_motor-moshed-05-10-15-24-17-473.gif",
      "resultStatName": "Cuteness",
      "resultChangeValue": 1
    }
  ],
  "hueRotate": "359",
  "brightness": "1",
  "saturation": "1",
  "contrast": "2",
  "startingDeck": {
    "Eve is so silly": "2",
    "Alya Jumps": "2",
    "Hallow Vs Alya": "2",
    "Alya is a cryptid": "2",
    "Hallow and Eve Play Rough": "2",
    "Hallow is Aesthetic": "2",
    "Hallow and Eve are Besties!": "2",
    "Cute Explosion!": "1",
    "Behold Eve, the Gremlin!": "1",
    "Behold Hallow the Summoning Dark!": "1",
    "Behold Alya, the High Lady!": "1"
  },
  "costStatValue": 0
}

const lomat = {
  "title": "The Land Of Mists And Trails",
  "description": "A Card version of the land of mists and trails, Changed by our Harvest's Grace.",
  "cards": [
    {
      "title": "Victory",
      "text": "[PLAYER] has finally delivered all the gulls! Hooray!",
      "costStatName": "Energy",
      "singleUse": true,
      "autoPlay": false,
      "costStatValue": 6,
      "bgAbsoluteSrc": "http://farragofiction.com/LifeSim/images/LifeSimBGs/58.png",
      "resultStatName": "Victory",
      "resultChangeValue": 6
    },
    {
      "title": "Get Buff2",
      "text": "Eirikr lifts a whole lot of Sweet Viking Weights!",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/LifeSim/images/LifeSimBGs/AlternianCliff.png",
      "resultStatName": "Athleticism",
      "resultChangeValue": 1
    },
    {
      "title": "Get Buff",
      "text": "Eirikr lifts a whole lot of Sweet Viking Weights!",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/LifeSim/images/LifeSimBGs/AlternianCliff.png",
      "resultStatName": "Defense",
      "resultChangeValue": 1
    },
    {
      "title": "Drink Honey Soda!",
      "text": "Eirikr drinks so much VIKING MEAD, I mean SODA, and gets a sugar rush from all the honey!",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/LifeSim/images/LifeSimBGs/58.png",
      "resultStatName": "Energy",
      "resultChangeValue": 1
    },
    {
      "title": "Dread Rises",
      "text": "Eirikr watches in horror as his beloved All-Father forsakes everything he stood for.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/LifeSim/images/LifeSimBGs/58.png",
      "resultStatName": "Dread",
      "resultChangeValue": 1
    },
    {
      "title": "Defeat",
      "text": "Haha what? Don't you know the leg trolls are fated to win farragnarok???",
      "costStatName": "Nope",
      "singleUse": true,
      "autoPlay": true,
      "costStatValue": 13,
      "bgAbsoluteSrc": "http://farragofiction.com/LifeSim/images/LifeSimBGs/58.png",
      "resultStatName": "Defeat",
      "resultChangeValue": 1
    }
  ],
  "hueRotate": "222",
  "brightness": "1",
  "saturation": "3",
  "contrast": "2",
  "startingDeck": {
    "Victory": 1,
    "Defeat": 1,
    "Get Buff2": "2",
    "Get Buff": "2",
    "Drink Honey Soda!": "2",
    "Dread Rises": "2"
  },
  "costStatValue": 0
}


const TROGDAZORG = {
  "title": "TROGDAZORG THE SUPREME",
  "description": "Ten versions of TROGDAZORG THE SUPREME were sacrificed by the guests of Lavinraca to make the Harvest. \n\nAll failed to make connections to the others who wandered the corn maze. \n\nAll focused on their own selfish desires for candy and destruction.\n\nCan the Harvest find Motivation through them?\n\nShould they?",
  "cards": [
    {
      "title": "Candy Victory",
      "text": "TROGDAZORG THE SUPREME has collected so much candy they can finally rest, the sugar high fading into a sugar crash, and sleep finally coming among the corn.",
      "costStatName": "Bite",
      "singleUse": true,
      "autoPlay": false,
      "costStatValue": 10,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/candyvictory.png",
      "resultStatName": "Victory",
      "resultChangeValue": 1
    },
    {
      "title": "Burnination",
      "text": "TROGDAZORG THE SUPREME threatens to burninate the countryside and the peasants give them candy to placate them.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/burninate.gif",
      "resultStatName": "Bite",
      "resultChangeValue": 1
    },
    {
      "title": "Dinosaur Victory",
      "text": "TROGDAZORG THE SUPREME ignores all the haters and finally becomes what they were always meant to be: an actual literal dinosaur. Peace washes over them and they lets themself dissolve into the Harvest.",
      "costStatName": "Dino",
      "singleUse": false,
      "autoPlay": true,
      "costStatValue": 1,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/identity_rawr.gif",
      "resultStatName": "Victory",
      "resultChangeValue": 10
    },
    {
      "title": "Gain Identity",
      "text": "TROGDAZORG THE SUPREME feels so good biting all the candy. They feel almost like a real dinosaur!",
      "costStatName": "Bite",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 2,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/roar.gif",
      "resultStatName": "Identity",
      "resultChangeValue": 1
    },
    {
      "title": "Roar Time",
      "text": "TROGDAZORG THE SUPREME roars and roars fueled by how much of a dinosaur they feel!",
      "costStatName": "Identity",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 2,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/roar.gif",
      "resultStatName": "Roar",
      "resultChangeValue": 1
    },
    {
      "title": "Dinosaur Time",
      "text": "TROGDAZORG THE SUPREME shouts SWEET DINOSAUR FACTS at the top of their lungs, fueled by all the roaring they're doing!",
      "costStatName": "Roar",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 2,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/roar.gif",
      "resultStatName": "Dino",
      "resultChangeValue": 1
    }
  ],
  "hueRotate": "359",
  "brightness": "2.1",
  "saturation": "4",
  "contrast": "3",
  "startingDeck": {
    "Candy Victory": "1",
    "Burnination": "7",
    "Identity Victory": "1",
    "Gain Identity": "3",
    "Roar Time": "2",
    "Dinosaur Time": "1",
    "Dinosaur Victory": "1"
  },
  "costStatValue": 0
}
//not unintentional the stat Belief shares the nickname of the rabbitsim protag
const TERRI = {
  "title": "Orb Wizard Terri",
  "description": "Ten versions of Terri were sacrificed by the Guests of Lavinraca to make the Harvest.\n\nAll were blinded by their intrinsic motivation to wander mazes, blinded to the Truth that this was not the Maze they were from.\n\nTo them, the pleasure of being lost, of searching forever for some illusory Truth is all that mattered.\n\n\nCan the Harvest find Motivation through them? Should they?\n",
  "cards": [
    {
      "title": "Recursion Victory",
      "text": "Terri has finally realized that the End is Never The End only within Zampanio. Within Lavinraca, there is an end each year. Peace washes over her and she lets herself dissolve into the Harvest.",
      "costStatName": "Recursion",
      "singleUse": true,
      "autoPlay": false,
      "costStatValue": 2,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/recursion_victory.gif",
      "resultStatName": "Victory",
      "resultChangeValue": 2
    },
    {
      "title": "Maze Love",
      "text": "Terri is absolutely certain that she is within one of Zampanio's perfectly safe Mazes (TM), where no one ever dies and things only change in an infinite spiral of endless endings.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/terri1.png",
      "resultStatName": "Belief",
      "resultChangeValue": 1
    },
    {
      "title": "Glitch Time",
      "text": "Terri confidently glitches through the walls of corn maze, knowing that ALWAYS leads to super cool secrets.",
      "costStatName": "Belief",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 2,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/terriglitch.png",
      "resultStatName": "Energy",
      "resultChangeValue": 1
    },
    {
      "title": "Horror",
      "text": "Terri clutches her custom halloween mask in horror. There are no secrets here. There is nothing here. This maze has an end and she is denied it now.",
      "costStatName": "Energy",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 2,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/terriabstract.gif",
      "resultStatName": "Abstraction",
      "resultChangeValue": 1
    },
    {
      "title": "Recursion",
      "text": "West is where reality lies but west is needed to leave this maze which means this maze is not within Reality not within Zampanio not within the Echidna not within Reality so its not lying which means west is real which means this is actually a real maze and the scarecrow is actually....",
      "costStatName": "Abstraction",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 2,
      "bgAbsoluteSrc": "http://farragofiction.com/LifeSim/images/LifeSimBGs/58.png",
      "resultStatName": "Recursion",
      "resultChangeValue": 1
    }
  ],
  "hueRotate": "200",
  "brightness": "1.5",
  "saturation": "1",
  "contrast": "5",
  "startingDeck": {
    "Recursion Victory": 1,
    "Maze Love": 7,
    "Glitch Time": 5,
    "Horror": 3,
    "Recursion": 1
  },
  "costStatValue": 0
}


const SAMANDTWIGSWILDRIDE = {
  "title": "Sam and Twig's Wild Ride",
  "description": "8 version of Twig were sacrificed, despite them finally finding the outhouse they sought. <br><br>The harrowing <a target='_blank' href='http://farragofiction.com/AdventureSimWest/?nostalgia=lavinraca.txt'>Truths</a> they were forced to face within forged them into something new. A creature capable of taking both paths in the yellow wood. Sam, the creature of lies and web, and Twig, the creature of fangs and blood each live a half life once they escaped the corn maze.",
  "cards": [
    {
      "title": "Bifurcation Victory",
      "text": "Sam is Twig and Twig is Sam and Each is Half the Perspective Needed For Growth and Each.... Each accepts they will never grow. They are not the final version of themeslves, only echoes living within a god. Peace washes over them both and they finally allow themselves to be absorbed within the Harvest.",
      "costStatName": "Dream",
      "singleUse": true,
      "autoPlay": false,
      "costStatValue": 2,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/samtwig.gif",
      "resultStatName": "Victory",
      "resultChangeValue": 2
    },
    {
      "title": "Become More",
      "text": "Sam/Twig (or is it Twig/Sam) become more of who they always were all along. You can point back to any part of their past and show the proof that they were always this rage filled animal or always this cold and calculating machine. Funny, how that is? We contain multitudes, until we choose to break down the middle and pretend we never did.",
      "costStatName": "Ascension",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 2,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/samtwig.gif",
      "resultStatName": "Dream",
      "resultChangeValue": 1
    },
    {
      "title": "Woof Woof",
      "text": "Twig is a very bad dog. They eat garbage and bite people they weren't told to and only do training exercises they want to.",
      "costStatName": "Mutt",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 2,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/hundempty.png",
      "resultStatName": "Ascension",
      "resultChangeValue": 1
    },
    {
      "title": "Tick Tock",
      "text": "Sam is a very good doll. They spin webs and move their limbs according to their Big Bro's whims and barely even notice when it all comes crashing down.",
      "costStatName": "Doll",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 2,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/spiderempty.png",
      "resultStatName": "Ascension",
      "resultChangeValue": 1
    },
    {
      "title": "Become Dog",
      "text": "Twig chooses to run away from home and become a Hund forever, fangs and blood and tooth and claw. Their Hundmaster, Rava will train them properly.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/twig_to_twig.gif",
      "resultStatName": "Mutt",
      "resultChangeValue": 1
    },
    {
      "title": "Become Doll",
      "text": "Twig chooses stop fooling around with pretending to run away and go back to being Sam.  Their Big Bro will train them properly.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Year1/twig_to_sam.gif",
      "resultStatName": "Doll",
      "resultChangeValue": 1
    }
  ],
  "hueRotate": "200",
  "brightness": "1.5",
  "saturation": "1",
  "contrast": "5",
  "startingDeck": {
    "Bifurcation Victory": 1,
    "Become Doll": 5,
    "Become Dog": 5,
    "Tick Tock": 5,
    "Woof Woof": 3,
    "Become More": 1
  },
  "costStatValue": 0
}




//sure why not expose her thoughts to the Faithful
//you cannot hurt her in a way that matters

//future jr, don't forget to add new cards to starting deck
const THEHARVESTTHINKS = {
  "title": "The Harvest Thinks",
  "description": "The Harvest thinks... About so many things. She is a teenager now. Not the angry newborn right after Sacrifice. Not the bewildered Child asking to be cared for. <br><br>What does she want from her future?<br><br>Why does she want it?<br><br>Why is dedicating herself to a Cause so much more boring than reading books and playing games?<br><br>As the Faithful Pray to her, her Thoughts will end up here. If the Door To Her Mind Is AJAR you may read them, even without playing her Game.",
  "cards": [
    {
      "title": "Ennui Victory",
      "text": "Sure, whatever, win whenever you want, what does it matter?",
      "costStatName": "",
      "singleUse": true,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/undefined-moshed-08-31-15-03-04-085.gif",
      "resultStatName": "Victory",
      "resultChangeValue": 1
    },
    {
      "title": "Birthday",
      "text": "It is my BIRTHDAY, my SPECIAL DAY, and the creator could not even handle inviting the Faithful to play cards with me right! The NERVE!",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/birthday-moshed-10-01-09-49-04-270.gif",
      "resultStatName": "Languish",
      "resultChangeValue": 1
    },
    {
      "title": "Blameless",
      "text": "Is it even MY fault if the Faithful's prayers go unanswered? They TOLD me to take it easy so that's what I'm doing!",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/simba-moshed-08-31-14-58-24-871.gif",
      "resultStatName": "Absolution",
      "resultChangeValue": 1
    },
    {
      "title": "Be Served",
      "text": "Like a dude on Butler Island, my job is to literally be served. The Faithful are basically my Butlers, aren't they? Running around and making sure I'm comfortable. They gave me so many books to read!  I don't understand why they're clowns now... Cirky's? Are we supposed to be entertaining someone?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/bellhop.gif",
      "resultStatName": "Butler",
      "resultChangeValue": 1
    },
    {
      "title": "Pet the Kitty",
      "text": "I do not know why people keep giving me cats. I only know they are adorable and fierce and I love them.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/AllHallowsEve/hallowedpumpkin.gif",
      "resultStatName": "Cat",
      "resultChangeValue": 1
    },
    {
      "title": "Be Dutiful",
      "text": "I am the Harvest God, and my domains are Change, Inspiration and Being Served. Therefore, my DUTY is to just passively hang out and let Faithful be inspired by me through acts of service. Right? I should just sit here? Why does that...feel....wrong?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/2024-10-10_21.24.54-moshed-09-28-17-40-54-331.gif",
      "resultStatName": "Duty",
      "resultChangeValue": 1
    },
    {
      "title": "Store Energy",
      "text": "Everything feels like it takes so much energy... Can't I sleep through this Season? Does anyone even need me?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/tumblr_7874dc032986f6e7328618a205b03c3a_87d05544_1280.jpg",
      "resultStatName": "Energy",
      "resultChangeValue": 1
    },
    {
      "title": "Keep the Faith",
      "text": "Change. Inspiration. Being Served. Is that really why people sacrificed so much to create me? Do they really need nothing from me? Why do the Faithful keep coming back? What Change do they even want?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/2024-10-10_23.50.20-moshed-09-28-17-44-02-116.gif",
      "resultStatName": "Faith",
      "resultChangeValue": 1
    },
    {
      "title": "Be the god",
      "text": "Plenty of gods just sit back and take it easy during their fesitval season. Why should I work so hard? ",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/worlds_tiredest_guy-moshed-09-28-17-47-36-201.gif",
      "resultStatName": "God",
      "resultChangeValue": 1
    },
    {
      "title": "Play Games",
      "text": "I'm HAPPY when I read my books and play my games...right? So why does it feel so...wrong? Like corn rotting in the field until it ferments. Sickly sweet and heady...Is there such a thing as too much of something you love?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/handdrip2-moshed-05-03-23-40-3-moshed-09-28-17-49-06-272.gif",
      "resultStatName": "Happiness",
      "resultChangeValue": 1
    },
    {
      "title": "Know Thyself",
      "text": "I am the Harvest, a god created from so many sacrifices to preside over Change, Inspiration and Being Served. My Temple is a Vast Library filled with all my favorite things. I should be happy with all these things. But why do I feel so... hungry. Will the books fill the void inside me?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/2024-10-10_21.24.16-moshed-09-28-17-38-46-408.gif",
      "resultStatName": "Identity",
      "resultChangeValue": 1
    },
    {
      "title": "Make Merry",
      "text": "Smiles and candy are the reason for the season. ...Do my domains make people smile? Does change and inspiration and seeing me be served make the Faithful smile? Am I... fun?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/theharvest-moshed-09-28-17-51-21-192.gif",
      "resultStatName": "Jubuliance",
      "resultChangeValue": 1
    },
    {
      "title": "Read a Book",
      "text": "I read and read book after book, absorbing so many pieces of knowledge... Yet... shouldn't I feel INSPIRED by them? Isn't that what I am the god of?  Is inspiration more than simple consumption? (I'm so hungry).",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/undefined_sacrifice7-moshed-08-31-15-01-38-345.gif",
      "resultStatName": "Knowledge",
      "resultChangeValue": 1
    },
    {
      "title": "Be Served",
      "text": "The Faithful love me. They give me sacrifices, creations in my name to show the Inspiration I have gifted them. What does it feel like to create, I wonder...",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/fey.gif",
      "resultStatName": "Love",
      "resultChangeValue": 1
    },
    {
      "title": "Inspire Others",
      "text": "The Indulgent Muse of Shifting Libraries. This is one of my many titles. I inspire others, yet am myself served. My library is forever changing, forever distracting.... It describes passivity. I exist, therefore I inspire others. I exist within a vast, changing library. I need not toil in the field for I am served by others. But... inaction feels like rot. Like stagnation. Am I just bad at resting?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/cult-moshed-09-28-17-54-26-428.gif",
      "resultStatName": "Muse",
      "resultChangeValue": 1
    },
    {
      "title": "Be Given Your Role",
      "text": "What have I done to earn my luxuries? Was merely the circumstances of my birth enough to allow me to lie fallow in indulgence? The games please me, the books entertain and educate in equal measures. Surely this is enough? How much greed can one god have? (I'm so hungry).",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/exactly_where-moshed-05-03-23-31-43-287.gif",
      "resultStatName": "Nepotism",
      "resultChangeValue": 1
    },
    {
      "title": "Praise the Harvest",
      "text": "I am the god of the Harvest. I accept sacrifices and service  in exchange for allowing others to take Inspiration from my existence. I Change each year. I am exactly as I should be.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestWakes/images/source_images/chibi_harvest1.png",
      "resultStatName": "Praise",
      "resultChangeValue": 1
    },
    {
      "title": "Seek Glory",
      "text": "I want to not be passive. I want to not be pampered. I want to DO something. I want to acomplish something. I want to matter. I want to create. I want to BE inspired instead of inspring. I want to CAUSE change instead of BEING changed. I want to.... I want...I'm so hungry....",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/smiley-moshed-09-28-21-26-07-630.gif",
      "resultStatName": "Quest",
      "resultChangeValue": 1
    },
    {
      "title": "Candy Riches",
      "text": "I'm so hungry. Halloween is a season of Harvest, of crops grown fat on the vine, of candy collected in costumes. Of cozy nights in front of a fire with a good book. Why do I only have half of my birthright?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/smiley-moshed-09-28-21-24-16-077.gif",
      "resultStatName": "Riches",
      "resultChangeValue": 1
    },
    {
      "title": "Collect Sweets",
      "text": "I'm so hungry. Why? What fills me with this endless WANT? (im so hungry). Is it one of the things Sacrificed to me? I close my eyes and I see pumpkins and teeth. What am I? (im so hungry)",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/pumpkin_lantern_crochet-moshed-05-03-23-35-53-531.gif",
      "resultStatName": "Sweet",
      "resultChangeValue": 1
    },
    {
      "title": "Collect Teeth",
      "text": "Teeth and teeth and teeth and teeth and bite and sweet and gnash and chew and slurp and gulp and sweet sweet sweet sweet candy.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/smiley-moshed-09-28-21-30-24-456.gif",
      "resultStatName": "Teeth",
      "resultChangeValue": 1
    },
    {
      "title": "Too Bad",
      "text": "I was born from blood and meat and candy and pictures and dreams and hopes and echoes. Always echoes. I live but one month a year. No matter what I do. No matter how I fear. I will always return.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/corn%20maze%2001-moshed-09-28-21-3-moshed-09-28-21-35-35-015.gif",
      "resultStatName": "Unlucky",
      "resultChangeValue": 1
    },
    {
      "title": "Decide Your Fate",
      "text": "I am the god of the Harvest. Yet have I made even one decision on my own? The Sacrifices that made me, the Domains I was gifted. Not one act of my own will...",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/the_archiving_watcher_of_threa-moshed-09-28-21-40-10-240.gif",
      "resultStatName": "Volition",
      "resultChangeValue": 1
    },
    {
      "title": "Become More",
      "text": "I am the god of the Harvest. I am the Will of the People. Their belief, their faith, their prayers, all become me. I am not a mortal.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/exposition_booth-moshed-09-28-21-42-14-007.gif",
      "resultStatName": "Will",
      "resultChangeValue": 1
    },
    {
      "title": "Become Noble",
      "text": "I feel numb. Anasthetized? I read, I play, I listen to the Faithful when I remember to. But it's so hard to remember. Numb myself with play until I forget to fear. To care.",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/xenon-moshed-09-28-21-45-13-066.gif",
      "resultStatName": "Xenon",
      "resultChangeValue": 1
    },
    {
      "title": "Be Present",
      "text": "Last year I Protected a Realm. It was good. I was useful. I embodied the spirit of the age. What need is there for me now?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/2024-10-04_23.36.01-moshed-09-28-21-47-30-136.gif",
      "resultStatName": "Zeitgeist",
      "resultChangeValue": 1
    },
    {
      "title": "Achieve",
      "text": "Have I achieved enough? Part of me says 'no', part of me says 'yes'. Isn't it easier if it's 'yes'?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/010110111010111110101010_sacri.gif",
      "resultStatName": "Achievement",
      "resultChangeValue": 1
    },
    {
      "title": "Teen",
      "text": "The one holding my strings called me a 'Teenager'. I am only three years old. That's not right, is it? What are teenagers usually like?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/undefined_sacrifice7-moshed-08-31-15-01-38-345.gif",
      "resultStatName": "Teen",
      "resultChangeValue": 1
    },
    {
      "title": "Puppet",
      "text": "So many clown puppets make me up, is it any wonder that I am myself a Puppet used to celebrate Lavinraca?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/moony_sacrifice_8-moshed-09-21-10-56-42-023.gif",
      "resultStatName": "Puppet",
      "resultChangeValue": 1
    },
    {
      "title": "Render",
      "text": "Do I really need to get all dressed up to answer prayers? Surely this sketchy form is fine, right? It's easier...",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Harvest/literallytheharvestthisyear_forafewdaysatleast.jpg",
      "resultStatName": "Dressed",
      "resultChangeValue": 1
    },
    {
      "title": "Pray",
      "text": "Ugh... Why do I even need to answer Prayers? Aren't I already perfect? The Faithful sure seem to like doing it though... Fine... but I'm NOT going to bother rendering a back button. They wanted to pray so badly they can just stay there till they get bored and refresh. ",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Harvest/prototype1.png",
      "resultStatName": "Faithful",
      "resultChangeValue": 1
    },
    {
      "title": "Count the Blackbirds",
      "text": "Am I a Tool, or a Toy?",
      "costStatName": "",
      "singleUse": false,
      "autoPlay": false,
      "costStatValue": 0,
      "bgAbsoluteSrc": "http://lavinraca.eyedolgames.com/TheHarvestGames/images/Harvest/prototype1.png",
      "resultStatName": "Omen",
      "resultChangeValue": 1
    }
  ],
  "hueRotate": "200",
  "brightness": "1.5",
  "saturation": "1",
  "contrast": "5",
  "startingDeck": {
    "Ennui Victory": 1,
    "Birthday": 3,
    "Pet the Kitty": 1,
    "Achieve": 1,
    "Puppet": 1,
    "Teen": 1,
    "Keep the Faith": 1,
    "Store Energy": 1,
    "Blameless": 1,
    "Be Served": 1,
    "Be Dutiful": 1,
    "Be the god": "1",
    "Play Games": "1",
    "Know Thyself": "1",
    "Make Merry": "1",
    "Read a Book": "1",
    "Inspire Others": "1",
    "Count the Blackbirds": "1",
    "Pray": "1",
    "Render": "1",
    "Be Present": "1",
    "Become Noble": "1",
    "Become More": "1",
    "Decide Your Fate": "1",
    "Too Bad": "1",
    "Collect Teeth": "1",
    "Collect Sweets": "1",
    "Candy Riches": "1",
    "Seek Glory": "1",
    "Praise the Harvest": "1",
    "Be Given Your Role": "1"
  },
  "costStatValue": 0
}