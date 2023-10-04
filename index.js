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

const playerChoice = "RoCk";
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));