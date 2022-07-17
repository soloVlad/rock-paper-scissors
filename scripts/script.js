const POSSIBLE_CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = getRandomInt(POSSIBLE_CHOICES.length);
    return POSSIBLE_CHOICES[randomIndex];
}

// return random integer in [0; max)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 5; i++) {
    console.log(getComputerChoice());
}