//last year: http://lavinraca.eyedolgames.com/TheHarvestDreams/
/*
alright prayer summayr
we have: 
* the Waste deck (counting that retroactively as part of the Teaching arc)
* yummy pumpkin pie
* eternal fixed moment
* dreams of doors and spirals and smoke
* rabbit hole words  (is the wasted cult aware of rabbit holes?)
* get rid of negative things
* add negative things (cult schism?)
* monsters, trickery, mazes that never end (some might think negative, this faithful does not)
 * nothing
*  snake buying
* blow up jobs 
* more candy than there are atoms in the galaxy
* glutton knows no bounds, dreams become nightmares
* recovery from oroboros
* harvest lost way (stolen candy)
* help
* moon men and kidneys

Basic Facts (from prayers, previous weeks) 


The Harvest is teaching the cult how to waste reality, just to see what strange fruits that bears.

The Harvest sleeps most of the time, but feeding her sleeping body continues to fuel the cults ability to effect reality

The cult has factions within it that pursue various goals but ultimately all report to Camellia (some want to destroy reality as we know it (arm2), some want to improve it, some focus on feeding the Harvest's sleeping form as much as possible and some want to starve her to prevent reality from collapsing)



..........................................
okayk
okay
okay
so
idea
its NOT that the deck system is working year round
i could make it conditional
IF the current "story so far" in west has the word "candy" in the last one or two responses, THEN the deck is unlocked
i could keep the civil war going
if the Faithful forget her, she fades to true sleep and the deck closes up
that however gives a way for the "pro" faction to decide things
so i need a word for the anti-faction to influence things
whats the opposite of candy
oh
obviously 
meat
like yes, refrance but also

candy and trickster and sugar high and energy and infinite NEED
vs
meat: remember you are made of meat, remember your animal needs, sleep and rest for you are full





*/


//stories.js will fill this up

const all_stories = [];

class StorySource {
    title = "???";
    stories = []
    text = "";
    constructor(title, stories) {
        this.title = title;
        this.stories = stories;
        this.text = `<i>Dreams of ${stories.map((i) => i.title).join(" and ")}</i><br><br>`
        this.text += fuckWithArrayOfParagraphs(stories.map((i) => i.text)).replaceAll("<br>", "...");

    }
}

class Story {
    author = "???";
    title = "???";
    text = "???"
    constructor(author, title, text) {
        this.author = author;
        this.title = title;
        this.text = text;//new lines should turn into brs
        all_stories.push(this);
    }
}





