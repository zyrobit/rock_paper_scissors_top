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

let playerScore = 0;
let computerScore = 0;

function roundResult(result) {
    const resultDiv = document.querySelector("#result");
    resultDiv.textContent = result;

    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }

    const scoreDiv = document.querySelector("#score");
    scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

    if (playerScore >= 5) {
        scoreDiv.textContent = "Player wins the game!";
    } else if (computerScore >= 5) {
        scoreDiv.textContent = "Computer wins the game!";
        disableButtons();
    }
};

function disableButtons() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

