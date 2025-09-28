
/*
  relics represent secrets found while playing the card game
  they change minor or major parts about how the card game works
  a relic will handle creating its own "Relic" object and shoving it in local storage
*/

//visual reminder of what relics you are running
//no way to remove them (can't unhack a game easiliy)
//instead each time you load the page fresh you'll have no relics applied
//addRelicToBar("DEAD",image.src );
const addRelicToBar = (alt, image_src) => {
  const bar = document.querySelector("#relic-bar");
  const image = createElementWithClassAndParent("img", bar);
  image.src = image_src;
  image.title = alt;
  image.alt = alt;
}


/*
Why YES a clever Waste COULD get all these hints for free.

I wonder if an equally clever Waste could just...
Make that not be all the hints there are :) :) ;)
*/
const relicRiddlesRaw = `Lost in Lavinraca Heights, the premier Hotel on the grounds? Why not ask a helpful B _ _ _ _ _ to show you the way?
A horrible F_ _ _ ravaged the corn maze one year.
When is a door not a door?
The Harvest has become very obsesed with _ _ _ _ (S).
What is the reason for the season? C _ _ _ Y!
The Harvest is often surrounded by C _ _ (S)!
The Harvest surrounds herself with more than one BOOK-_ _ _ _ _.
Peewee bifurcated into two, one M _ _ and one D _ _.
OwO what's this? It's Zawhei's Lusus.
Chickens and Penguins and Rooster Chickens are all types of _ _ _ _ (S).
`;
const relicRiddles = relicRiddlesRaw.trim().split("\n");