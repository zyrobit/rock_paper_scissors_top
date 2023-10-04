function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    const choices = ["rock", "paper", "scissors"];

    const computerChoice = choices[randomNumber];

    return computerChoice;
}

console.log(getComputerChoice());