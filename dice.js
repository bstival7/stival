//A function for Dungeons and Dragons dice rolling
//Takes in account of # of sides on the dice
//Also uses player modifiers

//Gets input for the dice-sides & modifiers
var prompt = require('prompt-sync')();
var sides = prompt('How many sides on your side? i.e 4, 6, 8, 10, 12, 20. ');
var mod = prompt('Input your modifier: ');

function diceRoll(){
    return(Math.floor(Math.random()*sides)+ 1 + mod);
}

console.log("You rolled a " + diceRoll() +"!");
