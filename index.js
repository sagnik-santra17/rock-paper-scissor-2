let playerScore = 0;
let computerScore = 0;
let round = 1;

let playerName = window.prompt(`Enter you name here`);

playerName =
  playerName.slice(0, 1).toUpperCase() + playerName.slice(1, playerName.length);

while (playerScore < 5 && computerScore < 5) {
  let playerPick = window.prompt(`Hello ${playerName}, choose your pick`);
  playerPick =
    playerPick.slice(0, 1).toUpperCase() +
    playerPick.slice(1, playerPick.length);

  const choices = ["Rock", "Paper", "Scissor"];
  computerPick = choices[Math.floor(Math.random() * 3)];

  if (!choices.includes(playerPick)) {
    alert(`${playerName} you have a made a spelling mistake`);
    continue;
  }
  console.log(`Round: ${round++}`);

  if (
    (playerPick === "Rock" && computerPick === "Scissor") ||
    (playerPick === "Paper" && computerPick === "Rock") ||
    (playerPick === "Scissor" && computerPick === "Paper")
  ) {
    console.log(`Player wins this round`);
    playerScore++;
  } else if (playerPick === computerPick) {
    console.log(`This is a draw`);
  } else {
    console.log(`Computer wins this round`);
    computerScore++;
  }

  console.log(
    `Player chose: ${playerPick} and Computer chose: ${computerPick}`
  );
  console.log(
    `Final score => Player Score: ${playerScore} || Computer Score: ${computerScore}`
  );

  if (playerScore === 5) {
    alert(`Congrats ${playerName}, you have own the game`);
  } else if (computerScore === 5) {
    alert(`Sorry ${playerName}, computer own the game this time...`);
  }
}
