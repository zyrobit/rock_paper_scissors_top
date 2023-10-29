function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (true) {
        const playerChoice = prompt("Enter your choice (rock, paper, or scissors):");
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);

        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }

        if (playerScore >= 5) {
            console.log("You win the game!");
            break; // Exit the loop if the player wins
        } else if (computerScore >= 5) {
            console.log("Computer wins the game!");
            break; // Exit the loop if the computer wins
        }
    }
}

game();
