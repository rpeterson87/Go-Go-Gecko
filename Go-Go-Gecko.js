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
console.log(goGoGecko)
const object = document.querySelector('.object');
console.log(object)


// add player jump function 
// Add class list - 
//? Functions

function jump() {
    if (goGoGecko.classList != 'animation'){
    }
        goGoGecko.classList.add('animation');
        // found how to get it to reset https://www.w3schools.com/jsref/met_win_settimeout.asp
    setTimeout(() => {
        goGoGecko.classList.remove('animation');
        
    }, 500);
     
}

// need to set up the hit detection 
const findHit = setInterval(function(){
    let goGoGeckoTop =
    parseInt(window.getComputedStyle(goGoGecko).getPropertyValue('top'))
    let objectLeft =
    parseInt(window.getComputedStyle(object).getPropertyValue('left'))
    console.log(objectLeft)
    if(objectLeft <10 && objectLeft>0 && goGoGeckoTop>=400){
        object.style.animation = "none";
        object.style.display = "none";
    }   

},10);


// need to figure out the keys a bit more - https://developer.mozilla.org/en-US/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard
//! EventListeners 
addEventListener('keydown', (e) => {
    console.log(e)
    jump()
    e.preventDefault
})
