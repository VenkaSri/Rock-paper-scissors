


let roundCount = 0;
let yourScore = 0;
let computerScore = 0;


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

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
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

function game() {
    const playerSelection = prompt("Enter your choice");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    return console.log(`Your score ${yourScore} and the computer's score ${computerScore} \t\t ${roundCount}`);
}

    while (roundCount < 6) {
        game();
        roundCount++;
    }


