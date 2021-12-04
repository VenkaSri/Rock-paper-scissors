let roundCount = 1;
let yourScore = 0;
let computerScore = 0;
compHover = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const startButton = document.querySelector('.start button');
<<<<<<< HEAD



  function computerPlay() {
=======
const scoreboard = document.querySelector('.scoreboard');
const displayPlayerCount = document.querySelector('.playerScore');
const displayComputerCount = document.querySelector('.computerScore');

function computerPlay() {
>>>>>>> rps-ui
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

<<<<<<< HEAD
  function playRound(playerSelection, computerSelection) {

    
    
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        return console.log("You lose! Paper beats rock");    
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++;
        return console.log("You lose! Scissors beats paper");    
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++;
        return console.log("You lose! Rock beats scissors");    
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        yourScore++;
        return console.log("You win! Rock beats scissors");    
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        yourScore++;
        return console.log("You win! Paper beats Rock");    
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        yourScore++;
        return console.log("You win! Scissors beats paper");    
    }else { 
        return console.log("It's a tie");
=======
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
>>>>>>> rps-ui
    } 
}

function removeClass() {
    rockButton.classList.remove("addclass");
    scissorsButton.classList.remove("addclass");
    paperButton.classList.remove("addclass");
}

<<<<<<< HEAD

rockButton.addEventListener("click", function() {
    const playerSelection = "Rock";
    const displayRound = document.querySelector('.card-round-count');

    displayRound.textContent = roundCount++;
    removeClass();
    playRound(playerSelection, computerPlay());
    
    
=======
rockButton.addEventListener("click", function() {
    const playerSelection = "Rock";

    removeClass();
    playRound(playerSelection, computerPlay());     
>>>>>>> rps-ui
});

paperButton.addEventListener("click", function() {
    const playerSelection = "Paper";
<<<<<<< HEAD
    const displayRound = document.querySelector('.card-round-count');

    displayRound.textContent = roundCount++;
=======

>>>>>>> rps-ui
    removeClass();
    playRound(playerSelection, computerPlay());
});

scissorsButton.addEventListener("click", function() {
    const playerSelection = "Scissors";
<<<<<<< HEAD
    const displayRound = document.querySelector('.card-round-count');

    displayRound.textContent = roundCount++;
=======

>>>>>>> rps-ui
    removeClass();
    playRound(playerSelection, computerPlay());
});

startButton.addEventListener('click', function() {
    showElements();
    startButton.style.display = 'none';
});

function showElements() {
<<<<<<< HEAD
    document.querySelector('.card-title').classList.remove('hide');
    document.querySelector('.card-round-count').classList.remove('hide');
    rockButton.classList.remove('hide');
    scissorsButton.classList.remove('hide');
    paperButton.classList.remove('hide');
=======
    rockButton.classList.remove('hide');
    scissorsButton.classList.remove('hide');
    paperButton.classList.remove('hide');
    scoreboard.classList.remove('hide');
>>>>>>> rps-ui
}

