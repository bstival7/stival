//To Do: #5 & Bonus

//Generates a random lowercase letter
function randLetter() {
    var lowerAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var chooseLetter = Math.floor(Math.random()*lowerAlphabet.length);
    var result = lowerAlphabet[chooseLetter];
    return result;
}
//Generates a random upercase letter
function randUpLetter() {
    var uppAlphabet = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var chooseLetter = Math.floor(Math.random()*uppAlphabet.length);
    var result = uppAlphabet[chooseLetter];
    return result;
}

//Generates a random lowercase word using the randLetter function
function randWord() {
    var x = Math.floor(Math.random()*10)+2;
    var word = "";
    for (i=0; i<x; i++) {
        word += randLetter();
    }
    return word;
}

//Generates a random sentence starting with an uppercase letter
function randUpWord() {
    var x = Math.floor(Math.random()*10)+2;
    var word = "";
    word += randUpLetter();
    for (i=0; i<x; i++) {
        word += randLetter();
    }
    return word;
}

//Generates a random sentence using the randWord function
function randSentence() {
    var y = Math.floor(Math.random()*10)+2;
    var sentence = "";
    sentence += randUpWord();
    for (i=0; i<y; i++){
        sentence += " ";
        sentence += randWord();
    }
    sentence += "."
    return sentence;
}

console.log(randSentence());

