// Welcome to Bernardo's Boujee Bodega
// Where everything is $100 or more

//In this person's hero adventure campaign
//the hero enters my bodega and has to spend 
//all his money before continuing.
//He has to buy as much supplies as his money can buy.

//Allows to use prompt
var prompt = require('prompt-sync')();

var money = 1000;
var name = prompt("What's your name? ");

while (money > 0) {
    var item = prompt("What do you want to buy? ");
    console.log("You purchased the " + item);
    money -= 100;
    console.log("You have " + money + " left to spend!");
}

console.log("Thank you for shopping at the Boujee Bodega!");
