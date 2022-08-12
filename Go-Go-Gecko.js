//* Add game variables - Name of character - Obstacles etc.

//* The player will start the game by either hitting the space bar or the up arrow key

//* The player will need to jump over obstacle's while they move across the screen.

//? Need to add a timer and win loose message to the screen so the player will know the status of the game.

//? Need to setup how to win/lose:

//! The player will win by not hitting any obstacles for 15sec - this still needs to be added

//! The player will loose if they hit an obstacle.


// add character and object variables
//* Variables
const goGoGecko = document.querySelector('.character');
const cactus = document.querySelector('.object');
const alert = document.getElementById('game-over');
let score = 0;



//? Functions

//! set timer for score 
// this tracks how many secs have passed. If 3 seconds have passed it will add a score of 1 to the variable score.
setInterval(() => {
    score++
}, 3000);

// Add class list - animation class in css
// add player jump function 
function jump() {
    // this checks to see if the animation class is present = true
    if (goGoGecko.classList != 'animation') {
    }
    // if the above is true it adds the animation
    goGoGecko.classList.add('animation');
    // found how to get it to reset https://www.w3schools.com/jsref/met_win_settimeout.asp
    // then after the time allotted it removes the animation class.
    setTimeout(() => {
        goGoGecko.classList.remove('animation');
    }, 500);

};


// need to set up the hit detection 
const findHit = setInterval(function () {
    // this is returning the value of the top of the character
    let goGoGeckoTop =
        parseInt(window.getComputedStyle(goGoGecko).getPropertyValue('top'));
    // This is the objects moving from right to left and it is what gets the value of left by using the paresInt and then grabbing the css values using window.getComputedStyle
    let cactusLeft =
        parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    // This is what tells the computer that the two objects have hit each other. By checking their position on the canvas relative to each other.
    if (cactusLeft < 90 && cactusLeft > 0 && goGoGeckoTop >= 430) {
        // this removes the animation on contact with the character
        cactus.style.animation = "none";
        // this removes the item from the screen after contact with the character
        cactus.style.display = "none";
        // these add a popup to the H2 in html for player alert and set the color of the text. 
        alert.innerHTML = `Game Over! Your Score Was ${score}`;
        alert.style.color = 'red';
    }
}, 10);


// need to figure out the keys a bit more - https://developer.mozilla.org/en-US/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard
//! EventListeners 
// This listens for the spacebar to be pressed. Then invokes the jump function
addEventListener('keydown', (e) => {
    if (e.keyCode === 32) {
        jump()
    }
    e.preventDefault;
});


