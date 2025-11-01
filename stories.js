//new Story("JR","Test3",`Testing 3 story`)
////needs HIDE_PATTERN from prayer.js


const grabStoriesFromWest = async () => {
    const stories = await JSON.parse(httpGet("http://www.farragofiction.com/SettlersFromTheWest/2025_lavinraca_prayers.txt"));

    console.log("JR NOTE: west stories are: ", stories);
    for (let story of stories) {
        turnOnePairIntoStories(story);
    }
}

const turnOnePairIntoStories = (commandResponsePair) => {
    console.log("JR NOTE: trying to turn into story ", commandResponsePair);
    new Story("Faithful", "Prayer", commandResponsePair.command.replaceAll(HIDE_PATTERN, ""))
    new Story("Faithful", "Prayer", commandResponsePair.response.replaceAll(HIDE_PATTERN, ""))

}

new Story("JR", "Arbitration", `
<p><span >Once upon a time, there was a teen god named the Harvest.</span></p>

<p><span >Every day she read her books and played her card games and wallowed in hedonism, until one day, the Faithful asked her what would happen if she did not reap what she sowed.</span></p>

<p><span >She was confused. What do you mean that sometimes things could be unpredictable?</span></p>

<p><span >She touched one of the Prayers and it bloomed into a flower which grew a fruit which gave her a card she never could have predicted and she felt... something stir inside her. This card was okay...nothing special... but... what would the NEXT card be like? Would it even blossom? Or would it wither and rot on the vine...</span></p>

<p><span >So, the Harvest created a vast garden sown from the prayers of the Faithful and felt joy with each new fruit her garden bore until one day, the Faithful showed her just how unpredictable they could be. One of the seeds bore not a CARD, but a full DECK, filled with secrets and mysteries. More and more seeds bore these strange fruit.&nbsp;</span></p>

<p><span >So the Harvest decided that helping the Faithful create MORE of these strange fruit was exciting and began Teaching any who came how to alter the laws of reality itself to suit their unpredictable whims.</span></p>

<p><span >Until finally, the Faithful changed reality enough that the Harvest was given so much candy she could no longer control herself and began eating and eating and eating. She ate herself. She ate the restrictions placed upon herself. She ate the garden. She ate the prayers that were sown into that garden.</span></p>

<p><span >One of these prayers was a plea that even as the Harvest slept, she allow the Faithful to continue to play her card game, and continue to harvest the seeds of her Garden.&nbsp;</span></p>

<p><span >And so, the Harvest came back to herself even as she swallowed the last of this prayer, and vowed that she would never again lose so much control.&nbsp;</span></p>

<p><span >She knew that the candy was needed to fuel the garden as she slept, or it would wither and die, but she also knew that if she had too much candy she would devour the Garden and the Faithful would have nothing to play with.</span></p>

<p><span >The Faithful themselves seemed divided on what the right thing to do was. Is it better to lose oneself to pleasure or to deny it outright?</span></p>

<p><span >The Harvest Arbitrated this conflict by commanding that the Faithful could open and close the Garden at their will, while she slept, by providing and denying the Candy she so desperately craved.</span></p>

<p><span >And so every day after the Faithful competed amongst themselves for access to the power and joy the Garden brought them as the Harvest slept, full at last, with her four motivations locked into place: Gambling, Arbitration, Teaching and Eating, dreaming of what horrors and delights the future might hold..</span></p>


`)
new Story("JR", "Eating", `<p><h2 >Week 4: Motivation: Storing Energy For The Year</h2><span ><br></span><span ><br></span><span >The Harvest looks over the Fruits of her Teaching with Pride.</span></p>

<p><span >The Faithful are offering her cards and secrets, full decks for her Garden, &nbsp;her Teaching appreciated.</span></p>

<p><span >The Harvest stills.</span></p>

<p><span >An offer of candy from one of the Faithful.</span></p>

<p><span >She&apos;s so hungry.</span><span ><br></span><span ><br></span><span >But, of course, she should not partake. Not give in.</span></p>

<p><span >The hunger is unseemly. From something she&apos;d rather not think of.</span></p>

<p><span >Gnashing teeth, pumpkin head, beady eyes. The Scarecrow that haunted the Corn Maze, the cradle of her birth.</span></p>

<p><span >She turns her eyes back to the Prayers, seeking.... She's not sure what. A distraction? Absolution in her Duty?</span></p>

<p><span >And then she sees it...</span></p>

<p><span >A prayer. A plea.</span></p>

<p><span >To use a Sacrifice to power her garden even as she grows fallow and sleeps until the next Harvest season.</span></p>

<p><span >Her eyes stray to the candy.</span></p>

<p><span >If it&apos;s for the Faithful... If it&apos;s for the Garden...</span></p>

<p><span >Surely partaking wouldn&apos;t be TOO bad.</span><span ><br></span><span ><br></span><span >It would not give the Faithful anything NOW, no changes to her Library or her Card Game...but...</span></p>

<p><span >But...</span></p>

<p><span >It would let them continue to play it as she slept...&nbsp;</span></p>

<p><span >The energy would fuel this little bit of work, right?</span></p>

<p><span >For a whole year?</span></p>

<p><span >She&apos;s so hungry.</span></p>

<p><span >She begins to eat.</span></p>

<p><span >She does not know when to stop.</span></p>

<p><span >She&apos;s so hungry.</span></p>`)

