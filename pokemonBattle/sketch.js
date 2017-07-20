function setup(){
    var cnv = createCanvas(windowWidth,windowHeight);
    background('black');
    var screen = rect(100, 100, 400, 400);
    rect(100, 520, 200, 50); //Punch
    rect(300, 520, 200, 50); //Kick
    fill(r,g,b);
    ellipse(200, 400, 100, 100);
    fill(g,b,r);
    ellipse(400, 200, 100, 100);
    fill('white');
    text(pokemon1.name, 175, 400);
    text(pokemon1.hp + " HP", 190, 420);
    text(pokemon2.name, 375, 200);
    text(pokemon2.hp + " HP", 390, 220);
    fill('black');
    textSize(30);
    textStyle(BOLD);
    text("Punch", 160, 560);
    text("Kick", 365, 560);
    cnv.mouseClicked(damage);
}

//Random Color
var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);

//Class for creating Pokemon
function Pokemon(name, type, hp, atk, def, legendary){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.legendary = legendary;
}

//Array of Pokemon objects
var roster = [new Pokemon("Charizard", "Fire", 78, 84, 78, false),
new Pokemon("Umbreon", "Dark", 95, 65, 110, false), 
new Pokemon("Decidueye", "Grass/Ghost", 78, 107, 75, false), 
new Pokemon("Wishiwashi", "Water", 45, 140, 130, false), 
new Pokemon("Lucario", "Fighting/Steel", 70, 110, 70, false), 
new Pokemon("Abomasnow", "Grass/Ice", 90, 92, 75, false)]

//Two Random Pokemon from the roster array
var pokemon1 = roster[Math.floor(Math.random()*roster.length)];
var pokemon2 = roster[Math.floor(Math.random()*roster.length)];

//Function for calculating damage
var dmg;
var spdmg;
var dmg2;
var spdmg2;
function atk1(){
    if (pokemon2.hp >= 0 && pokemon1.hp >=0){
        dmg = Math.floor((pokemon1.atk/2)-(pokemon2.def/5));
        pokemon2.hp -= dmg;
    }
    if (pokemon2.hp >= 0 && pokemon1.hp >=0){
        dmg2 = Math.floor((pokemon2.atk/2)-(pokemon1.def/5));
        pokemon1.hp -= dmg2;
    }
    if (pokemon2.hp <= 0){
        alert("You win!");
    }else if (pokemon1.hp <= 0){
        alert("You lose!");
    }
}

function atk2(){
    if (pokemon2.hp >= 0 && pokemon1.hp >=0){
        spdmg = Math.floor((pokemon1.atk/2)-(pokemon2.def/4));
        pokemon2.hp -= spdmg;
    }
    if (pokemon2.hp >= 0 && pokemon1.hp >=0){
        spdmg2 = Math.floor((pokemon2.atk/2)-(pokemon2.def/4));
        pokemon1.hp -= spdmg2;
    }
    if (pokemon2.hp <= 0 ){
        alert("You win!");
    }else if (pokemon1.hp <= 0){
        alert("You lose!");
    }
}

//Function for dealing damage
function damage(){
    if (mouseX >= 100 && mouseX < 300 && mouseY >= 520 && mouseY <= 570){
        atk1();
        alert("The enemy " + pokemon2.name + " has taken " + dmg + " dmg! They have " + pokemon2.hp + " HP remaining!");
        if (pokemon2.hp >= 0 && pokemon1.hp >=0){
            alert("The enemy " + pokemon2.name + " has dealt " + dmg2 + " dmg! You have " + pokemon1.hp + " HP remaining!");
        }
        fill(r,g,b);
        ellipse(200, 400, 100, 100);
        fill(g,b,r);
        ellipse(400, 200, 100, 100);
        fill('white');
        textSize(12);
        textStyle(NORMAL);
        text(pokemon1.name, 175, 400);
        text(pokemon1.hp + " HP", 190, 420);
        text(pokemon2.name, 375, 200);
        text(pokemon2.hp + " HP", 390, 220);
    }else if(mouseX >= 300 && mouseX < 500 && mouseY >= 520 && mouseY <= 570){
        atk2();
        alert("The enemy " + pokemon2.name + " has taken " + spdmg + " dmg! They have " + pokemon2.hp + " HP remaining!");
        if (pokemon2.hp >= 0 && pokemon1.hp >=0){
            alert("The enemy " + pokemon2.name + " has dealt " + spdmg2 + " dmg! You have " + pokemon1.hp + " HP remaining!");
        }
        fill(r,g,b);
        ellipse(200, 400, 100, 100);
        fill(g,b,r);
        ellipse(400, 200, 100, 100);
        fill('white');
        textSize(12);
        textStyle(NORMAL);
        text(pokemon1.name, 175, 400);
        text(pokemon1.hp + " HP", 190, 420);
        text(pokemon2.name, 375, 200);
        text(pokemon2.hp + " HP", 390, 220);
    }
}