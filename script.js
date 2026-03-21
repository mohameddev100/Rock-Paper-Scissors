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
    return;
}
function playRound(humanChoise, computerChoise) {
    if (
        (humanChoise === "paper" && computerChoise === "rock") ||
        (humanChoise === "rock" && computerChoise === "scissors") ||
        (humanChoise === "scissors" && computerChoise === "paper")
    ) {
        result.innerHTML = "You Win 🏆";
        humanScore++;
        score.innerHTML = `${humanScore} : ${computerScore}`;
    }
    if (
        (humanChoise === "rock" && computerChoise === "paper") ||
        (humanChoise === "scissors" && computerChoise === "rock") ||
        (humanChoise === "paper" && computerChoise === "scissors")
    ) {
        result.innerHTML = "You Lose ❌";
        computerScore++;
        score.innerHTML = `${humanScore} : ${computerScore}`;
    }
    if (humanChoise === computerChoise) {
        result.innerHTML = "Tie 🟰";
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

