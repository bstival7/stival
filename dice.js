//A function for Dungeons and Dragons dice rolling
//Takes in account of # of sides on the dice
//Also uses player modifiers
function diceRoll(num){
    return(Math.floor(Math.random()*num)+1);
}
var x = 10;

console.log("You rolled a "+(diceRoll(20)+x)+"!");
