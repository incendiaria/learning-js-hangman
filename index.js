console.log("H A N G M A N\n");
let score = {wins: 0, loses:0};
const menuSelection = require('sync-input');
let menuOptions = ['play', 'results', 'exit']
let selectMenu = menuSelection('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:');

while (selectMenu != 'exit') {
  
  while (!menuOptions.includes(selectMenu)) {
    selectMenu = menuSelection('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:');
  }

switch (selectMenu){
  case 'play' : 
    const input = require('sync-input');
    let wordList = ["python", "java", "swift", "javascript"];

    function chooseWord (wordList) {
      let index = Math.floor(Math.random() * wordList.length);
      return wordList[index];
    }

    let chosenWord = chooseWord (wordList);
    let hint = chosenWord.split('').fill('-');
    let attempt = 8;
    let guessed = [];

    while (attempt > 0 && hint.join('') != chosenWord) {      
      console.log(hint.join(''));  
      let letter = input("Input a letter:");
  
    if(checkInputErrors(letter) == true) {
      if (chosenWord.includes(letter)) { 
        for (y in chosenWord){     
          if (chosenWord[y] == letter) {
            hint[y] = letter;
          }
        }
      } else {
        console.log("That letter doesn't appear in the word.");
        attempt--;
      }
    }
    winOrLose();
    }
    
  function checkInputErrors(letter){
  if (letter.length > 1 || letter == '') {
  console.log('Please, input a single letter');
  } else if (!isNaN(letter) || letter === letter.toUpperCase()) {
    console.log('Please, enter a lowercase letter from the English alphabet.');
    } else if (guessed.includes(letter)) {
      console.log ("You've already guessed this letter") ;
      } else {
        guessed.push(letter);
        return true;
      }
}

function winOrLose() {
  if (hint.join('') == chosenWord) {
  console.log(`You guessed the word ${chosenWord}!`);
  console.log("You survived!");
  score.wins++;
  return true
  }else if(attempt == 0){
    console.log('You lost!');
    score.loses++
  }
} 
  selectMenu = '';
  break;
  case 'results' :
      console.log(`You won: ${score.wins} times`);
      console.log(`You lost: ${score.loses} times`);
      selectMenu = '';
      break;
  case 'exit' :
      break;      
}
}
