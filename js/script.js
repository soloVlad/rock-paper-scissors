const playOptions = ["Rock", "Paper", "Scissors"];
const amountOfRounds = 5;
const roundResultContainer = document.querySelector(".round-result-container");
const userScoreContainer = document.querySelector("#user-score");
const computerScoreContainer = document.querySelector("#computer-score");
const modalText = document.querySelector(".modal-text");
const modal = document.querySelector("#myModal");
const buttons = Array.from(document.querySelectorAll("button"));
const closeModal = document.querySelector(".close");

let userScore = 0;
let computerScore = 0;

function getRandomIndex() {
  return Math.floor(Math.random() * 3);
}

function computerPlay() {
  let randomIndex = getRandomIndex();
  return playOptions[randomIndex];
}

function getCapitalizedWord(word) {
  let lowerCasedWord = word.toLowerCase();
  return lowerCasedWord[0].toUpperCase() + lowerCasedWord.slice(1);
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
  userSelection = getCapitalizedWord(userSelection);
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
        resultMessage = "Draw! Computer chose Paper too";
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
        resultMessage = "Draw! Computer chose Scissors too";
      }
      break;
  }

  printRoundResult(resultMessage);

  if (userScore === amountOfRounds) announceWinner("user");
  if (computerScore === amountOfRounds) announceWinner("computer");
}

function announceWinner(winner) {
  modal.style.display = "block";
  modalText.innerHTML = `Congratulations ${winner}!<br>Score -> ${userScore}:${computerScore}`;
  clearScore();
}

function clearScore() {
  userScore = 0;
  computerScore = 0;
  updateDisplayedScore();
}

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    let userSelection = e.target.id;
    let computerSelection = computerPlay();
    playRound(userSelection, computerSelection);
  })
);

closeModal.addEventListener("click", () => (modal.style.display = "none"));
