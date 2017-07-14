//Class for cars
function Car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
}

var BMWx5 = new Car("BMW", "x5", "Black");

console.log(BMWx5);

//Basketball Player Class
function Players(Team, Position, Number) {
    this.Team = Team;
    this.Position = Position;
    this.Number = Number;
}

var jamesHarden = new Players("Rockets", "Point Guard", 13);

console.log(jamesHarden);


//Class for Dungeons and Dragons characters
function Character(Race, Background, Class){
    this.Race = Race;
    this.Background = Background;
    this.Class = Class;
}

var Maestro = new Character("Skeleton", "Servant", "Fighter");
var Evroul = new Character("Human", "Soldier", "Magus");

console.log(Maestro);
console.log(Evroul);