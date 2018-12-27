// Create array of words for the computer to select from...
const wordBank = [
  "ether",
  "friends",
  "financial",
  "southpark",
  "membership",
  "fitness",
  "environment",
  "political",
  "flight",
  "cucumber",
  "tomatoes",
  "aeroplane"
];

// Global variables
const win = document.getElementById("#wins");
const loss = document.getElementById("#losses");
const lettersGuess = [];
let numGuess = document.getElementById("#numGuess");
const currentWord = document.getElementById("#gamePlay");
//-------------------------------------------------

// Capture the users guesses
document.onkeyup = function(event) {
  let currentGuess = event.key.toLowerCase();
  console.log(currentGuess);
  lettersGuess.push(currentGuess);
  console.log("this letter was guessed..." + lettersGuess);
};
// check to see if the answer is correct

// push to wrongGuess array if wrong answer

// Increment the loss by one

// push to correctGuess array if correct
