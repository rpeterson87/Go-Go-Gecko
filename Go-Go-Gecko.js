//* Add game variables - Name of character - Obstacles etc.

//* The player will start the game by either hitting the space bar or the up arrow key

//* The player will need to jump over obstacle's while they move across the screen.

//? Need to add a timer and win loose message to the screen so the player will know the status of the game.

//? Need to setup how to win/lose:

//! The player will win by not hitting any obstacles for 15sec

//! The player will loose if they hit an obstacle.


// add character and object variables
//* Variables
const goGoGecko = document.querySelector('.character');
const object = document.querySelector('.object');
// const gameOver = document.querySelector('.game-over');
const alert = document.getElementById('game-over')
let score = 0;
// let myElm = document.createElement('p')
// let gameEnd = false;


//! set timer for score 
// setTimeout(()=> {
//     score++
setInterval(() => {
    score++
}, 3000)
// },1000);

// add player jump function 
// Add class list - 
//? Functions

function jump() {
    if (goGoGecko.classList != 'animation') {
    }
    goGoGecko.classList.add('animation');
    // found how to get it to reset https://www.w3schools.com/jsref/met_win_settimeout.asp
    setTimeout(() => {
        goGoGecko.classList.remove('animation');
        // score++;
    }, 500);

}


// function randomObject() {
//     let randomTime = Math.random() * 3000
//     let obstaclePosition = 980;
//     object.document.createElement('div')
//     if (!alert) object.classList.add('object')
//     game.appendChild('object')
//     object.style.left = obstaclePosition + randomTime
// }

// need to set up the hit detection 
const findHit = setInterval(function () {
    // this is returning the value of the top of the character
    let goGoGeckoTop =
        parseInt(window.getComputedStyle(goGoGecko).getPropertyValue('top'))
    // This is the objects moving from right to left and it is what gets the value of left by using the paresInt and then grabbing the css values using window.getComputedStyle
    let objectLeft =
        parseInt(window.getComputedStyle(object).getPropertyValue('left'))
    // This is what tells the computer that the two objects have hit each other. By checking their position on the canvas relative to each other.
    if (objectLeft < 90 && objectLeft > 0 && goGoGeckoTop >= 430) {
        // this removes the animation on contact with the character
        object.style.animation = "none";
        // this removes the item from the screen after contact with the character
        object.style.display = "none";
        console.log(object.style)
        // these add a popup to the H2 in html for player alert and set the color of the text. 
        alert.innerHTML = `Game Over! Your Score was ${score}`
        alert.style.color = 'red'
    }

}, 10);


// function gameOver (){
//     document.querySelector('.game-over').style.display = 'none';
// }

// need to figure out the keys a bit more - https://developer.mozilla.org/en-US/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard
//! EventListeners 
addEventListener('keydown', (e) => {
    if (e.keyCode === 32) {
        jump()
    }
    e.preventDefault
});


