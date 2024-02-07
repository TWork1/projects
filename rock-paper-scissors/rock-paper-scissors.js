
function getComputerChoice() {

n = Math.floor(Math.random() * 100)
    console.log(n)
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
console.log(getComputerChoice())
