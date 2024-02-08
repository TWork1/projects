// Generate random Rock, Paper, or Scissors for Computer
function getComputerChoice() {

n = Math.floor(Math.random() * 100)
    let computerSelection;
    if (33 >= n){
        computerSelection = "Rock"
    }
    else if (n <= 66){
        computerSelection = "Scissors"
    }
    else {
        computerSelection = "Paper"
    }
    return computerSelection
}
function playRound(playerSelection, computerSelection){
        function getComputerChoice() {

            n = Math.floor(Math.random() * 100)
             let computerSelection;
             if (33 >= n){
                computerSelection = "Rock"
             }
             else if (n <= 66){
                computerSelection = "Scissors"
             }
             else {
                 computerSelection = "Paper"
             }
             return computerSelection
        }
    let cap = playerSelection.toUpperCase()
    let remaining = cap.slice(1)
    let lowerCase = remaining.toLowerCase(1)
    let firstLetter = cap.charAt()
    playerInput = firstLetter + lowerCase
    return playerInput + getComputerChoice()
}
console.log(playRound("rock", ));

/*Ask player for input and force lowercase for all
let player = prompt("Hello let\'s play rock paper scissors now pick your poision")
function getPlayerChoice(x){
    let cap = x.toUpperCase()
    let remaining = cap.slice(1)
    let lowerCase = remaining.toLowerCase(1)
    let firstLetter = cap.charAt()
    playerInput = firstLetter + lowerCase
    return playerInput*/

