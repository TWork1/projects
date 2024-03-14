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
    const tiles = document.querySelectorAll('div .item');
 
    const play = ()=>{
        const boardupdate = ()=>{
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
                if(touched === "item" && e.target.innerHTML === ''){
                    if(currentplayer === player1){
                        e.target.innerHTML = `${player1.getmarker()}`
                    }
                    else{e.target.innerHTML = 'wrong'}
                }
            }
        }
    return{boardupdate,boardchanges}
    }
    player1 = createplayer('John','X');
    player2 = createplayer ('Dax','O');
    console.log(player2)
    runit = play();
    tile = runit.boardupdate();

 })();
