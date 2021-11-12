
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0 : 
            randomNumber = "Rock";
            break;
        case 1 : 
            randomNumber = "Paper";
            break;
        case 2 : 
            randomNumber = "Scissors";
            break;
    }

    return randomNumber;
}

const playerSelection = prompt("Enter your choice");
const computerSelection = computerPlay();

console.log(computerSelection);

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return console.log("You lose! Paper beats rock");    
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return console.log("You lose! Scissors beats paper");    
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return console.log("You lose! Rock beats scissors");    
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return console.log("You win! Rock beats scissors");    
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return console.log("You win! Paper beats Rock");    
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return console.log("You win! Scissors beats paper");    
    }else { 
        return console.log("It's a tie");
    } 
}

function game() {
    playRound(playerSelection, computerSelection);
}

game();

