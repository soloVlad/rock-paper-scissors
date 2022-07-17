const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];
const ROUND_RESULTS = ["win", "draw", "lose"];  // for player

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

function determineRoundResult(playerChoice, computerChoice) {
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

function getRoundResultMessage(playerChoice, computerChoice, roundResult) {
    let playerChoiceCapitalized = capitalizeFirstLetter(playerChoice);
    let computerChoiceCapitalized = capitalizeFirstLetter(computerChoice);

    switch(roundResult) {
        case ROUND_RESULTS[0]:
            return `You won! ${playerChoiceCapitalized} beats ${computerChoiceCapitalized}`;
        case ROUND_RESULTS[1]:
            return `You lose! ${computerChoiceCapitalized} beats ${playerChoiceCapitalized}`;
        case ROUND_RESULTS[2]:
            return `Draw! Computer chose ${playerChoiceCapitalized} too`;
    }
}

function getPlayerChoice() {
    return prompt("Enter your choice (rock, paper or scissors):").toLowerCase();
}

function playRound(playerChoice, computerChoice) {
    let roundResult = determineRoundResult(playerChoice, computerChoice);
    let roundResultMessage = getRoundResultMessage(playerChoice, computerChoice, roundResult);
    return roundResultMessage;
    
}