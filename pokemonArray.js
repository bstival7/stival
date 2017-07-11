/*Roster*/
var myPokemonRoster = ["Decidueye","Emboar","Dialga","Buizel","Pikachu"];

//Battle Order//
var firstToBattle = myPokemonRoster[0];
var secondToBattle = myPokemonRoster[1];

/*Challenge*/
myPokemonRoster.pop();
myPokemonRoster.push("Blastoise");

/* Bonus 3: Remove these brackets to show the else in the if-else statement
        myPokemonRoster.push("Infernape");
*/

var rosterSize = myPokemonRoster.length;

console.log(rosterSize);
if (rosterSize=5) { //Bonus 2
    for (var i = 0; i<rosterSize; i++){
    console.log(myPokemonRoster[i]);
    }
}else{
    console.log("You Can’t Play! Wrong number of Pokemon!");
}

/*Bonus 1
for (var i = 4; i>=0; i--){
    console.log(myPokemonRoster[i]);
}
*/