let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function logMessage( message ){
    let logArea = document.getElementById("mylog");

    let logMessage = document.createElement('div');
    logMessage.textContent = message;
    logArea.appendChild(logMessage);
}

function playRound(playerChoice) {
    let computer = getComputerChoice();
    let player = playerChoice;

    if ( computer === player ) {
        console.log("TIE, play again");
        playRound();
    } else {
        if (computer === "rock") {
            switch(player) {
                case "paper": logMessage("You win this round!, paper beats rock");
                            return playerScore++;
                case "scissors": logMessage("You lose this round!, rock beats scissors");
                            return computerScore++;
            }
        }
        if (computer === "paper") {
            switch(player) {
                case "scissors": logMessage("You win this round!, scissors beats paper");
                    return playerScore++;
                case "rock": logMessage("You lose this round!, paper beats rock");
                    return computerScore++;
            }
        }
        if (computer === "scissors") {
            switch(player) {
                case "rock": logMessage("You win this round!, rock beats scissors");
                    return playerScore++;
                case "paper": logMessage("You lose this round!, scissors beats paper");
                    return computerScore++;
            }
        }
    }
}

function displayScore(){
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

}

function checkCount(){
    if (playerScore >= 3) {
        logMessage("Player win!");
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore >= 3) {
        logMessage("Computer win!");
        playerScore = 0;
        computerScore = 0;
    }
    displayScore();
}


function showGame(){
    //hide play button
    let playButt = document.getElementById("play");
    playButt.classList.add("hidden");

    //display main section
    document.getElementById("mainSection").style.display = "flex";
}

//hide main section - when page is loaded
document.getElementById("mainSection").style.display = "none";

document.querySelector('button[id="play"]').addEventListener("click", showGame);

document.getElementById("paper").addEventListener("click",  () => {
    playRound("paper");
    checkCount();
})

document.getElementById("scissors").addEventListener("click",  () => {
    playRound("scissors");
    checkCount();
})

document.getElementById("rock").addEventListener("click",  () => {
    playRound("rock");
    checkCount();
})

