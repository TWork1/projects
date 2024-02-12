// Generate random Rock, Paper, or Scissors for Computer
w = 0;
l = 0;
t = 0;
q = 0;
scoreboard = 0



const words = document.querySelector('.words');
const btn1  = document.querySelector('.btn1');
btn1.addEventListener('click',rockPlayRound)
const btn2  = document.querySelector('.btn2');
btn2.addEventListener('click',paperPlayRound)
const btn3  = document.querySelector('.btn3');
btn3.addEventListener('click',scissorsPlayRound)

function rockPlayRound(x) {
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

    x = "Rock"
    if  (x === "Rock" && computerSelection === "Scissors" ||
    x === "Paper" && computerSelection === "Rock" ||
    x === "Scissors" && computerSelection === "Paper"){
        winner = `congrats on your victory loser, you picked ${x} and I picked ${computerSelection}`
        ++w;
    } else if (x === "Paper" && computerSelection === "Scissors" ||
    x === "Scissors" && computerSelection === "Rock" ||
    x === "Rock" && computerSelection === "Paper"){
        winner = `Sucks to be a loser doesn\'t it? you picked ${x} and I picked ${computerSelection}`
        ++l;
    } else if(x === "Paper" && computerSelection === "Paper" ||
    x === "Scissors" && computerSelection === "Scissors" ||
    x === "Rock" && computerSelection === "Rock"){
        winner = `lucky tie loser, you picked ${x} and I picked ${computerSelection}`
        ++t;
    }else{
        winner = "STOP THESE DISGUSTING ATTEMPTS TO BREAK MY BELOVID CODE"
    }
   
    /*create a way to dictate final outcome through a scoreboard*/
    const content = document.createElement('p')
    content.classList.add('text')
    content.textContent =  content.textContent = `${winner} ---- Score (${w},${l},${t})`
    words.appendChild(content)
    return 
}
function paperPlayRound(x) {
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

    x = "Paper"
    if  (x === "Rock" && computerSelection === "Scissors" ||
    x === "Paper" && computerSelection === "Rock" ||
    x === "Scissors" && computerSelection === "Paper"){
        winner = `congrats on your victory loser, you picked ${x} and I picked ${computerSelection}`
        ++w;
    } else if (x === "Paper" && computerSelection === "Scissors" ||
    x === "Scissors" && computerSelection === "Rock" ||
    x === "Rock" && computerSelection === "Paper"){
        winner = `Sucks to be a loser doesn\'t it? you picked ${x} and I picked ${computerSelection}`
        ++l;
    } else if(x === "Paper" && computerSelection === "Paper" ||
    x === "Scissors" && computerSelection === "Scissors" ||
    x === "Rock" && computerSelection === "Rock"){
        winner = `lucky tie loser, you picked ${x} and I picked ${computerSelection}`
        ++t;
    }else{
        winner = "STOP THESE DISGUSTING ATTEMPTS TO BREAK MY BELOVID CODE"
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
    const content = document.createElement('p')
    content.classList.add('text')
    content.textContent =  content.textContent = `${winner} ---- Score (${w},${l},${t})`
    words.appendChild(content)
    return  
}
function scissorsPlayRound(x) {
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

    x = "Scissors"
    if  (x === "Rock" && computerSelection === "Scissors" ||
    x === "Paper" && computerSelection === "Rock" ||
    x === "Scissors" && computerSelection === "Paper"){
        winner = `congrats on your victory loser, you picked ${x} and I picked ${computerSelection}`
        ++w;
    } else if (x === "Paper" && computerSelection === "Scissors" ||
    x === "Scissors" && computerSelection === "Rock" ||
    x === "Rock" && computerSelection === "Paper"){
        winner = `Sucks to be a loser doesn\'t it? you picked ${x} and I picked ${computerSelection}`
        ++l;
    } else if(x === "Paper" && computerSelection === "Paper" ||
    x === "Scissors" && computerSelection === "Scissors" ||
    x === "Rock" && computerSelection === "Rock"){
        winner = `lucky tie loser, you picked ${x} and I picked ${computerSelection}`
        ++t;
    }else{
        winner = "STOP THESE DISGUSTING ATTEMPTS TO BREAK MY BELOVID CODE"
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
    const content = document.createElement('p')
    content.classList.add('text')
    content.textContent = `${winner} ---- Score (${w},${l},${t})`
    words.appendChild(content)
    return  
    
}