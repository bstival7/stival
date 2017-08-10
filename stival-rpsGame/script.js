//Set database object
const database = firebase.database().ref();
let playerChoice;
const choice = ["rock", "paper", "scissors"];
let score = 0;
let computerChoice;
let initials;

database.on('child_added', rowData => {
    const row = rowData.val();
    const init = rowData.Gt.path.ct[0];
    const score = row.SCORE;
    $('.leaderboard').append(`<p>${init} : ${score}</p>`)
})

function setInit(){
    initials = $("#playerName").val();
}

function updateRock(){
    playerChoice = choice[0];
    updateDB();
}
function updateScissors(){
    playerChoice = choice[2];
    updateDB();
}
function updatePaper(){
    playerChoice = choice[1];
    updateDB();
}

function test(){
    $('.allMessages').empty();
}

function save(){
    const value = {
    "SCORE" : score,
    };
    firebase.database().ref(initials).set(value);
}

//button executes this function
function updateDB(){
    computerChoice = choice[Math.floor(Math.random() * 3)];
    let winner;
    if (computerChoice === playerChoice) {
        winner = "You tied!";
    }else if(computerChoice === choice[0]){//If computer chooses rock
        if(playerChoice = "paper"){//If player chooses paper
            score ++;
            winner = "Your paper covers the rock! You win!"
        }else{//if player chooses scissors
            score--;
            winner = "Your scissors get broken by the rock! You lose!";
        }
    }else if(computerChoice === choice[1]){//if computer chooses paper
        if(playerChoice === "rock"){//if player chooses rock
            score--;
            winner = "Your rock gets covered by the paper! You lose!"
        }else {//if player chooses scissors
            score ++;
            winner = "Your scissors cut the paper! You win!";
        }
    }else if(computerChoice === choice[2]){//if computer chooses scissors
        if (playerChoice === "rock"){//if player chooses rock
            score ++;
            winner = "Your rock shatters the scissors! You win!";
        }else{//if player chooses paper
            score--;
            winner = "Your paper is cut by the scissors! You lose!";
        }
    }
    $('.allMessages').append(`<p>${initials} : ${winner} Score: ${score}`);
}