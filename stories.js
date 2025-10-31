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

new Story("JR", "The Harvest Dreams", `
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
//new Story("JR", "Test3", `Testing 2 story`)

//new Story("JR", "Test3", `Testing 3 story`)


