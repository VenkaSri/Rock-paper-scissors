let roundCount = 1;
let yourScore = 0;
let computerScore = 0;
compHover = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");


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
    } 
}

function removeClass() {
    rockButton.classList.remove("addclass");
    scissorsButton.classList.remove("addclass");
    paperButton.classList.remove("addclass");
}


rockButton.addEventListener("click", function() {
    const playerSelection = "Rock";
    const displayRound = document.querySelector('.card-round-count');

    displayRound.textContent = roundCount++;
    removeClass();
    playRound(playerSelection, computerPlay());
    
    
});

paperButton.addEventListener("click", function() {
    const playerSelection = "Paper";
    const displayRound = document.querySelector('.card-round-count');

    displayRound.textContent = roundCount++;
    removeClass();
    playRound(playerSelection, computerPlay());
});

scissorsButton.addEventListener("click", function() {
    const playerSelection = "Scissors";
    const displayRound = document.querySelector('.card-round-count');

    displayRound.textContent = roundCount++;
    removeClass();
    playRound(playerSelection, computerPlay());
});





