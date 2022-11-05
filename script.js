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
        console.log("tie, play again")
        playRound()
        return
    } else {
        if (computer == "rock") {
            switch(player) {
                case "paper": console.log("You win!, paper beats rock"); break;
                case "scissors": console.log("You lose!, rock beats scissors"); break;
            }
        }
        if (computer == "paper") {
            switch(player) {
                case "scissors": console.log("You win!, scissors beats paper"); break;
                case "rock": console.log("You lose!, paper beats rock"); break;
            }
        }
        if (computer == "scissors") {
            switch(player) {
                case "rock": console.log("You win!, rock beats scissors"); break;
                case "paper": console.log("You lose!, scissors beats paper"); break;
            }
        }
    }
}