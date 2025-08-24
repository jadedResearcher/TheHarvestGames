
/*
  relics represent secrets found while playing the card game
  they change minor or major parts about how the card game works
  a relic will handle creating its own "Relic" object and shoving it in local storage
*/
class Relic {
  title = "";
  image = "404.png"
  constructor(title, image) {
    this.title = title;
    this.image = image;
  }

}