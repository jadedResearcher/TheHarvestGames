/*
A relic can mutate the global name space (including the game)
however it likes. 

On refresh, a relic will no longer be in effect.

A relic should add itself to localStorage so it can be rendered as a book
you can click any time in order to re-apply it (along with the popup)

these relics won't be able to run outside the game, cuz it assumes certain other files loaded
*/
const doMAD = () => {

    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "images/Relics/STATUE_OFTHEDEVILOFSPIRALSANDERROR_MAD_originallybyguideofhunters.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the MAD relic! 
    <br><br>It's a statue of one of the EIGHT DIVINES!
    <br><Br>The Devil of Spirals and [ERROR] allows you to ... Hmmm... Something about 'influence the minds of Observers'?<br><br>Seems lame...`;

    popup("Your stats spelled 'M-A-D'!", contentEle)

    addRelicToBar("MAD", image.src);
    httpGetAsync(`http://farragofiction.com:8500/TalkButlerBot?chatHandle=samAndTwigsWildRide&input=${encodeURI("The Worm is Free: What Sins Will He Commit")}?`);

}

doMAD();

//PEEWEE, the Devil of Spirals (and ERROR)
/*
Is of course the member of the 8 Divine MOST important to the universe
the Harvest finds her cult colonizing.

Sam Becomes Twig Becomes Twig/Sam

what other Divine could be their Patron but the Devil of Spirals?

Peewee is torn between settling in and making a life among the horror and setting it ablaze in divine wrath.

The Peewee that chose RAGE that chose destruction understands why Twig burned their whole life to the ground and ran away from it. Sometimes there is nothing worth saving. Even if it means losing everything you are.

It's almost as if choosing between two impossible options doesn't get better if you just pick them both at once.

*/



/*original before BB crashed
The Worm is Free: What Sins Will He Commit: 2
I can only hope that I Witness: 19
Secret Third Option Waste Ending: 23
*/

/*  june, 2025 addition
The Worm is Free: What Sins Will He Commit: 1
I can only hope that I Witness: 1 + 1 badly hacked
${encodeURI("may all who are weary find peace in the hands of the Puppeteer")}?: 1
*/

/*
looks like as of september 2025, no new votes, so any in october are safely because of the harvest
its not actually important, but i wanted to tie peewee and twig together and this was the best way to accomplish this

i always find metanarratives more interseting than lower level ones

it would be funny if the Harvest decides her Motivation is this, but she still needs to be fed, "a secret third option" does not give any hooks
*/