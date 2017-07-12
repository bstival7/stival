//Chooses a random person from a list

var people = ["Bernardo", "Chris", "Will", "Edgar", "Faisal", "coolnick247"];

function randomWinner(index){
    var randomIndex = math.random()+index;
    var result = Math.floor(randomIndex);
    return result;
}

console.log(people[randomWinner(people.length)]);