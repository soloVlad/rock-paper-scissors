const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];
const ROUND_RESULTS = ["win", "draw", "lose"];  // for player
const GAME_ROUNDS = 5;

function getComputerChoice() {
    let randomIndex = getRandomInt(POSSIBLE_CHOICES.length);
    return POSSIBLE_CHOICES[randomIndex];
}

// return random integer in [0; max)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRoundResultMessage(playerChoice, computerChoice, roundResult, score) {
    let playerChoiceCapitalized = capitalizeFirstLetter(playerChoice);
    let computerChoiceCapitalized = capitalizeFirstLetter(computerChoice);
    let roundResultMessage = `${score.playerScore}:${score.computerScore}; `;

    switch(roundResult) {
        case ROUND_RESULTS[0]:
            roundResultMessage += `You won! ${playerChoiceCapitalized} beats ${computerChoiceCapitalized}`;
            break;
        case ROUND_RESULTS[1]:
            roundResultMessage += `Draw! Computer chose ${playerChoiceCapitalized} too`;
            break;
        case ROUND_RESULTS[2]:
            roundResultMessage += `You lose! ${computerChoiceCapitalized} beats ${playerChoiceCapitalized}`;
            break;    

    }

    return roundResultMessage; 
}

function getPlayerChoice() {
    return prompt("Enter your choice (rock, paper or scissors):").toLowerCase();
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return ROUND_RESULTS[1];

    switch(playerChoice) {
        case POSSIBLE_CHOICES[0]:
            if (computerChoice === POSSIBLE_CHOICES[1]) return ROUND_RESULTS[2];
            else return ROUND_RESULTS[0];
        case POSSIBLE_CHOICES[1]:
            if (computerChoice === POSSIBLE_CHOICES[2]) return ROUND_RESULTS[2];
            else return ROUND_RESULTS[0]; 
        case POSSIBLE_CHOICES[2]:
            if (computerChoice === POSSIBLE_CHOICES[0]) return ROUND_RESULTS[2];
            else return ROUND_RESULTS[0]; 
    }
}

function updateScore(score, roundResult) {
    if (roundResult === ROUND_RESULTS[0]) score.playerScore++;
    else if (roundResult === ROUND_RESULTS[2]) score.computerScore++;
}

function getGameResult(score) {
    let gameResultMessage = `${score.playerScore}:${score.computerScore}; `;

    if (score.playerScore > score.computerScore) {
        gameResultMessage += "You won!";
    } else if (score.playerScore < score.computerScore) {
        gameResultMessage += "You lose(";
    } else {
        gameResultMessage += "Draw.";
    }

    return gameResultMessage;
}

function game() {
    let score = {
        playerScore: 0,
        computerScore: 0
    };

    for (let i = 0; i < GAME_ROUNDS; i++) {
        let playerChoice = getPlayerChoice();
        console.log(playerChoice);
        let computerChoice = getComputerChoice();

        let roundResult = playRound(playerChoice, computerChoice);
        updateScore(score, roundResult);
        let roundResultMessage = getRoundResultMessage(playerChoice, computerChoice, roundResult, score);
        console.log(roundResultMessage);
    }

    let gameResult = getGameResult(score);
    console.log(gameResult);
}


game();