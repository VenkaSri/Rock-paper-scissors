
let roundCount = 1;
let yourScore = 0;
let computerScore = 0;
let compHover = 0;

// generate three different choices 
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

document.querySelector(".rock").addEventListener("click", function() {
    return "Rock";
  });

// one round of the game


// plays the game 
function game() {
    const disRoundCount = document.querySelector('.card-round-count');
    const playerSelection = prompt("Enter your choice");
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    
    return document.querySelector(".card-round-count").innerHTML = roundCount;
      
    
    
}
 




