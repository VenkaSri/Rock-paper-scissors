let roundCount = 1;
let yourScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const subTitle = document.querySelector('.sub-title');
const scissorsButton = document.querySelector(".scissors");
const startButton = document.querySelector('.start button');
const playAgainButton = document.querySelector('.end-button');
const displayRoundCount = document.querySelector('.roundCount');
const displayGameResults = document.querySelector('.end-title');
const displayPlayerCount = document.querySelector('.playerScore');
const scoreboard = document.querySelector('.scoreboard-container');
const displayRoundResults = document.querySelector('.roundResults');
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
    game(playerSelection);
    displayRoundCount.textContent = roundCount++;     
});


paperButton.addEventListener("click", function() {
    const playerSelection = "Paper";
    removeClass();
    game(playerSelection);
    displayRoundCount.textContent = roundCount++;
});

scissorsButton.addEventListener("click", function() {
    const playerSelection = "Scissors";
    removeClass();
    game(playerSelection);
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
    subTitle.classList.remove('hide');
}

function hideElements() {
    rockButton.classList.add('hide');
    scissorsButton.classList.add('hide');
    paperButton.classList.add('hide');
    scoreboard.classList.add('hide');
    subTitle.classList.add('hide');
}

function game(playerSelection) {
    if (computerScore == 5 || yourScore == 5) {
        hideElements();
        endGame(); 
        
    } else {
        playRound(playerSelection, computerPlay());  
    }
}

function endGame() {
    displayGameResults.classList.remove('hide');
    displayGameResults.classList.add('title');
    document.querySelector('h1').classList.add('hide');
    playAgainButton.classList.remove('hide');
    if (computerScore > yourScore) {
        displayGameResults.textContent = 'GOOD TRY!';
    } else if (yourScore > computerScore) {
        displayGameResults.textContent = 'YOU WON THE GAME!!';
    } else {
        displayGameResults.textContent = "IT'S A TIE GAME!";
    }
}

playAgainButton.addEventListener('click', function() {
    resetGame();
})

function resetGame() {
    roundCount = 1;
    yourScore = 0;
    computerScore = 0;
    displayPlayerCount.textContent = yourScore;
    displayComputerCount.textContent = computerScore;
    displayRoundResults.textContent = "";
    displayRoundCount.textContent = roundCount;
    showElements();
    displayGameResults.classList.add('hide');
    playAgainButton.classList.add('hide');
    document.querySelector('h1').classList.remove('hide');
}

