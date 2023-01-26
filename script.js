const start = document.getElementById("start");
const header = document.getElementById("header");
const gameBoard = document.getElementById("game-board");

start.addEventListener("click", () => {
  header.classList.add("hidden");
  document.getElementById("h1").innerHTML = "Choose one";
});

const rock = document.getElementsByClassName("rock");
rock[0].addEventListener("click", () => {
  console.log("Funcionando");
});

const paper = document.getElementsByClassName("paper");

const scissors = document.getElementsByClassName("scissors");

rock.addEventListener("click", () => {});

function choice() {}

// Falta dar valor às constantes

// const rock = 0;
// const scissors = 0;
// const paper = 0;
const playerChoice = 0;
const computerChoice = 0;
const draw = 0; // criar mensagem de empate
const playerVictory = 0; // criar mensagem de vitória
const playerDefeat = 0; // criar mensagem de derrota

// Comparação e resultado

if (playerChoice === rock && computerChoice === rock) {
  return draw; // se player 1 pedra e computador pedra, empate
} else if (playerChoice === rock && computerChoice === paper) {
  return playerDefeat; // se player 1 pedra e computador tesoura, vitória computador
} else if (playerChoice === rock && computerChoice === scissors) {
  return playerVictory; // se player 1 pedra e computador tesoura, vitória player 1
} else if (playerChoice === paper && computerChoice === rock) {
  return playerVictory; // se player 1 papel e computador pedra, vitória player 1
} else if (playerChoice === paper && computerChoice === paper) {
  return draw; // se player 1 papel e computador papel, empate
} else if (playerChoice === paper && computerChoice === scissors) {
  return playerDefeat; // se player 1 papel e computador tesoura, vitória computador
} else if (playerChoice === scissors && computerChoice === rock) {
  return playerDefeat; // se player 1 tesoura e computador pedra, vitória computador
} else if (playerChoice === scissors && computerChoice === paper) {
  return playerVictory; // se player 1 tesoura e computador papel, vitória player 1
} else if (playerChoice === scissors && computerChoice === scissors) {
  return draw; // se player 1 tesoura e computador tesoura, empate
}
