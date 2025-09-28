
const doShelf = () => {
    /*
    existing riddles: 
    const relicRiddlesRaw = `Lost in Lavinraca Heights, the premier Hotel on the grounds? Why not ask a helpful B _ _ _ _ _ to show you the way?
A horrible F_ _ _ ravaged the corn maze one year.
When is a door not a door?
The Harvest has become very obsesed with _ _ _ _ (S).
What is the reason for the season? C _ _ _ Y!
The Harvest is often surrounded by C _ _ (S)!
Peewee bifurcated into two, one M _ _ and one D _ _.
OwO what's this? It's Zawhei's Lusus.
Chickens and Penguins and Rooster Chickens are all types of _ _ _ _ (S).
`;
    */
    relicRiddles.push("Having a K _ _ might help you get past a barrier.")
    relicRiddles.push("A C _ _ _ _ is always good for a laugh.")
    relicRiddles.push("H _ _ _ and foot is one way to wait on people.")
    relicRiddles.push("You can take a M _ _ _ from a scarecrow in the cornmaze and wear it for  yourself.")
    relicRiddles.push("Are you afraid of a G _ _ _ _?")
    relicRiddles.push("Smiles and candy and clowns and acrobats await you at the C _ _ _ _ _.")
    relicRiddles.push("If you like it, put a R _ _ _ on it.")
    relicRiddles.push("A L _ _ _ is just begging to be picked.")
    relicRiddles.push("You can get a R _ _ _ at the Lavinraca Heights Hotel.")
    relicRiddles.push("A R _ _ _ _ _ summoned the Harvest in the Corn Maze.")
    relicRiddles.push("Twig was desperately searching for the O _ _ _ _ _ _  in the Corn Maze.")
    candyEarnedPerVictory = 1; //other relics might ADD or MULTIPLY but this simply starts it up. you reap what you sow
    const parent = document.querySelector("body");
    const contentEle = createElementWithClassAndParent("div", parent, 'card-popup');
    const image = createElementWithClassAndParent("img", contentEle, 'big-relic-image');
    image.src = "http://lavinraca.eyedolgames.com/Week1/Corn/images/Maze/Bookcase_Secret_Door_Closed_Transparent.png";
    const explanation = createElementWithClassAndParent("div", contentEle, 'sub-section relic-explaination');
    explanation.innerHTML = `You got the SHELF relic!
    <br><br>
    In this corn maze, this hides a secret passage.
    <br><br>
    It only makes sense this unlocks more RELIC RIDDLES in the CANDY STORE, doens't it?
    <br><Br>

    `;

    popup("Your stats spelled 'S-H-E-L-F'!", contentEle)

    addRelicToBar("SHELF", image.src);

}

doShelf();
