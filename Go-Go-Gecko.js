//* Add game variables - Name of character - Obstacles etc.

//* The player will start the game by either hitting the space bar or the up arrow key

//* The player will need to jump over obstacle's while they move across the screen.

//? Need to add a timer and win loose message to the screen so the player will know the status of the game.

//? Need to setup how to win/lose:

//! The player will win by not hitting any obstacles for 15sec

//! The player will loose if they hit an obstacle.



//* Variables
const goGoGecko = document.querySelector('.character');
console.log(goGoGecko)
const object = document.querySelector('.object');
console.log(object)

//? Functions
// Add class list  
function jump (){
    goGoGecko.classList.add('animation');
}



//! EventListeners 
addEventListener ('keydown', (e) =>{
    console.log(e)
})