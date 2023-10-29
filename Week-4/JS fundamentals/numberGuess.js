let playGuessingGame = () => {
  let totalGuesses = 10;
  let numToGuess = Math.round(Math.random() * 100);
  let tries = 0;

  while (totalGuesses >= 0) {
    let currentGuess = prompt("Enter a number between 1 and 100");

    // if the user clicks cancel button or exceeds the total guesses function will return 0;
    if (currentGuess === null || totalGuesses === 0) return 0;

    // if the user clicks ok with an empty input or a NaN input then ask to re-enter until a valid number is entered.
    while (currentGuess.length === 0 || isNaN(currentGuess)) {
      currentGuess = prompt("Please enter a number.");
    }

    // increment the try count.
    tries++;
    if (currentGuess == numToGuess) {
      return tries;
    } else if (currentGuess < numToGuess) {
      totalGuesses--;
      currentGuess = NaN;
      alert("X is too small. Guess a larger number");
    } else if (currentGuess > numToGuess) {
      totalGuesses--;
      currentGuess = NaN;
      alert("X is too large. Guess a smaller number");
    }
  }
};
console.log(playGuessingGame());
