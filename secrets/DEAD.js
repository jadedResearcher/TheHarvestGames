/*
A relic can mutate the global name space (including the game)
however it likes. 

On refresh, a relic will no longer be in effect.

A relic should add itself to localStorage so it can be rendered as a book
you can click any time in order to re-apply it (along with the popup)

these relics won't be able to run outside the game, cuz it assumes certain other files loaded
*/
const doDEAD = () => {
    DEADhax = true;//the guide of void will let you void anything out to guide you to secrets
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "images/Relics/StatueOfTheANGELOFDARKNESSANDUNDERDOGS_originallybyGuideofHunters.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the DEAD relic! 
    <br><br>It's a statue of one of the EIGHT DIVINES!
    <br><Br>The Angel of Darkness and Underdogs allows you to void out any stat to better find secrets!
    <br><br>It will be applied until you refresh the page! Don't worry though, you can re-apply it any time from your bookshelf.`;

    popup("Your stats spelled 'D-E-A-D'!", contentEle)

    addRelicToBar("DEAD", image.src);

}

doDEAD();


/*
Q:... If the Eight Divines are the Harvest's rivals, does that mean the town of Lavinraca is inside the Echidna? 

A: nope and neither is the harvest
gods dont have to be within their universe
peewee is the only one who went in
but camellia, the Cultist who was sacrificed (among others) to make the harvest IS from the echidna, she had wandered out to find the corn maze
and since the alt timeline version of her that wasn't sacrificed went BACK
now the harvest is worshipped by a small cult inside the echidna
as well as in lavinraca
dual citizenship
the cult of the harvest retroactively has always been the cult of the nameless one  who has been "hunting" the eye killer
it is, incidentally, extremely weird for both the harvest and The Cultist Camellia to have Camellia worship the Harvest
The Harvest established an identity outside her constitute parts last year
but that doesn't mean seeing a human who makes up the bulk of your memories worship you isn't weird
meanwhile camellia is both "gods are definitionally perfect and superior" and also "i am the best possible version of myself, much better than the eye killer or the Innocent"


tldr: my branch of zampanio, the echidna , is filled with refuges (or kidnapping victims occasionally) from other universes/settings 
and refugees/kidnapping victims frequently leave the echidna to go be in other universes
this does not free them from being in the echidna tho, because they're considered "part of the setting" and thus they simply bifurcate
peewee in arm1 vs peewee in arm2, etc

the arms are ways to show that even within the echidna , time is not a real thing, and because of that, there isn't an "alpha" timeline...just... endless variations of the same thing
the echidna is a single universe but even that isn't as helpful to know as you might think
there is only ever one wanda
and only ever one intern
per universe
when the echidna is destroyed wanda simply has it birth a new one (the mother of monsters) which contains a new, single intern
each arm within the echidna has the same intern in it, Witnessing them
while wanda, with all her ominscience, simply refuses to See anything and moves forward always blind



i think theres something just horseshoes in general
that i finished the void land
and then farragnarok disappeared into the void
its ripples effecting everything after
but unseen
the bard of light , volour, made it so the idea of Truth is inherently meaningless, EVERYTHING is true, EVERYTHING is seen so nothing matters
the thief of time stole the idea of time from the echidna while also giving it a stolen approximation of it with the arms
etc etc


hell even hagala having no class is sorta in a mirror of wanda being the LORD of hagala's aspect

literally no room for hagala


meanwhile i barely even have to talk about despap, zampanio is ALL about teaching you how to hack/create your own realities
the grace of rage is threaded through it all 

be the change you want to see in the world, create your own branch, reject my authority and tear me down and replace it with your own regardless of the consequences 

http://farragofiction.com/PaldemicSim/bio.html?target=TheMan
*/