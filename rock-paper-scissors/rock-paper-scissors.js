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
let player = prompt("Hello let\'s play rock paper scissors now pick your poision")
Tester = player.toLowerCase()
console.log(Tester);


