//Makes the prompt work
var prompt = require('prompt-sync')();

//Maps, attacks, and characters
var mashArray = ["Battlefield", "Mushroom Kingdom", "Saffron City", "Hyrule Castle"];
var firstQuestion = [1, 2];
var secondQuestion = ["Mario", "Link"];

//Function to ask the questions

function questions() {
    var answer1 = prompt('How many times will you strike? ' + "[" + firstQuestion + "] ");
    var answer2 = prompt('Who will you choose to fight?' + "[" + secondQuestion + "] ");
    var arena = Math.floor(Math.random() * mashArray.length);
    console.log('You strike ' + answer2 + " " + answer1 + " times at " + mashArray[arena] + " arena!");
}

//Here's the actual game
questions();
console.log('Too bad! Mewtoo wins! You lose!');

//Restarts the game
var playAgain = ["y", "n"];
var restart = prompt('Do you want to play again? ' + '[' + playAgain + '] ')

while (restart === playAgain[0]){
    questions();
    console.log('Too bad! Mewtoo wins! You lose!');
    restart = prompt('Do you want to play again? ' + '[' + playAgain + '] ')
}