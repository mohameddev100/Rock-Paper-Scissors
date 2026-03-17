let choises = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(items) {
    console.log(items[Math.floor(Math.random() * items.length)]);
}

function getHumanChoice() {
    let choise = prompt(
        "Enter your Choise: (Rock, Paper, Scissors)",
    ).toLowerCase();
    console.log(choise);
}

function playRound(humanChoise, computerChoise) {
    if (humanChoise == "rock" || computerChoise == "scissors") {
        console.log("Human winaa");
    }
}

playRound(getHumanChoice(), getComputerChoice(choises));
