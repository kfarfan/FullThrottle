// let theme = new Audio('../sounds/linkintheme.mp3');

// theme.play();


// const player = url('.//images/player1.png');


let left = document.querySelector('#left');
let right = document.querySelector('#right');
const header = document.querySelector(`.game__header`);
let index = 0;
let interval = 0;
const trees = ['1set.png', '2set.png', '3set.png', '4set.png', '5set.png'];
const player = document.querySelector('.player');
player.style.backgroundImage = `url(../images/player1.png)`;
let moves = 200;
const gameover = false;



let imageChange = function () {

    if(index >= trees.length){
        index = 0;
        interval++;
    }
    left.style.backgroundImage = `url(../images/${trees[index]})`;
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
        moves-=50;
        player.style.marginLeft = ''+moves+'px';
        }
    if(e.keyCode == '39' && moves !== 400){
         moves+=50;
         player.style.marginLeft = ''+moves+'px';
         }
}

document.addEventListener('keydown', playerMoves);


// let theme = new Audio('../sounds/linkintheme.mp3');

// theme.play();
