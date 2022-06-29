const buttons = document.querySelectorAll("input");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function disableButtons() {
  buttons.forEach(function (element) {
    element.disabled = true;
  });
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let text = "";

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;

    text = `You win! ${playerSelection} beats ${computerSelection}. Player score: ${playerScore}, Computer score ${computerScore}`;

    if (playerScore == 5) {
      disableButtons();

      text = `You won the game`;
    }
  } else if (playerSelection == computerSelection) {
    text = "Tie";
  } else {
    computerScore++;

    text = `You lose! ${computerSelection} beats ${playerSelection}. Player score: ${playerScore}, Computer score ${computerScore}`;

    if (computerScore == 5) {
      disableButtons();

      text = `Computer won the game`;
    }
  }
  document.getElementById("result").innerHTML = text;
}

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    playRound(button.value);
  })
);

// changes 