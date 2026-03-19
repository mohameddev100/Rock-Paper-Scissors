const human_choise = document.getElementById("human-choise");
const computer_choise = document.getElementById("computer-choise");
const result = document.getElementById("result");
const score = document.getElementById("score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let choises = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(items) {
    return (computer_choise.innerHTML = `${items[Math.floor(Math.random() * items.length)]}`);
}

function getHumanChoice() {
    let rock = document.createElement("button");
    rock.id = "rock";
    rock.innerHTML = "Rock";
    let paper = document.createElement("button");
    paper.id = "paper";
    paper.innerHTML = "Paper";
    let scissors = document.createElement("button");
    scissors.id = "scissors";
    scissors.innerHTML = "Scissors";

    human_choise.appendChild(rock);
    human_choise.appendChild(paper);
    human_choise.appendChild(scissors);

    rock.addEventListener("click", function handlRock() {
        playRound(rock.id, getComputerChoice(choises));
    });
    paper.addEventListener("click", function handlPaper() {
        playRound(paper.id, getComputerChoice(choises));
    });
    scissors.addEventListener("click", function handlScissors() {
        playRound(scissors.id, getComputerChoice(choises));
    });
}
function stopGame() {
    rock.removeEventListener("click", handlRock);
    paper.removeEventListener("click", handlPaper);
    scissors.removeEventListener("click", handlScissors);
}
function playRound(humanChoise, computerChoise) {
    if (humanChoise === "paper" && computerChoise === "rock") {
        result.innerHTML = "Win";
        humanScore += 1;
        score.innerHTML = `${humanScore} : ${computerScore}`;
    } else if (humanChoise === "rock" && computerChoise === "scissors") {
        result.innerHTML = "Win";
        humanScore += 1;
        score.innerHTML = `${humanScore} : ${computerScore}`;
    } else if (humanChoise === "scissors" && computerChoise === "paper") {
        result.innerHTML = "Win";
        humanScore += 1;
        score.innerHTML = `${humanScore} : ${computerScore}`;
    } else if (humanChoise === "rock" && computerChoise === "paper") {
        computerScore += 1;
        result.innerHTML = "Lose";
        score.innerHTML = `${humanScore} : ${computerScore}`;
    } else if (humanChoise === "scissors" && computerChoise === "rock") {
        computerScore += 1;
        result.innerHTML = "Lose";
        score.innerHTML = `${humanScore} : ${computerScore}`;
    } else if (humanChoise === "paper" && computerChoise === "scissors") {
        computerScore += 1;
        result.innerHTML = "Lose";
        score.innerHTML = `${humanScore} : ${computerScore}`;
    } else if (humanChoise === "scissors" && computerChoise === "scissors") {
        result.innerHTML = "Tie";
        score.innerHTML = `${humanScore} : ${computerScore}`;
    } else if (humanChoise === "paper" && computerChoise === "paper") {
        result.innerHTML = "Tie";
        score.innerHTML = `${humanScore} : ${computerScore}`;
    } else if (humanChoise === "rock" && computerChoise === "rock") {
        result.innerHTML = "Tie";
        score.innerHTML = `${humanScore} : ${computerScore}`;
    }
    if (humanScore === 5) {
        result.innerHTML = "You Win";
        score.innerHTML = `${humanScore} : ${computerScore}`;
        stopGame();
    } else if (computerScore === 5) {
        result.innerHTML = "You Win Computer";
        score.innerHTML = `${computerScore} : ${humanScore}`;
        stopGame();
    }
}

function playGame() {
    getHumanChoice();
}

playGame();
