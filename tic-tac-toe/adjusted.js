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

    //div --> Board interaction code local('global')
 
    const play = ()=>{
        const boardupdate = ()=>{
            const tiles = document.querySelectorAll('div .item');
            const tile = Array.from(tiles);
            const row1 = tile.slice(0,3);
            const row2 = tile.slice(3,6);
            const row3 = tile.slice(6,9);
            const board = [row1,row2,row3];
            console.log(board[0][0] === board[0][1])
            console.log(board[0][0].textContent===board[0][1].textContent)
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
                if(touched === "item" && e.target.innerHTML === ''){
                    if(currentplayer === player1){
                        e.target.innerHTML = `${player1.getmarker()}`
                        currentplayer = player2;
                    }
                    else{
                        e.target.innerHTML = `${player2.getmarker()}`
                        currentplayer = player1}
                }
                board = runit.boardupdate()
                console.log(board)
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
        const checkwinner =() =>{
            board = runit.boardupdate()

        }
    return{boardupdate,boardchanges,newboard,checkwinner}
    }
    player1 = createplayer('John','X');
    player2 = createplayer ('Dax','O');
    console.log(player2)
    runit = play();
    tile = runit.boardupdate();
 })();
