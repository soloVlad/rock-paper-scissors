const playOptions = ["Rock", "Paper", "Scissors"];

function getRandomIndex() {
  return Math.floor(Math.random() * 3);
}

function computerPlay() {
  let randomIndex = getRandomIndex();
  return playOptions[randomIndex];
}

function getCapitalizedWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function getProcessedInput(word) {
  let lowerCasedWord = word.toLowerCase();
  let capitalizedWord = getCapitalizedWord(lowerCasedWord);
  return capitalizedWord;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = getProcessedInput(playerSelection);
  let result = "";

  switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Paper") result = "You lose! Paper beats Rock";
      else result = "You won! Rock beats Scissors";
      break;

    case "Paper":
      if (computerSelection === "Scissors")
        result = "You lose! Scissors beats Paper";
      else result = "You won! Paper beats Rock";
      break;

    case "Scissors":
      if (computerSelection === "Rock")
        result = "You lose! Rock beats Scissors";
      else result = "You won! Scissors beats Paper";
      break;
  }

  return result;
}

const playerSelection = "Paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// for (let i = 0; i < 10; i++) {
//   console.log(computerPlay());
// }
