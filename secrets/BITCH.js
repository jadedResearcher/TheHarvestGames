
const doBitch = () => {
    alert("...Really. Swears? Perhaps the time in the Corn Maze will cool your head.")
    if (!globalDataObject.swearJar) {
        globalDataObject.swearJar = 0;
    }
    globalDataObject.swearJar++;
    save();
    truthLog("Swears", "In Truth, the Harvest does not mind swears terribly. People swearing at her are usually angry customers, but she is also an entire god, and thus above being harmed by 'mere' words.")
    window.open("http://lavinraca.eyedolgames.com/Week2/Corn/", "_blank");

}

doBitch();
