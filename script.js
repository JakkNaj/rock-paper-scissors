function getComputerChoice() {
    choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function getPlayerChoice() {
    let playerChoice = prompt("Please enter your move: (rock | paper | scissors)")
    return playerChoice
}

function playRound() {
    let computer = getComputerChoice()
    let player = getPlayerChoice()
    if ( computer === player ) {
        console.log("this is round is tied")
        playRound()
        return
    } else {
        if (computer == "rock") {
            switch(player) {
                case "paper": console.log("You win this round!, paper beats rock");
                            return "player";
                case "scissors": console.log("You lose this round!, rock beats scissors");
                            return "computer";
            }
        }
        if (computer == "paper") {
            switch(player) {
                case "scissors": console.log("You win this round!, scissors beats paper");
                            return "player";
                case "rock": console.log("You lose this round!, paper beats rock");
                            return "computer";
            }
        }
        if (computer == "scissors") {
            switch(player) {
                case "rock": console.log("You win this round!, rock beats scissors");
                            return "player";
                case "paper": console.log("You lose this round!, scissors beats paper");
                            return "computer";
            }
        }
    }
}

function game() {
    scoreComputer = 0
    scorePlayer = 0
    for(let i = 0; i < 5; i++) {
        if (playRound() == "player"){
            scorePlayer++;
        } else {
            scoreComputer++;
        }
        if (checkScore(scorePlayer, scoreComputer)) {
            console.log("You win!")
            return
        }
        if (checkScore(scoreComputer, scorePlayer)) {
            console.log("You lose!")
            return
        }
    }
}

function checkScore(A, B) {
    if (A - B >= 2) {
        return true
    }
    return false
}