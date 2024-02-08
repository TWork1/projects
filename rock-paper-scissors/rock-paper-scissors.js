// Generate random Rock, Paper, or Scissors for Computer
function getComputerChoice() {

n = Math.floor(Math.random() * 100)
    let ComputerOutput;
    if (33 >= n){
        ComputerOutput = "Rock"
    }
    else if (n <= 66){
        ComputerOutput = "Scissors"
    }
    else {
        ComputerOutput = "Paper"
    }
    return ComputerOutput
}
//Ask player for input and force lowercase for all
let player = prompt("Hello let\'s play rock paper scissors now pick your poision")
function getPlayerAction(x){
    let cap = x.toUpperCase()
    let remaining = cap.slice(1)
    let lowerCase = remaining.toLowerCase(1)
    let firstLetter = cap.charAt()
    return firstLetter + lowerCase
}
console.log(getPlayerAction(player))


