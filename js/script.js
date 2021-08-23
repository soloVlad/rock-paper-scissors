const playOptions = ["Rock", "Paper", "Scissors"];
const amountOfRounds = 5;
const roundResultContainer = document.querySelector(".round-result-container");
const userScoreContainer = document.querySelector("#user-score");
const computerScoreContainer = document.querySelector("#computer-score");

let userScore = 0;
let computerScore = 0;

function getRandomIndex() {
  return Math.floor(Math.random() * 3);
}

function computerPlay() {
  let randomIndex = getRandomIndex();
  let ans = playOptions[randomIndex];
  console.log(ans);
  return ans;
  // return playOptions[randomIndex];
}

function getCapitalizedWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function getProcessedInput(word) {
  let lowerCasedWord = word.toLowerCase();
  let capitalizedWord = getCapitalizedWord(lowerCasedWord);
  return capitalizedWord;
}

function printRoundResult(result) {
  roundResultContainer.textContent = result;
  updateDisplayedScore();
}

function updateDisplayedScore() {
  userScoreContainer.textContent = userScore;
  computerScoreContainer.textContent = computerScore;
}

function playRound(userSelection, computerSelection) {
  userSelection = getProcessedInput(userSelection);
  let resultMessage = "";

  switch (userSelection) {
    case "Rock":
      if (computerSelection === "Paper") {
        resultMessage = "You lose! Paper beats Rock";
        computerScore++;
      } else if (computerSelection == "Scissors") {
        resultMessage = "You won! Rock beats Scissors";
        userScore++;
      } else {
        resultMessage = "Draw! Computer chose Rock too";
      }
      break;

    case "Paper":
      if (computerSelection === "Scissors") {
        resultMessage = "You lose! Scissors beats Paper";
        computerScore++;
      } else if (computerSelection === "Rock") {
        resultMessage = "You won! Paper beats Rock";
        userScore++;
      } else {
        resultMessage = "Draw! Computer chose Rock too";
      }
      break;

    case "Scissors":
      if (computerSelection === "Rock") {
        resultMessage = "You lose! Rock beats Scissors";
        computerScore++;
      } else if (computerSelection === "Paper") {
        resultMessage = "You won! Scissors beats Paper";
        userScore++;
      } else {
        resultMessage = "Draw! Computer chose Paper too";
      }
      break;
  }

  printRoundResult(resultMessage);

  if (userScore === 5) announceWinner("user");
  if (computerScore === 5) announceWinner("computer");
}

function announceWinner(winner) {
  console.log(`Congratulations ${winner}`);
}

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    let userSelection = e.target.id;
    let computerSelection = computerPlay();
    playRound(userSelection, computerSelection);
  })
);
