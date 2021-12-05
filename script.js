let roundCount = 1;
let yourScore = 0;
let computerScore = 0;
compHover = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const startButton = document.querySelector('.start button');
const scoreboard = document.querySelector('.scoreboard-container');
const displayRoundCount = document.querySelector('.roundCount');
const displayPlayerCount = document.querySelector('.playerScore');
const displayComputerCount = document.querySelector('.computerScore');
const displayRoundResults = document.querySelector('.roundResults');

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0 : 
            randomNumber = "Rock";
            rockButton.classList.add("addclass");
            break;
        case 1 : 
            randomNumber = "Paper";
            paperButton.classList.add("addclass");
            break;
        case 2 : 
            randomNumber = "Scissors";
            scissorsButton.classList.add("addclass");
            break;
    }
    return randomNumber;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "Rock" && computerSelection == "Paper") {
        displayComputerCount.textContent = ++computerScore; 
        displayRoundResults.textContent = 'You lose!';
        console.log('P b R');
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        displayComputerCount.textContent = ++computerScore;
        displayRoundResults.textContent = 'You lose!';
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        displayComputerCount.textContent = ++computerScore; 
        displayRoundResults.textContent = 'You lose!';   
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        displayPlayerCount.textContent = ++yourScore; 
        displayRoundResults.textContent = 'You win!';  
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        displayPlayerCount.textContent = ++yourScore;
        displayRoundResults.textContent = 'You win!'; 
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        displayPlayerCount.textContent = ++yourScore;
        displayRoundResults.textContent = 'You win!';  
    }else { 
        displayRoundResults.textContent = "It's a tie!";
    } 
}

function removeClass() {
    rockButton.classList.remove("addclass");
    scissorsButton.classList.remove("addclass");
    paperButton.classList.remove("addclass");
}

rockButton.addEventListener("click", function() {
    const playerSelection = "Rock";

    removeClass();
    playRound(playerSelection, computerPlay());
    displayRoundCount.textContent = roundCount++;     
});

paperButton.addEventListener("click", function() {
    const playerSelection = "Paper";

    removeClass();
    playRound(playerSelection, computerPlay());
    displayRoundCount.textContent = roundCount++;
});

scissorsButton.addEventListener("click", function() {
    const playerSelection = "Scissors";

    removeClass();
    playRound(playerSelection, computerPlay());
    displayRoundCount.textContent = roundCount++;
});

startButton.addEventListener('click', function() {
    showElements();
    startButton.style.display = 'none';
});

function showElements() {
    rockButton.classList.remove('hide');
    scissorsButton.classList.remove('hide');
    paperButton.classList.remove('hide');
    scoreboard.classList.remove('hide');
}

