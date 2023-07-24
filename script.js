let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
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
                case "paper": console.log("You win this round!, paper beats rock");
                            return playerScore++;
                case "scissors": console.log("You lose this round!, rock beats scissors");
                            return computerScore++;
            }
        }
        if (computer === "paper") {
            switch(player) {
                case "scissors": console.log("You win this round!, scissors beats paper");
                    return playerScore++;
                case "rock": console.log("You lose this round!, paper beats rock");
                    return computerScore++;
            }
        }
        if (computer === "scissors") {
            switch(player) {
                case "rock": console.log("You win this round!, rock beats scissors");
                    return playerScore++;
                case "paper": console.log("You lose this round!, scissors beats paper");
                    return computerScore++;
            }
        }
    }
}

function checkCount(){
    if (playerScore >= 5) {
        console.log("Player win!");
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5) {
        console.log("Computer win!");
        playerScore = 0;
        computerScore = 0;
    }
    console.log("P: " + playerScore + "   C: " + computerScore);
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

