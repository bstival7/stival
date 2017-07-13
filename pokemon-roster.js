//Array of 6 pokemon and their type, HP, ATK, DEF, and if they're legendary
pokemonArray = [["Charizard", "Fire", 78, 84, 78, false], ["Umbreon", "Dark", 95, 65, 110, false], ["Decidueye", "Grass/Ghost", 78, 107, 75, false],  ["Wishiwashi", "Water", 45, 140, 130, false], ["Lucario", "Fighting/Steel", 70, 110, 70, false], ["Abomasnow", "Grass/Ice", 90, 92, 75, false]];

//A string that will be used later
print = "";

//Prints the pokemon & their stats
for (var i = 0; i < 6; i++) {
    for (var x = 0; x < 5; x++) {
        print += pokemonArray[i][x];
        if (x<5) {
            print += " > ";
        }
    }
    print += "Legendary: " + pokemonArray[i][5]
    console.log("#" + (i+1) + " " + print);
    print = "";
}