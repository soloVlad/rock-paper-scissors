const playOptions = ["Rock", "Paper", "Scissors"];

function getRandomIndex() {
  return Math.floor(Math.random() * 3);
}

function computerPlay() {
  let randomIndex = getRandomIndex();
  return playOptions[randomIndex];
}

for (let i = 0; i < 10; i++) {
  console.log(computerPlay());
}
