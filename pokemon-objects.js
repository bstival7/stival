//Prompt thing
prompt = require('prompt-sync')();

//Creates a pokemon.
function Pokemon(name, type, hp, atk, def, legendary){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.legendary = legendary;
}

//Nested array using a slass to create pokemon objects.
var roster = [new Pokemon("Charizard", "Fire", 78, 84, 78, false),
new Pokemon("Umbreon", "Dark", 95, 65, 110, false), 
new Pokemon("Decidueye", "Grass/Ghost", 78, 107, 75, false), 
new Pokemon("Wishiwashi", "Water", 45, 140, 130, false), 
new Pokemon("Lucario", "Fighting/Steel", 70, 110, 70, false), 
new Pokemon("Abomasnow", "Grass/Ice", 90, 92, 75, false)]

//Mo's pokemon, for bonus 4 & 5
var Squirtle = new Pokemon("Squirtle", "Water", 44, 65, 48, false);
var Blastoise = new Pokemon("Blastoise", "Water", 79, 100, 83, true);
var Metapod = new Pokemon("Metapod", "Bug", 50, 55, 20, false);
var Rattata = new Pokemon("Rattata", "Normal", 30, 35, 56, true);
var Raticate = new Pokemon("Raticate", "Normal", 55, 60, 81, true);
var Raichu = new Pokemon("Raichu", "Electric", 35, 40, 55, true);
roster2 = [Squirtle, Blastoise, Metapod, Rattata, Raticate, Raichu]


//Function to print the roster in the console.
function printRoster() {
    for (var i = 0; i<roster.length; i++){
        console.log(roster[i]);
    }
}

//Subtracts 10 HP from the pokemon
function pokemonAttacked() {
    for (var i = 0; i<roster.length; i++){
        roster[i].hp -= 10;
    }
}

//Takes user input to subtract HP from pokemon

//Uses user input to remove HP from the pokemon, also plays again
function pokemonAttacked() {
    var playAgain = "yes";
    var pokeChoose = Math.floor(Math.random() * roster.length);
    console.log('The opposing trainer sends out ' + roster[pokeChoose].name + "!");
    while(playAgain === "yes") {
        var dmg = prompt('How much damage do you inflict? ' );
        roster[pokeChoose].hp -= dmg;
        if (roster[pokeChoose].hp > 0) {
            console.log(roster[pokeChoose].name + ' took ' + dmg + ' damage and has ' + roster[pokeChoose].hp + ' health left!');
            playAgain = prompt("Would you like to attack again? [yes/no] ");
        }else {
            console.log('The enemy ' + roster[pokeChoose].name + ' has fainted!');
            playAgain = "no";
        }
    }
}

// Allows user to create pokemon 
// and add them to the array using prompts
function newPokemon() {
    var userName = prompt('Insert Pokemon name: ');
    var userType = prompt('Insert Pokemon type(s): ');
    var userHp = prompt('Insert Pokemon HP: ');
    var userAtk = prompt('Insert Pokemon ATK: ');
    var userDef = prompt('Insert Pokemon DEF: ');
    var userLegendary = prompt('Insert if Pokemon is legendary: [true/false] ');
    roster.push (new Pokemon(userName, userType, userHp, userAtk, userDef, userLegendary));
}

//Removes a random pokemon
function removePokemon() {
    var pokeChoose = Math.floor(Math.random() * roster.length);
    roster.splice(pokeChoose, 1);
}

//Uses 2 pokemon rosters to attack eachother
function pokemonBattle(pokemon1, pokemon2) {
    console.log(pokemon1.name + " vs. " + pokemon2.name);
    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
        pokemon1.hp -= Math.floor(pokemon2.atk/2);
        console.log(pokemon2.name + 'deals ' + Math.floor(pokemon2.atk/2) + " damage!" + pokemon1.name + " has " + pokemon1.hp + " health left!");
        pokemon2.hp -= Math.floor(pokemon1.atk/2);
        console.log(pokemon1.name + 'deals ' + Math.floor(pokemon1.atk/2) + " damage!" + pokemon2.name + " has " + pokemon2.hp + " health left!");
    }
    if (pokemon1.hp <= 0) {
        console.log (pokemon1.name + " has fainted! ");
    }else if (pokemon2.hp <= 0){
        console.log (pokemon2.name + " has fainted! ");
    }
}
// pokemonBattle(roster[1], roster2[2]);

//Determines a winner by comparing the sum of the 
//two pokemon's stats
function pokemonWinner(pokemon1, pokemon2){
    var stats1 = pokemon1.atk + pokemon1.hp + pokemon1.def;
    var stats2 = pokemon2.atk + pokemon2.hp + pokemon2.def;
    if (stats1 > stats2){
        console.log(pokemon1.name + " has the higher stats! They win! ");
    }else if (stats2 > stats1) {
        console.log(pokemon1.name + " has the higher stats! They win! ");
    }else if (stats2 === stats1) {
        console.log("Both stats are equal! It's a tie! ");
    }
}
//pokemonWinner(roster[2],roster2[3]);
