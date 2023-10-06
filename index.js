function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    const choices = ["rock", "paper", "scissors"];

    const computerChoice = choices[randomNumber];

    return computerChoice;
}

function playRound(playerChoice, computerChoice) {

    playerChoice = playerChoice.toLowerCase();

    const choice = ["rock", "paper", "scissors"];

    if (!choice.includes(playerChoice)) {
        return "Please choose between rock, paper and scissors!"
    }

    if (playerChoice === computerChoice) {
        return "It's a tie!"
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; 0 < 5; i++) {
        const playerChoice = prompt("Enter your choice (rock, paper, or scissors):")
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);

        console.log(`Round ${i + 1}: ${result}`);

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