// Generate random Rock, Paper, or Scissors for Computer
w = 0;
l = 0;
t = 0;
q = 0;
/*Create a loop that lasts five rounds*/
for (let i = 0; i < 5; i++){
    /*Functonal code for actual game in background*/
    function playRound(){
        /*generate a number value from 1-100 and turn it into text RPS*/
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
        computerSelection = getComputerChoice();
        
        let answer = prompt("Welcome loser! get ready for ROCK, PAPER, SCISSORS! NOW PICK")
        
        /*Using prompt x change the first letter to be capitalized*/
        function playerSelection(x){
            let cap = x.toUpperCase()
            let remaining = cap.slice(1)
            let lowerCase = remaining.toLowerCase(1)
            let firstLetter = cap.charAt()
        return playerInput = firstLetter + lowerCase
        }

         /*Take value from the capitalization function and turn it into a variable*/
        playerInput = playerSelection(answer);
        
        let winner;
        
        /* Makes conditions for winning losing and tieing, gives a "response" and keeps score*/
        /*extra code for fun if RPS is not entered*/
        
        if  (playerInput === "Rock" && computerSelection === "Scissors" ||
        playerInput === "Paper" && computerSelection === "Rock" ||
        playerInput === "Scissors" && computerSelection === "Paper"){
            winner = `congrats on your victory loser, you picked ${playerSelection(answer)} and I picked ${computerSelection}`
            ++w;
        } else if (playerInput === "Paper" && computerSelection === "Scissors" ||
        playerInput === "Scissors" && computerSelection === "Rock" ||
        playerInput === "Rock" && computerSelection === "Paper"){
            winner = `Sucks to be a loser doesn\'t it? you picked ${playerSelection(answer)} and I picked ${computerSelection}`
            ++l;
        } else if(playerInput === "Paper" && computerSelection === "Paper" ||
        playerInput === "Scissors" && computerSelection === "Scissors" ||
        playerInput === "Rock" && computerSelection === "Rock"){
            winner = `lucky tie loser, you picked ${playerSelection(answer)} and I picked ${computerSelection}`
            ++t;
        }else{
            winner = alert("STOP THESE DISGUSTING ATTEMPTS TO BREAK MY BELOVID CODE")
        }
        /*create a way to dictate final outcome through a scoreboard*/
        scoreboard = w - l;
        if (scoreboard > 0){
            response = "Dang I guess you can't really be called a loser anymore huh?"
        }else if(scoreboard < 0){
            response ="Well well well, if it isn\'t the greatest of losers in the flesh HA!"
        }else if(scoreboard>1){
            response = "Welp to bad for you I still think you\'re a loser *cough* *cough even if it is just a tie"
        }
        return  winner
        

    }
    console.log(playRound())
}
/*generate response using values given in the loop once loop finishes*/
alert(`five rounds done now whats the outcome? ${w},${l},${t}. ${response}`)