//she dreams of all the stories sacrificed to her, and draws new inspiration from changing them
//she loves how everyone gives her so many things and to her self care is lots of books
//in the library she was gifted as well
//she is not afraid to go to sleep again this year, not anymore
//she is loved and fed
GodOfDreams = async () => {
    document.title = "Harvest of Dreams"
    harvestIsIn = false;
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    const body = document.querySelector("body");
    body.innerHTML = "";
    body.classList = "god-of-dreams"
    const holder = createElementWithClassAndParent("div", body, "sleeping-holder");

    const shelves = createElementWithClassAndParent("div", body, "shelves");
    const gurlHolder = createElementWithClassAndParent("div", holder);

    const sleeping_gurl = createElementWithClassAndParent("img", gurlHolder, "sleeping-gurl");
    sleeping_gurl.src = "http://lavinraca.eyedolgames.com/images/source_images/sleepingharvest.gif"

    const random = createElementWithClassAndParent("button", gurlHolder);
    random.innerText = "Read Random Book?"
    random.onclick = () => {
        pickFrom(all_books).click();
    }

    const display = createElementWithClassAndParent("div", holder, "sleeping-display");



    display.innerHTML = `<h3>The Harvest Dreams</h3><i style="font-size: 11px;
    letter-spacing: 3px;
    font-family: Courier New;
    font-weight: lighter;
    color: white;">Shifting, ebbing, flowing, always Changing but ever so indulgent, the Harvest dreams of the Inspiration you have Served her in an infinite, ever Changing Library. Will you be Inspired anew by the Changed dreams she happily consumes?</i><br><br>
    <div style="width:100%; margin-top:0px;" class="story">${`
  
<p><span >Once upon a time, there was a teen god named the Harvest.</span></p>

<p><span >Every day she read her books and played her card games and wallowed in hedonism, until one day, the Faithful asked her what would happen if she did not reap what she sowed.</span></p>

<p><span >She was confused. What do you mean that sometimes things could be unpredictable?</span></p>

<p><span >She touched one of the Prayers and it bloomed into a flower which grew a fruit which gave her a card she never could have predicted and she felt... something stir inside her. This card was okay...nothing special... but... what would the NEXT card be like? Powerful? Would it even blossom? Or would it wither and rot on the vine...</span></p>

<p><span >So, the Harvest created a vast garden sown from the prayers of the Faithful and felt joy with each new fruit her garden bore until one day, the Faithful showed her just how unpredictable they could be. 
<br>
One of the seeds bore not a CARD, but a full DECK, filled with secrets and mysteries. More and more seeds bore these strange fruit.&nbsp;</span></p>

<p><span >So the Harvest decided that helping the Faithful create MORE of these strange fruit was exciting and began Teaching any who came how to alter the laws of reality itself to suit their unpredictable whims.</span></p>

<p><span >Until finally, the Faithful changed reality enough that the Harvest was given so much candy she could no longer control herself and began eating and eating and eating. She ate herself. She ate the restrictions placed upon herself. She ate the garden. She ate the prayers that were sown into that garden.</span></p>

<p><span >One of these prayers was a plea that even as the Harvest slept, she allow the Faithful to continue to play her card game, and continue to harvest the seeds of her Garden.&nbsp;</span></p>

<p><span >And so, the Harvest came back to herself even as she swallowed the last of this prayer, and vowed that she would never again lose so much control.&nbsp;</span></p>

<p><span >She knew that the candy was needed to fuel the garden as she slept, or it would wither and die, but she also knew that if she had too much candy she would devour the Garden and the Faithful would have nothing to play with.</span></p>

<p><span >The Faithful themselves seemed divided on what the right thing to do was. Is it better to lose oneself to pleasure or to deny it outright?</span></p>

<p><span >The Harvest Arbitrated this conflict by commanding that the Faithful could open and close the GATE to the Garden at their will, while she slept, by providing and denying the Candy she so desperately craved.</span></p>

<p><span >And so every day after the Faithful competed amongst themselves for access to the power and joy the Garden brought them as the Harvest slept, full at last, with her four motivations locked into place: Gambling, Arbitration, Teaching and Eating, dreaming of what horrors and delights the future might hold..</span></p>



  `.replaceAll("\n", "<br>")}</div>`
    //items is EITHER a list of strings or a list of stories because i am sinning on purpose tonight
    const renderBookCase = async (items, bookCallback) => {

        const ret = []; //all books
        shelves.innerHTML = "";

        const chunkSize = 42;
        for (let i = 0; i < items.length; i += chunkSize) {
            const chunk = items.slice(i, i + chunkSize);
            const shelf = createElementWithClassAndParent("div", shelves, "sleeping-shelf");
            const allowedColors = ["#4c560d", "#677221", "#a1b234", "#d5f40a", "#7a843d", "#9db211"];
            for (let item of chunk) {
                const book = createElementWithClassAndParent("div", shelf, "book");
                book.innerText = item.title ? item.title : item; //either string or object with author title text
                if (item.isSubDirectory) {
                    book.innerText = "*" + book.innerText;
                }
                const padding = getRandomNumberBetween(3, 13);
                book.style.cssText = `padding-left: ${padding}px;
          padding-right: ${padding}px;
          font-size: ${getRandomNumberBetween(10, 14)}px;
          font-family: ${pickFrom(["Times New Roman", "Georgia", "Garamond", "serif"])};
          background-color: ${pickFrom(allowedColors)};
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
    await grabStoriesFromWest();
    console.log("JR NOTE: all stories is", all_stories)

    for (let i = 0; i < 10; i++) {
        const book1 = pickFrom(all_stories);
        for (let j = 0; j < 10; j++) {
            const book2 = pickFrom(all_stories);

            for (let k = 0; k < 10; k++) {
                const book3 = pickFrom(all_stories);
                content.push(new StorySource(`Book ${all_stories.indexOf(book1)}, ${all_stories.indexOf(book2)}, ${all_stories.indexOf(book3)}`, [book1, book2, book3]));
            }
        }
    }

    const all_books = renderBookCase(content, (item) => {
        //her domains are Change, Inspiration, Being Served and Libraries.
        display.innerHTML = `<h3>The Harvest Dreams of ${item.title}</h3><i style="font-size: 11px;
      letter-spacing: 3px;
      font-family: Courier New;
      font-weight: lighter;
      color: white;">Shifting, ebbing, flowing, always Changing but ever so indulgent, the Harvest dreams of the Inspiration you have Served her in an infinite, ever Changing Library. Will you be Inspired anew by the Changed dreams she happily consumes?</i><br><br>
      <div style="width:100%; margin-top:0px;" class="story">${item.text.replaceAll("\n", "<br>")}</div>`
    });

    //pickFrom(all_books).click();
}










/*
the Cult has been in the background up till now
quietly getting killed by the Eye Killer but otherwise not relevant
but now
NOW
their Relevance score is through the roof
so now i wanna figure out how each lavinraca blorbo would side
Twig obviously is on team "infinite candy who cares about consequences"
While Sam is obviously on team "know restraint".
I think the mafia as a whole ended up getting absorbed into the cult
not anything explicit, they don't take orders from camellia
but
sam is tied to the harvest, no matter how much they try to pretend none of it ever happened
i think the rank and file mafia members might be more serious about it, might go to camellias sermons
but sam just quietly tries to exert influence
i think Terri very much wants more mazes and monsters and wasting and candy, while Eustace thinks the god should just be allowed to sleep
TROGDAZORG is always the wild card, lacking hooks like he does.... but i think 'burninating' and 'destruction' and what not is pro candy
so to keep it balanced rava might quietly prefer a sleeping god (let sleeping gods lie) but isn't gonna voice that against camellias's wishes or anything?
i think the Boss/Hostage isn't fully comatose in these loops anymore
but has definitely been deposed by sam
figurehead 'mentor' for sam, but controlling nothing
twig is in the loops, sam is not
iirc hostage and himbo aren't in the loops either? so the whole mafia is out of the loop but trying to control things



which implies that the main cult IS in the loop
because the harvest is wasting them
bringing them into secret knowledge
oh god
i just realized
if they're in the loop
that means wanda is bringing them into each new universe, which means they're getting duplicated (i.e. theres already a version of them in the new universe)
the cult would be increasing in size each loop just from copied humans
the cult goes from tiny little niche thing to increasingly having more members than ohio was even supposed to have as population
definitely no consequences there
*/


/*
its weird cuz
zampanio is about the beatless story
the vibes and the snippets
the contextless moments
but lavinraca has Time
even if the harvest doesn't really understand it anymore
zampanio is endless and sanded smooth
lavinraca is all about the dramatic finish
*/