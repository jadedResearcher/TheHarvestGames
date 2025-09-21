


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
    }

  ],
  "hueRotate": "200",
  "brightness": "1.5",
  "saturation": "1",
  "contrast": "5",
  "startingDeck": {
    "Ennui Victory": 1,
    "Pet the Kitty": 1,
    "Achieve": 1,
    "Puppet": 1,
    "Teen": 1
  },
  "costStatValue": 0
}