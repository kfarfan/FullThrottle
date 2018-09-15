// let theme = new Audio('../sounds/linkintheme.mp3');

// theme.play();


// const player = url('.//images/player1.png');


let left = document.querySelector('#left');
let right = document.querySelector('#right');
const header = document.querySelector(`.game__header`);
let index = 0;
let interval = 0;
const track = document.querySelector('#road');
const trees = ['1set.png', '2set.png', '3set.png', '4set.png', '5set.png'];
const tracks = ['track1.png', 'track2.png', 'track3.png', 'track4.png', 'track5.png'];
const player = document.querySelector('.player');
player.style.backgroundImage = `url(../images/player1.png)`;
let moves = 200;

let npc = document.querySelector('#npc');

let npcMarginTop = 0;
const gameover = false;



let imageChange = function () {

    if(index >= trees.length){
        index = 0;
        interval++;
    }
    left.style.backgroundImage = `url(../images/${trees[index]})`;
    track.style.backgroundImage = `url(../images/${tracks[index]})`;
    right.style.backgroundImage = `url(../images/${trees[index]})`;
    
    if(gameover) {
        clearInterval(tree);
    } else {
        index++;
    }
}


let tree = setInterval(imageChange, 150);



let playerMoves = function playerMove (e) {
    if(e.keyCode == '37' && moves !== 0){
        moves-=100;
        player.style.marginLeft = ''+moves+'px';
        }
    if(e.keyCode == '39' && moves !== 400){
         moves+=100;
         player.style.marginLeft = ''+moves+'px';
         }
}

// create function to move npc down
let npcMove =  () => {
    if(npcMarginTop !== 300){
        npcMarginTop+= 20;
    }
    npc.style.marginTop = ''+npcMarginTop+'px';
    if(gameOver){
        clearInterval(npcDriving);
    }
    
}

let npcDriving = setInterval(npcMove, 100);



document.addEventListener('keydown', playerMoves);


// let theme = new Audio('../sounds/linkintheme.mp3');

// theme.play();
