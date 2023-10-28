// Function will return the frequency of the words
function calcWordFrequencies() {
  let sentence = prompt().split(" ");
  //console.log(sentence);
  let occurence = new Map();

  sentence.forEach((word) => {
    if (occurence.has(word)) {
      occurence.set(word, occurence.get(word) + 1);
    } else {
      occurence.set(word, 1);
    }
  });

  occurence.forEach((key, value) => {
    console.log(key + " " + value);
  });
}
calcWordFrequencies();
