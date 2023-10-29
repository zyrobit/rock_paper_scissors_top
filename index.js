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



document.querySelector("#rock").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("rock", computerChoice);

    console.log(result);
    roundResult(result);
});

document.querySelector("#paper").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("paper", computerChoice);

    console.log(result);
    roundResult(result);
});

document.querySelector("#scissors").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("scissors", computerChoice);

    console.log(result);
    roundResult(result);
});

function roundResult(result) {
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = result;
};