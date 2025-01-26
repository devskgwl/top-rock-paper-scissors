// Store Win Counts
let humanScore = 0;
let computerScore = 0;

// Get Random Human Choice
function getHumanChoice() {
  // let humanChoice = prompt("Enter your Choice Rock, Paper or Scissor?");
  let humanChoice = ["rock", "paper", "scissors"];
  humanChoice = humanChoice[Math.floor(Math.random() * 3)];

  return humanChoice;
}

// Get Random Computer Choice
function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  computerChoice = computerChoice[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// Play Single Round and Record Result and Score
function playRound(player, computer) {
  let result = "";
  let msg = "";

  if (player === computer) {
    result = "It's a Tie.";
  } else {
    switch (player) {
      case "rock":
        result = computer === "scissors" ? "Player Win!" : "Player Lose!";
        break;
      case "paper":
        result = computer === "rock" ? "Player Win!" : "Player Lose!";
        break;
      case "scissors":
        result = computer === "paper" ? "Player Win!" : "Player Lose!";
        break;

      // include default block if using prompt to get choice
      // default:
      //   result = "Incorrect Input!!!";
    }
  }

  switch (result) {
    case "Player Win!":
      msg = `${player} beats ${computer}`;
      humanScore++;
      break;
    case "Player Lose!":
      msg = `${computer} beats ${player}`;
      computerScore++;
      break;
  }
  return [result, msg];
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let [result, msg] = playRound(humanSelection, computerSelection);
    console.log(`Round: ${i}`);
    console.log(`Computer: ${computerScore}`);
    console.log(`Player: ${humanScore}`);
    console.log(`Result: ${result}, ${msg}`);
    console.log("====================================");
  }
  console.log(`********** Final Result **********`);
  if (humanScore > computerScore) {
    console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
    console.log(`Player wins by ${humanScore - computerScore} points`);
  } else if (computerScore > humanScore) {
    console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
    console.log(`Computer wins by ${computerScore - humanScore} points`);
  } else {
    console.log(`Computer: ${computerScore}, Player: ${humanScore}`);
    console.log(`It's a Tie with ${humanScore} - ${computerScore}`);
  }
}

// Execute Game and Watch Console for Results
playGame();