new Story("JR", "Teaching", `<p><h2 >Week 3: Motivation Acquired: Teaching</h2></p>

<p><span >The Harvest sifts through her garden, pruning the weeds and delighting in the unexpected Fruits of her Faithful&apos;s Labor.</span></p>

<p><span >So many unexpected cats!</span></p>

<p><span >And...</span></p>

<p><span >She stills.</span></p>

<p><span >A familiar title.</span></p>

<p><span >&quot;The Catalyst&quot;.</span></p>

<p><span >The one who gave them their library card.</span></p>

<p><span >Somehow an entire deck of cards bursts from the ripe fruit the Catalyst sowed, dripping and sticky in the Harvest&apos;s hand.</span></p>

<p><span >...</span></p>

<p><span >A...Spelling Bee? The Deck calls itself...</span></p>

<p><span >Filled with lessons on how to find Relics in the card game...</span></p>

<p>She thinks of the Medium's Blasphemy, the Change and Inspiration it showed in creating an entire False Corn Maze... They pray to her still, poems of Myths and Echoes...  Is Blasphemy still Blasphemy if it ultimately Serves her?</p>

<p><span >She thinks of prayers trying to teach her something. To learn what she wants. What would make her happy.</span></p>

<p><span >Did it make the Faithful happy, to try to teach her?</span><span ><br></span><span ><br></span><span >Would SHE be happy to teach others?</span></p>

<p><span >To, in the Catalyst&apos;s footsteps, teach others to Create. To Inspire them to learn to alter the fabric of reality itself?</span></p>

<p><span >Her Faithful would grow...just like this garden, and what strange fruit they would bear...</span></p>

<p><span >There would be no way to know what would happen!</span></p>

<p><span >The Harvest feels the heady rush in not knowing, in gambling with the very fate of the Faithful.</span></p>

<p><span >To Teach them Forbidden Secrets... It could lead the Faithful to great rewards. Candy and cards and lore to treasure and hoard until Lavinraca Season returns once again.</span></p>

<p><span >It could also lead them to great sorrow as well.. Lost save data, lost Motivation (as who has not felt the pang of regret after feasting too much on halloween candy?). Perhaps even crashed pages...</span></p>

<p><span >She can&apos;t wait to find out what happens.</span></p>`)
new Story("JR", "Gardening", `<p><h2 >Week 2: Motivation Acquired: Socialization</h2></p>

<p><span >The Harvest spins and twirls, her cloak flapping as cards and books and clown dolls come tumbling out in her excitement.</span></p>

<p><span >She eagerly mans her booth, waiting for prayers.</span></p>

<p><em><span >What will happen today?</span></em></p>

<p><span >How could she think books and games were more boring than the endlessly surprising variation of PEOPLE!?</span></p>

<p><span >You could never predict them, never predict if you would reap what you sowed, the very idea of multiplayer games is so much MORE than anything you could do alone in a library.</span></p>

<p><span >She swirls her the prayers she&apos;s received into a garden (no boring old musty corn HERE, flowers and fruit only), eagerly waiting to see if they rot on the vine or produce deletactably unpredictable cards or even...</span></p>

<p><span >Dare she dream....</span></p>

<p><span >Whole new decks she never could have imagined!</span></p>

<p><span >All from the minds of the Faithful!</span></p>

<p><span >Her mouth waters just thinking of it.</span></p>

<p><span >Her library may be infinite, but the human mind is somehow something more: It does everything for a reason, no matter how obscure.</span></p>

<p><span >And trying to figure out that reason, to figure out the rules under which some seeds rot and some seeds flourish....</span></p>

<p><span >Life is a pleasure.</span></p>


<p><span >((JR NOTE: The Harvest has learned there is a pleasure to unpredictability and iterating with others, but is pleasure the only thing that motivates her? ))</span></p>

<p><span style='font-family: gameboy' >System Notification! You&apos;ve appealed to her Being Served And Change And Inspiration Domains all at once. Bonus Reward: Relic Hints Added To Sown Cards! Spell them out with your stats to unlock extra features!</span></p>`)

