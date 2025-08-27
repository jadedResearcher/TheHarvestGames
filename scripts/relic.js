
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

