//from infotokenreader loop mode 
//http://knucklessux.com/InfoTokenReader/?mode=loop

//call this
const fuckWithArrayOfParagraphs = (sources)=>{
  return(turnSplitSourcesToOutput(splitSourcesIntoWords(sources)))
}


const splitSourcesIntoWords = (sources) => {
  let splitSources = [];
  for (let i = 0; i < sources.length; i++) {
    splitSources.push(sources[i].split(" "));
  }
  return splitSources;
}

//yes weird recursion. each turn take 5-25 words for the current source, then keep adding words till you find the next source
//then call yourself again. if you have no words left in any sources, quit.
const turnSplitSourcesToOutput = (splitSources, current_source_index = 0, tmp_output = "") => {
  //if you are empty, just remove yourself entirely.
  if (splitSources.length === 0 || splitSources.length <= current_source_index) {
    return tmp_output;
  }
  //pick how many words to grab. 
  const chunkSize = getRandomNumberBetween(10, 20);
  let new_index = 0;
  let found_new_source = false;

  let new_tmp_output = tmp_output + " " + splitSources[current_source_index].splice(0, chunkSize).join(" ");
  let padding_word_count = 0;
  if (splitSources[current_source_index].length > 0) {
    //theres more words, so go through them all till you find one that is in common with other things.
    for (let split_index = 0; split_index < splitSources[current_source_index].length; split_index++) {
      let word = splitSources[current_source_index][split_index];
      padding_word_count++;
      for (let i = 0; i < splitSources.length; i++) {
        if (i != current_source_index) { //skip the one we're already in
          const found_index = splitSources[i].indexOf(word);
          if (found_index != -1) {
            new_index = i;
            found_new_source = true;
            break;
          }
        }
      }
      if (found_new_source || (padding_word_count > 40)) {
        break;
      }
    }
  } else {
    //console.log("JR NOTE: current source is empty, ", current_source_index, splitSources);
  }
  const new_chunk = splitSources[current_source_index].splice(0, padding_word_count).join(" ");
  //console.log("JR NOTE: DEBUG SPLIT:  new chunk is", new_chunk, "padding was ", padding_word_count);

  new_tmp_output = new_tmp_output + " " + new_chunk;



  //before you call it again do this.
  let viable_sources = splitSources.filter((source) => source.length != 0);
  if (!found_new_source) {
    new_index = getRandomNumberBetween(0, viable_sources.length - 1);
  }

  return turnSplitSourcesToOutput(viable_sources, new_index, new_tmp_output);
}
