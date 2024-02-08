// Generate random Rock, Paper, or Scissors for Computer




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
    let answer = prompt("Welcome loser! get ready for ROCK, PAPER, SCISSORS! NOW PICK")
    function playerSelection(x){
    let cap = x.toUpperCase()
    let remaining = cap.slice(1)
    let lowerCase = remaining.toLowerCase(1)
    let firstLetter = cap.charAt()
    return playerInput = firstLetter + lowerCase
    }
    "Rock">"Scissors"
    "scissors"> "Paper"
    "Paper">"Rock"
    let winner;
    if  (playerSelection(answer)> getComputerChoice()){
        winner = "congrats on your victory loser"
    } else if (playerSelection(answer)< getComputerChoice()){
        winner = "Sucks to be a loser doesn\'t it?"
    } else{
        winner = "lucky tie loser"
    }

    return winner
}

console.log(playRound());