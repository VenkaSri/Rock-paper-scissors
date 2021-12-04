let roundCount = 1;
let yourScore = 0;
let computerScore = 0;
compHover = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const startButton = document.querySelector('.start button');
const scoreboard = document.querySelector('.scoreboard');
const displayPlayerCount = document.querySelector('.playerScore');
const displayComputerCount = document.querySelector('.computerScore');

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
        console.log('P b R');
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        displayComputerCount.textContent = ++computerScore;
            
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        displayComputerCount.textContent = ++computerScore; 
           
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        displayPlayerCount.textContent = ++yourScore; 
        console.log('S l R');  
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        displayPlayerCount.textContent = ++yourScore; 
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        displayPlayerCount.textContent = ++yourScore;  
    }else { 
        return ;
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
});

paperButton.addEventListener("click", function() {
    const playerSelection = "Paper";

    removeClass();
    playRound(playerSelection, computerPlay());
});

scissorsButton.addEventListener("click", function() {
    const playerSelection = "Scissors";

    removeClass();
    playRound(playerSelection, computerPlay());
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

