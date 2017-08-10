const choice = ["rock", "paper", "scissors"];
let playerChoice = choice[0];
const computerChoice = choice[Math.floor(Math.random() * 3)];

if (computerChoice === playerChoice) {
    console.log("You tied!");
}else if(computerChoice === choice[0]){//If computer chooses rock
    if(playerChoice = "paper"){//If player chooses paper
        console.log("Your paper covers the rock! You win!");
    }else{//if player chooses scissors
        console.log("Your scissors get broken by the rock! You lose!");
    }
}else if(computerChoice === choice[1]){//if computer chooses paper
    if(playerChoice === "rock"){//if player chooses rock
        console.log("Your rock gets covered by the paper! You lose!");
    }else {//if player chooses scissors
        console.log("Your scissors cut the paper! You win!");
    }
}else if(computerChoice === choice[2]){//if computer chooses scissors
    if (playerChoice === "rock"){//if player chooses rock
        console.log("Your rock shatters the scissors! You win!");
    }else{//if player chooses paper
        console.log("Your paper is cut by the scissors! You lose!");
    }
}
