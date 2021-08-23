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

function getPlayerTurn() {
  let playerTurn = prompt("Your turn: ");
  return playerTurn;
}

function findWinner(playerScore, computerScore) {
  if (playerScore > computerScore) return "You win the battle!";
  else if (playerScore < computerScore) return "Computer wins the battle!";
  return "Draw!";
}

function announceWinner(finalResult) {
  console.log(finalResult);
}

function game(roundsNumber = 5) {
  let computerSelection = "";
  let playerSelection = "";
  let roundResult = "";
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 1; i <= roundsNumber; i++) {
    computerSelection = computerPlay();
    playerSelection = getPlayerTurn();

    roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult.includes("won")) playerScore++;
    else computerScore++;
  }

  let finalResult = findWinner(playerScore, computerScore);
  announceWinner(finalResult);
}

// game();
