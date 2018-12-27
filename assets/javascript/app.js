// Global Variables accessible by all functions...
//================================================
// Create an array of words to choose from...
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

// Solutions to be held in an empty string...
let chosenWord = "";

// This will break the solution into individual letters to be stored in an array
let lettersInChosenWord = [];

// This will be the number of we show based on he solution
let numBlanks = 0;

// Holds the number of blanks and solved letters
let blanksAndSuccesses = [];

// Holds all of the wrong guesses
let wrongGuesses = [];

// Game Counters
let winCounter = 0;
let lossCounter = 0;
let numGuesses = 9;

// Functions
//======================================================
function startGame() {
  // Reset the guesses back to original state
  numGuesses = 9;

  // Solutuon is chosen randomly from wordBank
  chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  // use the split method to get the individual letters
  lettersInChosenWord = chosenWord.split("");

  // We count the number of letters in the word...
  numBlanks = lettersInChosenWord.length;

  // We print the solution ot the console for testing
  console.log(chosenWord);

  // reset the guesses
  blanksAndSuccesses = [];
  // reset the wrong guesses
  wrongGuesses = [];

  // create the exact amount of '_' needed per word
  for (let i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }
  console.log(blanksAndSuccesses);

  // reprints guesses left to 9
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // prints the blanks at the begnning of each round
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(
    " "
  );

  // clears wrong guesses from previous round
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

// Checkletters() function
// comparison of letters
function checkLetters(letters) {
  let letterInWord = false;
  for (let i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letters) {
      letterInWord = true;
    }
  }
  if (letterInWord) {
    for (let j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letters) {
        blanksAndSuccesses[j] = letters;
      }
    }
    console.log(blanksAndSuccesses);
  } else {
    wrongGuesses.push(letters);
    numGuesses--;
  }
}
// roundComplete() function
function roundComplete() {
  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
  console.log(
    `Win count: ${winCounter} | Loss Count: ${lossCounter} | Num guesses: ${numGuesses}`
  );

  // update the html
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // print array of guesses and blanks onto the page
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(
    " "
  );
  // print wrong guesses to screen
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    winCounter++;
    document.getElementById("win-counter").innerHTML = winCounter;
    startGame();
  } else if (numGuesses === 0) {
    lossCounter++;
    alert("You Lost!");

    document.getElementById("loss-counter").innerHTML = lossCounter;
    startGame();
  }
}
startGame();

document.onkeyup = function(e) {
  let letterGuessed = String.fromCharCode(e.which).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
};
