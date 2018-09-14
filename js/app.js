// let theme = new Audio('../sounds/linkintheme.mp3');

// theme.play();


// const player = url('.//images/player1.png');


let left = document.querySelector('#left');
let right = document.querySelector('#right');
const header = document.querySelector(`.game__header`);
let index = 0;
let interval = 0;
const trees = ['1set.png', '2set.png', '3set.png', '4set.png', '5set.png'];

const gameover = false;



let imageChange = function () {

    if(index >= trees.length){
        index = 0;
        interval++;
    }
    left.style.backgroundImage = 'url(../images/'+trees[index]+')';
    right.style.backgroundImage = 'url(../images/'+trees[index]+')';
    
    if( interval >= 2) {
        clearInterval(tree);
    } else {
        index++;
    }
}

let tree = setInterval(imageChange, 150);


