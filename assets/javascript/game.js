var word;
var allowedGuesses;
var correctGuesses;
var wrongGuesses;
var words= ["backhand", "overhead", "winner", "forehand", "wimbledon"];
var randomWord = words[Math.floor(Math.random() * words.length)];
var gameScore = 0;
var losses = 0;

var wordElement = document.getElementById('word');
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('guessed');



function initializeGame() {
     var randomWord = words[Math.floor(Math.random() * words.length)];
  word = randomWord;
  allowedGuesses = 13;
  wrongGuesses = [];
  correctGuesses = [];


  // creating underscores
  for (var i = 0; i < word.length; i++) {
    correctGuesses.push('_');
  }

  wordElement.innerHTML = correctGuesses.join(' ');
  letterCountElement.innerHTML = allowedGuesses;
}

function updateGuesses(letter) {
  allowedGuesses--; 
  letterCountElement.innerHTML = allowedGuesses;

  if (word.indexOf(letter) === -1) {
    wrongGuesses.push(letter); 
    lettersGuessedElement.innerHTML = wrongGuesses.join(' '); 
  }
  
  else {
    
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        correctGuesses[i] = letter;
      }
    }

    wordElement.innerHTML = correctGuesses.join(' ');
  }
}



function checkWin() {
  if (correctGuesses.indexOf('_') === -1) {
    gameScore = gameScore + 1;
    document.getElementById("wins").innerHTML = "Wins: " + gameScore;
    initializeGame();
} else if (allowedGuesses === 0) {
    losses = losses +1;
    document.getElementById("loss").innerHTML = "Losses: " + losses;
    initializeGame();
  }
}

initializeGame();

document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  updateGuesses(letterGuessed);
  checkWin();
  if (event.keyCode < 65 && event.keyCode < 90) {
    alert ("Please press a letter character!");
  }
};



initializeGame();
    

    
    