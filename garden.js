const flower_url = "http://www.farragofiction.com/DollSource/images/Flower/Body/";
const fruit_url = "http://www.farragofiction.com/DollSource/images/Fruit/Body/";
let random_flowers;
let random_fruit;

const garden = async () => {
    const contentEle = createElementWithClassAndParent("div", container);
    contentEle.style.padding = "31px"
    await initFlowerImages();
    //debugImages(contentEle);
    const story_so_far = await fetchInitialStoryRaw();
    const hidden_prayers = parseAllHiddenPrayers(story_so_far);
    for (let hidden_prayer of hidden_prayers) {
        drawAHiddenPrayer(contentEle, hidden_prayer);
    }



    const popupEle = popup("Reap What You And Others Have Sown With Prayers", contentEle)

}

/*
      http://farragofiction.com:1972/StoryTimePleaseDearGod

      each [HIDE] tag with a time code should matter.
    */
const convertPrayersToSeeds = () => {

}

//render them all
const debugImages = (container) => {
    for (let flower of random_flowers) {
        const image = createElementWithClassAndParent("img", container);
        image.src = flower;
    }

    for (let fruit of random_fruit) {
        const image = createElementWithClassAndParent("img", container);
        image.src = fruit;
    }
}

const initFlowerImages = async () => {
    let tmp = await getImages(flower_url);
    random_flowers = tmp.map((item) => flower_url + item);

    tmp = await getImages(fruit_url);
    random_fruit = tmp.map((item) => fruit_url + item);

}

//hidden prayers will be in [HIDE][/HIDE] blocks
const parseAllHiddenPrayers = (story_so_far) => {
    const pattern = /\[HIDE\][\s\S]*?\[\/HIDE\]/g;
    const ret = story_so_far.match(pattern);
    console.log("JR NOTE: ret is", ret)
    return ret;
}

/*
    will be a single [HIDE][/HIDE] tag
    will either have a lastSaveTimeCode or will not.
    if there is no lastSaveTimeCode it will rot on the vine
    if there is one, after one day it will be a flower
    after three days it will be a fruit
    size is based on if its a deck or if it something random
    if its a deck it will be large and give you teh deck when it fruits (clicking it will add to library till you refresh)
    if its not a deck, clicking it will give you a card you can add to any deck, it will be ??? based (mystery gambling) but its numbers and names will be seeded from the contents of the hidden prayer
    the deck/game will know what to do with ??? cards () (hopefully each deck has Hidden Lore to add to it)
*/
const drawAHiddenPrayer = (container, hidden_prayer) => {
    console.log("JR NOTE: todo draw", hidden_prayer)
}