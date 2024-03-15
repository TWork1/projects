(function (){

 const createplayer = (name, marker)=> {
    let score = 0
    const getname = () => name = name;
    const getmarker = () => marker = marker;
    const getscore = () => score
    const givepoint = ()=> score++
    const resetscore = () =>score = 0
    const getinfo = () => `${name}, ${marker}`
    return{givepoint,getscore,resetscore,getname,getmarker,getinfo}}
    const body = document.querySelector('body')
    const play = ()=>{
        const boardupdate = ()=>{
            const tiles = document.querySelectorAll('div .item');
            const tile = Array.from(tiles);
            const row1 = tile.slice(0,3);
            const row2 = tile.slice(3,6);
            const row3 = tile.slice(6,9);
            const board = [row1,row2,row3];
            return board

        }
        const boardchanges = ()=>{
            function turns(){
                currentplayer = player1;
                return currentplayer
            }
            turns()
            document.onclick = function (e){
                touched = e.target.className
                board = runit.boardupdate()
                 if (touched === "item" && e.target.innerHTML === ''){
                    if(currentplayer === player1){
                        e.target.innerHTML = `${player1.getmarker()}`
                        e.target.id =`${player1.getname()}`
                        if(board[0][0].id === board[0][1].id &&
                            board[0][0].id === board[0][2].id ||
                            board[1][0].id === board[1][1].id &&
                            board[1][0].id === board[1][2].id ||
                            board[2][0].id === board[2][1].id &&
                            board[2][0].id === board[2][2].id ||
                            board[0][0].id === board[1][0].id &&
                            board[0][0].id === board[2][0].id ||
                            board[0][1].id === board[1][1].id &&
                            board[0][1].id === board[2][1].id ||
                            board[0][2].id === board[1][2].id &&
                            board[0][2].id === board[2][2].id ||
                            board[0][0].id === board[1][1].id &&
                            board[0][0].id === board[2][2].id ||
                            board[0][2].id === board[1][1].id &&
                            board[0][2].id === board[2][0].id){
                                runit.newboard();
                                winner = `winner is ${currentplayer.getname()}`
                                currentplayer.givepoint()
                                plays = currentplayer.getscore()
                                document.querySelector('.player1').textContent = plays
                                console.log(winner)
                                return 
                            }
                        currentplayer = player2;
                    }
                    else{
                        e.target.innerHTML = `${player2.getmarker()}`
                        e.target.id =`${player2.getname()}`
                        if(board[0][0].id === board[0][1].id &&
                            board[0][0].id === board[0][2].id ||
                            board[1][0].id === board[1][1].id &&
                            board[1][0].id === board[1][2].id ||
                            board[2][0].id === board[2][1].id &&
                            board[2][0].id === board[2][2].id ||
                            board[0][0].id === board[1][0].id &&
                            board[0][0].id === board[2][0].id ||
                            board[0][1].id === board[1][1].id &&
                            board[0][1].id === board[2][1].id ||
                            board[0][2].id === board[1][2].id &&
                            board[0][2].id === board[2][2].id ||
                            board[0][0].id === board[1][1].id &&
                            board[0][0].id === board[2][2].id ||
                            board[0][2].id === board[1][1].id &&
                            board[0][2].id === board[2][0].id){
                                runit.newboard();
                                winner = `winner is ${currentplayer.getname()}`
                                currentplayer.givepoint()
                                plays = currentplayer.getscore()
                                document.querySelector('.player2').textContent = plays
                                console.log(winner)
                                return}
                        currentplayer = player1}
                    
                }
                
            }
        }
        const newboard =()=>{
            const mainboard = document.querySelector('.mainboard');
            while (document.querySelector('.mainboard').firstChild){
                document.querySelector('.mainboard').firstChild.remove()
            }
            for(i=0; i<9 ;i++){
                const newtile = document.createElement('div');
                newtile.classList.add('item')
                newtile.id = `${i+1}`
                mainboard.appendChild(newtile)
            }
            
        }
    return{boardupdate,boardchanges,newboard,}
    }
    player1 = createplayer('John','X');
    player2 = createplayer ('Dax','O');
    console.log(player2)
    runit = play();
    runit.boardchanges()
 })();
 const reset = document.querySelector('BUTTON')
        reset.addEventListener('click', newboard =()=>{
            const mainboard = document.querySelector('.mainboard');
            while (document.querySelector('.mainboard').firstChild){
                document.querySelector('.mainboard').firstChild.remove()
            }
            for(i=0; i<9 ;i++){
                const newtile = document.createElement('div');
                newtile.classList.add('item')
                newtile.id = `${i+1}`
                mainboard.appendChild(newtile)
            }
            
        })