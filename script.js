const human_choise = document.getElementById("human-choise");
const computer_choise = document.getElementById("computer-choise");
const result = document.getElementById("result");
const score = document.getElementById("score");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choises = ["rock", "paper", "scissors"];
    return (computer_choise.textContent = `${choises[Math.floor(Math.random() * choises.length)]}`);
}
let start = document.createElement("button");
start.id = "start";
start.textContent = "Start Game";
let reset = document.createElement("button");
reset.textContent = "Reset";
let rock = document.createElement("button");
rock.id = "rock";
rock.textContent = "Rock";
let paper = document.createElement("button");
paper.id = "paper";
paper.textContent = "Paper";
let scissors = document.createElement("button");
scissors.id = "scissors";
scissors.textContent = "Scissors";

function getHumanChoice() {
    human_choise.append(rock, paper, scissors, reset, start);

    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    reset.style.display = "none";

    rock.addEventListener("click", function handlRock() {
        playRound(rock.id, getComputerChoice());
    });
    paper.addEventListener("click", function handlPaper() {
        playRound(paper.id, getComputerChoice());
    });
    scissors.addEventListener("click", function handlScissors() {
        playRound(scissors.id, getComputerChoice());
    });
    reset.addEventListener("click", function () {
        humanScore = 0;
        computerScore = 0;
        result.textContent = "";
        score.textContent = "";
        computer_choise.textContent = "";
    });
    start.addEventListener("click", function () {
        start.style.display = "none";

        rock.style.display = "inline";
        paper.style.display = "inline";
        scissors.style.display = "inline";
        reset.style.display = "inline";
    });
}

function playRound(humanChoise, computerChoise) {
    if (
        (humanChoise === "paper" && computerChoise === "rock") ||
        (humanChoise === "rock" && computerChoise === "scissors") ||
        (humanChoise === "scissors" && computerChoise === "paper")
    ) {
        result.textContent = "You Win 🏆";
        humanScore++;
        score.textContent = `${humanScore} : ${computerScore}`;
    }
    if (
        (humanChoise === "rock" && computerChoise === "paper") ||
        (humanChoise === "scissors" && computerChoise === "rock") ||
        (humanChoise === "paper" && computerChoise === "scissors")
    ) {
        result.textContent = "You Lose ❌";
        computerScore++;
        score.textContent = `${humanScore} : ${computerScore}`;
    }
    if (humanChoise === computerChoise) {
        result.textContent = "Tie 🟰";
        score.textContent = `${humanScore} : ${computerScore}`;
    }
    if (humanScore === 5) {
        result.textContent = "Game Over: User Win";
        score.textContent = `${humanScore} : ${computerScore}`;
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        reset.style.display = "none";
    } else if (computerScore === 5) {
        result.textContent = "Game Over: Computer Win";
        score.textContent = `${computerScore} : ${humanScore}`;
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
        reset.style.display = "none";
    }
}

function playGame() {
    getHumanChoice();
}

playGame();
