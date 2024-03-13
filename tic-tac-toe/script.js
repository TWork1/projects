const gameBoard = [
    {
        A: 'x',
        B: 'j',
        C: 'j'
    },
    {
        A: 'x',
        B: 'j',
        C: 'x'
    },
    {
        A: 'j',
        B: 's',
        C: 's'
    }
]
const players =[
    {
        player:'player1',
        marker:'x'
    },
    {
        player:'player2',
        marker:'o'
    }
]

const body = document.querySelector('body');
const gamescreen = document.createElement('div');
gamescreen.classList.add('mainboard')
body.appendChild(gamescreen);

currentPlayer = ()=>{
    if(player = players[0].player){
        mark = players[0].marker;
    }
    else{
        mark = players[1].marker;
    }
}

tiles = ()=>{
    start =()=>{
    for(i=0; i<gameBoard.length;i++){
        const firstCollumn = document.createElement('div')
        firstCollumn.classList.add('tile')
        firstCollumn.textContent = gameBoard[i].A
        

        const secondCollumn = document.createElement('div')
        secondCollumn.textContent = gameBoard[i].B
        secondCollumn.classList.add('tile')
        

        const thirdCollumn = document.createElement('div')
        thirdCollumn.textContent = gameBoard[i].C
        thirdCollumn.classList.add('tile')
        
    
        gamescreen.appendChild(firstCollumn)
        gamescreen.appendChild(secondCollumn)
        gamescreen.appendChild(thirdCollumn)
}}
    winner = ()=>{
        if(
        ((gameBoard[0].A == gameBoard[0].B) && (gameBoard[0].A == gameBoard[0].C))|| 
        ((gameBoard[0].A == gameBoard[1].B) && (gameBoard[0].A == gameBoard[2].C))||
        ((gameBoard[0].A == gameBoard[1].A) && (gameBoard[0].A == gameBoard[2].A))||
        ((gameBoard[0].B == gameBoard[1].B) && (gameBoard[0].B == gameBoard[2].B))||
        ((gameBoard[0].C == gameBoard[1].C) && (gameBoard[0].C == gameBoard[2].C))||
        ((gameBoard[1].A == gameBoard[1].B) && (gameBoard[1].A == gameBoard[1].C))||
        ((gameBoard[2].A == gameBoard[2].B) && (gameBoard[2].A == gameBoard[2].C))||
        ((gameBoard[0].C == gameBoard[1].B) && (gameBoard[0].C == gameBoard[2].A)))
        {
            return console.log('yes')
        }
        return console.log('no')

} 
return {winner,start} 
}

