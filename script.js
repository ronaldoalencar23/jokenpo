const start = document.getElementById("start");
const header = document.getElementById("header");
const gameBoard = document.getElementById("game-board");
const computersImage = document.getElementsByClassName("computersImage");
const result = document.getElementById("result");
let computerChoice = "";

// start.addEventListener("click", () => {
//   header.classList.add("hidden");
//   document.getElementById("h1").innerHTML = "Choose one";
// });

const rock = document.getElementsByClassName("rock");
rock[0].addEventListener("click", () => {
  rock[0].classList.add("selected");
  generateComputerChoice();
  check("rock");
});

const paper = document.getElementsByClassName("paper");
paper[0].addEventListener("click", () => {
  paper[0].classList.add("selected");
  generateComputerChoice();
  check("paper");
});

const scissors = document.getElementsByClassName("scissors");
scissors[0].addEventListener("click", () => {
  scissors[0].classList.add("selected");
  generateComputerChoice();
  check("scissors");
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const lizard = document.getElementsByClassName("lizard");
lizard[0].addEventListener("click", () => {
  lizard[0].classList.add("selected");
  generateComputerChoice();
  check("lizard");
});
//                                                                           ------------------>              Adicional lizard-spock
const spock = document.getElementsByClassName("spock");
spock[0].addEventListener("click", () => {
  spock[0].classList.add("selected");
  generateComputerChoice();
  check("spock");
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function generateComputerChoice() {
  let possibleChoices = ["rock", "paper", "scissors", "lizard", "spock"]; //  ------------------>              Adicional lizard-spock
  const randomChoice = Math.floor(Math.random() * possibleChoices.length);
  computerChoice = possibleChoices[randomChoice];
  computersImage[0].setAttribute(
    "src",
    `./images/${randomChoice + 1}-${computerChoice}.jpg`
  );
}

// generateComputerChoice();

let draw = " It's a draw";
let playerVictory = " YOU WIN!";
let playerDefeat = " you lose...";

// Comparação e resultado
function check(playerChoice) {
  if (playerChoice === computerChoice) {
    result.innerText = draw; // se player 1 pedra e computador pedra, empate
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    result.innerText = playerDefeat; // se player 1 pedra e computador tesoura, vitória computador
  } else if (playerChoice === "rock" && computerChoice === "spock") {
    result.innerText = playerDefeat; // /////////////////////////////           ------------------>              Adicional lizard-spock
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    result.innerText = playerVictory; // se player 1 pedra e computador tesoura, vitória player 1
  } else if (playerChoice === "rock" && computerChoice === "lizard") {
    result.innerText = playerVictory; // /////////////////////////////          ------------------>              Adicional lizard-spock
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result.innerText = playerVictory; // se player 1 papel e computador pedra, vitória player 1
  } else if (playerChoice === "paper" && computerChoice === "spock") {
    result.innerText = playerVictory; // /////////////////////////////          ------------------>              Adicional lizard-spock
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    result.innerText = playerDefeat; // se player 1 papel e computador tesoura, vitória computador
  } else if (playerChoice === "paper" && computerChoice === "lizard") {
    result.innerText = playerDefeat; // //////////////////////////////          ------------------>              Adicional lizard-spock
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    result.innerText = playerDefeat; // se player 1 tesoura e computador pedra, vitória computador
  } else if (playerChoice === "scissors" && computerChoice === "spock") {
    result.innerText = playerDefeat; // ///////////////////////////////         ------------------>              Adicional lizard-spock
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    result.innerText = playerVictory; // se player 1 tesoura e computador papel, vitória player 1
  } else if (playerChoice === "scissors" && computerChoice === "lizard") {
    result.innerText = playerVictory; // //////////////////////////////         ------------------>
  } else if (playerChoice === "lizard" && computerChoice === "paper") {
    result.innerText = playerVictory; // //////////////////////////////         ------------------>
  } else if (playerChoice === "lizard" && computerChoice === "spock") {
    result.innerText = playerVictory; // /////////////////////////////          ------------------>
  } else if (playerChoice === "lizard" && computerChoice === "scissors") {
    result.innerText = playerDefeat; // //////////////////////////////          ------------------>
  } else if (playerChoice === "lizard" && computerChoice === "rock") {
    result.innerText = playerDefeat; // /////////////////////////////           ------------------>              Adicional lizard-spock
  } else if (playerChoice === "spock" && computerChoice === "paper") {
    result.innerText = playerDefeat; // /////////////////////////////           ------------------>
  } else if (playerChoice === "spock" && computerChoice === "rock") {
    result.innerText = playerVictory; // /////////////////////////////          ------------------>
  } else if (playerChoice === "spock" && computerChoice === "scissors") {
    result.innerText = playerVictory; // /////////////////////////////          ------------------>
  } else if (playerChoice === "spock" && computerChoice === "lizard") {
    result.innerText = playerDefeat; // /////////////////////////////           ------------------>
  }
}

// Ctrl + K + C para comentar
// Ctrl + K + U para remover comentário
