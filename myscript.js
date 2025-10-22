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
        humanScore++;
        console.log(`You win! Paper beats Rock. Now Score: You - ${humanScore}, Computer - ${computerScore}`);
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log(`You lose! Paper beats Rock. Now Score: You - ${humanScore}, Computer - ${computerScore}`);
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log(`You win! Rock beats Scissors. Now Score: You - ${humanScore}, Computer - ${computerScore}`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log(`You lose! Rock beats Scissors. Now Score: You - ${humanScore}, Computer - ${computerScore}`);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log(`You win! Scissors beats Paper. Now Score: You - ${humanScore}, Computer - ${computerScore}`);
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        console.log(`You lose! Scissors beats Paper. Now Score: You - ${humanScore}, Computer - ${computerScore}`);
    }
    else if (humanChoice == computerChoice) {
        console.log('Tie');
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log('You win! :)');
    }
    else if (computerScore > humanScore) {
        console.log('You lose! :(');
    }
    else {
        console.log('That\'s tie. o_o');
    }
    console.log(`Total Score: You - ${humanScore}, Computer - ${computerScore}`);
}

playGame();