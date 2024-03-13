const body = document.querySelector('body');
const gamescreen = document.createElement('div');
gamescreen.classList.add('mainboard');
body.appendChild(gamescreen);

const Gameboard = {gameboard:[1,2,3,4,5,6,7,8,9]};
const players = {one:'bob',two:'john'};

function createPlyer(player){
    const playername = player;
    console.log(playername)
}

