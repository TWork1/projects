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
    {marker:'x'},
    {marker:'o'}
]
const body = document.querySelector('body');
const gamescreen = document.createElement('div');
gamescreen.classList.add('mainboard')
body.appendChild(gamescreen);


tiles = ()=>{
    for(i=0; i<gameBoard.length;i++){
        const firstCollumn = document.createElement('div')
        firstCollumn.classList.add('tile')
        firstCollumn.textContent = gameBoard[i].A
        firstCollumn.addEventListener('click',()=>{
        firstCollumn.style.backgroundColor = 'red'
        })

        const secondCollumn = document.createElement('div')
        secondCollumn.textContent = gameBoard[i].B
        secondCollumn.classList.add('tile')
        secondCollumn.addEventListener('click',()=>{
        secondCollumn.style.backgroundColor = 'red'
        })

        const thirdCollumn = document.createElement('div')
        thirdCollumn.textContent = gameBoard[i].C
        thirdCollumn.classList.add('tile')
        thirdCollumn.addEventListener('click',()=>{
        thirdCollumn.style.backgroundColor = 'red'
        })
    
        gamescreen.appendChild(firstCollumn)
        gamescreen.appendChild(secondCollumn)
        gamescreen.appendChild(thirdCollumn)
}
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
return {winner}

}
tit = tiles();

play = ()=>{
    if((gameBoard[1].A === gameBoard[1].B) && (gameBoard[1].A === gameBoard[1].C)){
      
        const winner = document.createElement('p')
        winner.textContent = 'you won';
        body.appendChild(winner);
    }
    else{
        const winner = document.createElement('p')
        winner.textContent = 'no';
        body.appendChild(winner);
    }
}
