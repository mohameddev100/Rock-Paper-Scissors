let choises = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(items) {
    return `${items[Math.floor(Math.random() * items.length)]}`;
}

function getHumanChoice() {
    let choise = prompt(
        "Enter your Choise: (Rock, Paper, Scissors)",
    ).toLowerCase();
    return `${choise}`;
}

function playRound(humanChoise, computerChoise) {
    if (humanChoise === "paper" && computerChoise === "rock") {
        console.log("Win");
        console.log(`${humanChoise} VS ${computerChoise}`);
        humanScore += 1;
    } else if (humanChoise === "rock" && computerChoise === "scissors") {
        console.log("Win");
        console.log(`${humanChoise} VS ${computerChoise}`);
        humanScore += 1;
    } else if (humanChoise === "scissors" && computerChoise === "paper") {
        console.log("Win");
        console.log(`${humanChoise} VS ${computerChoise}`);
        humanScore += 1;
    } else if (humanChoise === "rock" && computerChoise === "paper") {
        console.log("Lose");
        computerScore += 1;
        console.log(`${humanChoise} VS ${computerChoise}`);
    } else if (humanChoise === "scissors" && computerChoise === "rock") {
        console.log("Lose");
        computerScore += 1;
        console.log(`${humanChoise} VS ${computerChoise}`);
    } else if (humanChoise === "paper" && computerChoise === "scissors") {
        console.log("Lose");
        computerScore += 1;
        console.log(`${humanChoise} VS ${computerChoise}`);
    } else if (humanChoise === "scissors" && computerChoise === "scissors") {
        console.log("Tie");
        console.log(`${humanChoise} VS ${computerChoise}`);
    } else if (humanChoise === "paper" && computerChoise === "paper") {
        console.log("Tie");
        console.log(`${humanChoise} VS ${computerChoise}`);
    } else if (humanChoise === "rock" && computerChoise === "rock") {
        console.log("Tie");
        console.log(`${humanChoise} VS ${computerChoise}`);
    } else {
        console.log("Enter a valid choise");
    }
    console.log(`${humanScore} : ${computerScore}`);
}

function playGame(humanScore, computerScore) {
    while (true) {
        if (humanScore || computerScore !== 5) {
            playRound(getHumanChoice(), getComputerChoice(choises));
        } else {
            break;
        }
    }
}

playGame(humanScore, computerScore);
