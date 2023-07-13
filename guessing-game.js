function guessingGame() {
    let secretNumber = Math.floor(Math.random() * 100);
    let numGuesses = 0;
    let gameEnded = false;
  
    return function(guess) {
      if (gameEnded) {
        return "The game is over, you already won!";
      }
  
      numGuesses++;
  
      if (guess === secretNumber) {
        gameEnded = true;
        return `You win! You found ${guess} in ${numGuesses} guess${numGuesses === 1 ? '' : 'es'}.`;
      } else if (guess < secretNumber) {
        return `${guess} is too low!`;
      } else {
        return `${guess} is too high!`;
      }
    };
  }
  
  // Test the guessing game
  let game = guessingGame();
  console.log(game(50)); // "50 is too low!"
  console.log(game(90)); // "90 is too high!"
  console.log(game(70)); // "You win! You found 70 in 3 guesses."
  console.log(game(70)); // "The game is over, you already won!"
  
module.exports = { guessingGame };
