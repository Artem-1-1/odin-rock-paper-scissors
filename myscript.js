let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); 
        if (computerChoice === 0) {
            return "rock";
        }
        else if (computerChoice === 1) {
            return "paper";
        }    
        else {
            return "scissors";
        }    
    }


function getHumanChoice() {
    let humanChoice = prompt('Make you move: rock, paper or scissors?', '').toLowerCase();
    if (humanChoice === 'rock') {
        return humanChoice;
    }
    else if (humanChoice === 'paper') {
        return humanChoice;
    }
    else if (humanChoice === 'scissors') {
        return humanChoice;
    }
    else {
        return alert('Invalid move.Enter rock, paper or scissors.');
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'paper' && computerChoice === 'rock') {
        ++humanScore;
        console.log('You win! Paper beats Rock.');
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        ++computerScore;
        console.log('You lose! Paper beats Rock.');
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        ++humanScore;
        console.log('You win! Rock beats Scissors.');
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        ++computerScore;
        console.log('You lose! Rock beats Scissors.');
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        ++humanScore;
        console.log('You win! Scissors beats Paper.');
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        ++computerScore;
        console.log('You lose! Scissors beats Paper.');
    }
    else if (humanChoice == computerChoice) {
        console.log('Tie');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("DEBUG =>", { humanSelection, computerSelection });

playRound(humanSelection, computerSelection);