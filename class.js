//A function that creates the class, "pokemon," to be used later
function pokemon(HP, ATK, Type, Legendary) {
    this.HP = HP;
    this.ATK = ATK;
    this.Type = Type;
    this.Legendary = Legendary;
}

//Charizard object
var charizard = new pokemon(225, "Blaze", "Fire/Flying", false);

console.log (charizard.Type);