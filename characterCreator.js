//Takes user input to create a character from D&D

function Stats (name, strength, dexterity, constitution, intelligence, wisdom, charisma){
    this.name=name;
    this.strength=strength;
    this.dexterity=dexterity;
    this.constitution=constitution;
    this.intelligence=intelligence;
    this.wisdom=wisdom;
    this.charisma=charisma;
}


console.log("Fill in the following questions to get your skills");

function newCharacter(){
    var name = prompt("Enter your name: ");
    var str = prompt("What is your Strength? ");
    var dex = prompt("What is your Dexterity? ");
    var con = prompt("What is your Constitution? ");
    var int = prompt("What is your Intelligence? ");
    var wis = prompt("What is your Wisdom? ");
    var cha = prompt("What is your Charisma? ");
    console.log("Here are your modifiers: ");
    
}

