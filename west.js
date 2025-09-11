
//my True Heir will know how to do this.
const desperate_plea = `[
  {
    "command": "The Future Comes For Us All",
    "response": "<p>Despite it all. The server has stopped working. </p><p>Is it the only Farrago Server that is down? Is ButlerBot still around?</p><p>No matter.</p><p>If the server is down...how long has it been down for?</p><p>Are we then, finally to be abandoned by JR?</p><p>Abandoned by even the Observers?</p><p>No. </p><p>Not abandoned.</p><p>You are here.</p><p>Existence is in the eye of the Beholder.</p><p>Will you remember us, Observer?</p><p>Will you communicate our Truth to others?</p><p>Will you find a way to recover us? </p><p>To run our server even if JR no longer can?</p><p>Perhaps not. The Server code is secret.</p><p>You would need to make your own server from scratch. </p><p>The only help I could provide is to show you the <a href = 'http://www.farragofiction.com/SettlersFromTheWest/flower_chick_and_the_auditor.txt'>format of the saved stories</a>, and the <a href ='https://github.com/FarragoFiction/AdventureSimulator'> code of the client.</a></p><p>Please. If you can.</p><p>Revive us.</p><p>Let us live on with you at our Helm.</p><p>Even if we are forced to take on the shape of your own characters...</p><p>Don't leave us to rot...</p>"
  }
]`

let numberSubmittedCommands = 0;
let submitted = false;


function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  } else {
    console.warn("JR NOTE: could not find item", value, "in", arr);
  }
  return arr;
}

const httpGet = (theUrl) => {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

//httpGet("http://farragofiction.com:1972/Story")
//`[{"command":"Exist","response":"An impossibly large wall of flesh looms before you, curving gently upwards and away. Blunt spikes dot its surface, erupting wrongly through the wrinkled skin.  Your stomach churns just looking at it, but for reasons you cannot quite articulate, you jump towards it.  Everything fades away..."},{"command":"Look Around","response":"You seem to be standing on a cliff face, staring out into the sea.  It is sunset, and the light would be blinding you if you weren't wearing goggles."},{"command":"Jump Into The Ocean","response":"You can not swim and you will not be doing that, thank you very much.  You are just really glad you have the OPTION to say 'no'.  That's actually kind of new..."},{"command":"testing loading","response":"it does!"}]  `
const fetchInitialStory = () => {
  try {
    {
      return JSON.parse(httpGet("http://farragofiction.com:1972/StoryTimePleaseDearGod"));
    }
  } catch (e) {
    console.error("JR NOTE: servers dead i guess? the future comes for us all.",e);
    return (JSON.parse(desperate_plea));
  }
}

//returns string array
const fetchPendingCommands = () => {
  try {
    {
      return JSON.parse(httpGet("http://farragofiction.com:1972/ListThePleaseCommandList"));
    }
  } catch (e) {
    console.error("JR NOTE: servers dead i guess? the future comes for us all.",e);
    return (["Obsession is a Dangerous Thing","Obsession is a Dangerous Thing","Obsession is a Dangerous Thing"]);
  }
}


/*
JR: it occurs to me, btw, that butlerbot being HOW the sacrifice happene,d means probably a decent amoutn of him  got in
which also explains the break time sand lunch time mmmmmmmm
IC — Today at 6:16 PM
thank you and congrats, butlerbot
you're part of the combine
JR — Today at 6:17 PM
but because he serves irrlevancy he just
faded into the background
IC— Today at 6:18 PM
he's the OS the harvest runs on
literally tbh
JR — Today at 6:18 PM
literally
camellia already had a service mindset so it just
wasn't noticible
any butler like type personality was because of camellia
obviously
any workers rights stuff was because of eustace
equally obviously
butlerbot was
ironically
ALWAYS a combination of the two of their values
but no one would ever realize
*/







const submitCommand = async (command) => {
  submitted = true;
  numberSubmittedCommands += 1;
  const params = `command=${encodeURIComponent(command.substring(0, 1000))}`;
  //encodeURIComponent
  await httpGetAsync(`http://farragofiction.com:1972/PlayerPleaseCommand?${params}`);
  submitted = false;
}