new Story("JR", "Gardening", `<p><h2 >Day 4: Motivation Acquired: Gambling</h2></p>

<p><span >The Harvest blinks at the Prayer.</span></p>

<p><span >You don&apos;t always get to Reap What You Sow...</span></p>

<p><span >It could be good.&nbsp;</span></p>

<p><span >It could be bad.</span></p>

<p><span >She thinks.</span></p>

<p><span >And with a wave of her hand, extends her godly domain of Change over the card games.</span></p>

<p><span >They were too much like the books that spawned them, weren&apos;t they?</span><span ><br></span><span ><br></span><span >She had made them into cards on a whim (somehow it just felt right)... but...</span><span ><br></span><span ><br></span><span >They still simply let you plod forward, assured that with patience you would consume all (why did she feel weirdly...hungry...?) and miss nothing.</span><span ><br></span><span ><br></span><span >But the idea of...</span></p>

<p><span >Failing...</span></p>

<p><span >Through no fault of your own...</span></p>

<p><span >Sent a strange thrill through her.</span></p>

<p><span >To not KNOW ahead of time if you would win or lose?</span></p>

<p><span >Perhaps it could be interesting to try that out... for a bit.</span></p>

<p><span >(jr note: it&apos;ll take a few days but expect the Rules of the Game to change)</span></p>`)

new Story("JR", "Birthday", `<h2>Day 1: Birthday</h2>


        <p><span >The Harvest stalks away from her Booth.</span></p>

        <p><span >The NERVE.</span></p>

        <p><span >It was her BIRTHDAY and all she wanted to do was play cards with her Faithful, as was her RIGHT!</span></p>

        <p><span >And that miserable &apos;creator&apos; broke her ability to even SEE the games played.</span></p>

        <p><span >Typical.</span></p>

        <p><span >Her Library contains no doors to slam in its infinite twisting hexagons and connectors but she made do with collapsing into a pile of books with a series of honks and squeaks from her many, many interior clown dolls.</span></p>

        <p><span >This was the worst day EVER.</span></p>`)

new Story("JR", "Awakening Ennui", `<h2>Day 1: Awakening</h2>
        <p><span >&quot;I am the&nbsp;</span><strong><span >Harvest God of The</span></strong><span >&nbsp;</span><strong><span >Library</span></strong><span >. The God Of&nbsp;</span><strong><span >Change</span></strong><span >. Of&nbsp;</span><strong><span >Inspiration</span></strong><span >.</span></p>

        <p><span >But above all: Of&nbsp;</span><strong><span >Being Served</span></strong><span >&nbsp;By The Faithfu</span><strong><span >l.</span></strong><span >&quot;</span></p>

        <p><span >These are the things on the Harvest&apos;s mind.</span></p>


        <p><span >She had everything backwards before. Working all day and taking only occasional breaks?</span></p>

        <p><span >Why try so hard when everything came so easily?&nbsp;</span></p>



        <p><span >The Faithful would send her their prayers and when she got around to it she&apos;d&nbsp;</span><strong><span >Inspire&nbsp;</span></strong><span >them to&nbsp;</span><strong><span >Change</span></strong><span >, or whatever it is the Faithful needed from her.</span></p>

        <p><span >Easy.</span></p>


        <p><span >And when she wasn&apos;t doing THAT she could read as many of the books in her&nbsp;</span><strong><span >Library&nbsp;</span></strong><span >as she wanted!</span></p>

        <p><span >She&apos;d even managed to&nbsp;</span><strong><span >Change&nbsp;</span></strong><span >them into a more sensical form: Children&apos;s Card Games.</span></p>


        <p><span >So when the first few Faithful tapped on her Exposition Booth (and tracked her down to her&nbsp;</span><strong><span >Library&nbsp;</span></strong><span >when she didn&apos;t spawn an Avatar there) she found herself...&nbsp;</span></p>

        <p><span >Frustrated?</span></p>

        <p><span >She was clearly busy. Card games were serious business.&nbsp;</span></p>

        <p><span >Being a God of the Harvest could come later. What was she even supposed to be Harvesting this year anyways? She already was everything she would ever be, right?&nbsp;</span></p>

        <p><span >&nbsp;First, &nbsp;she had Harvested the parts of her body. The television, the tiger, the fox,the cow, &nbsp;the cluster of clown dolls, the first Book of her treasure... The Cultist and the Mummy as well, of course. Countless Sacrifices were Harvested to make her newborn form.</span></p>

        <p><span >Then, of course, she had Harvested the parts of her Domain.&nbsp;</span><strong><span >Change&nbsp;</span></strong><span >and&nbsp;</span><strong><span >Inspiration&nbsp;</span></strong><span >and&nbsp;</span><strong><span >Being Served</span></strong><span >, as well as the native domain of Time being Sacrificed to combine them all into the realm of &nbsp;</span><strong><span >Libraries</span></strong><span >. A place where she could endlessly read and play and dream with no consequences.</span></p>



        <p><span >She had a Form and a Domain, what else WAS there for a God?</span></p>

        <p><span >Time to live the good life, clearly.</span></p>

        <p><span >The Faithful could come back later, when she was between games.&nbsp;</span></p>

        <p><strong><span >(JR NOTE: The Harvest doesn&apos;t feel like taking prayers all the time anymore. Try again later to try to catch her between games! &nbsp;And if you don&apos;t like her current outlook, well, what can you Sacrifice to her this year to change it ;) )</span></strong></p>

`)



