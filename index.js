const input = require('sync-input');
let wordList = ["python", "java", "swift", "javascript"];

console.log ("H A N G M A N");

let word = input("Guess the word:");

function chooseWord (wordList) {
  let index = Math.floor(Math.random() * wordList.length);
  return wordList[index];
}

if (word == chooseWord(wordList)){
  console.log ("You survived!");
} else {
  console.log ("You lost!");
}