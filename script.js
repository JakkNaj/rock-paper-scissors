console.log = function(message) {
    document.getElementById('logArea').innerHTML = message;
};

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice) {
    let computer = getComputerChoice();
    let player = playerChoice;
    console.log("player choice: " + player);
    return

    if ( computer === player ) {
        console.log("TIE, play again");
        playRound();
    } else {
        if (computer === "rock") {
            switch(player) {
                case "paper": console.log("You win this round!, paper beats rock");
                            return "player";
                case "scissors": console.log("You lose this round!, rock beats scissors");
                            return "computer";
            }
        }
        if (computer === "paper") {
            switch(player) {
                case "scissors": console.log("You win this round!, scissors beats paper");
                            return "player";
                case "rock": console.log("You lose this round!, paper beats rock");
                            return "computer";
            }
        }
        if (computer === "scissors") {
            switch(player) {
                case "rock": console.log("You win this round!, rock beats scissors");
                            return "player";
                case "paper": console.log("You lose this round!, scissors beats paper");
                            return "computer";
            }
        }
    }
}
function checkScore(a, b) {
    return a - b >= 2;
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

document.getElementById("paper").addEventListener("click", playRound("paper"));
