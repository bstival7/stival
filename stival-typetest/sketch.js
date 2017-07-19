//Will be used for score
var x = 0;
var y = 0;
//Array for the sentences
var strings = ["Spicy", "Yahoo Gang is the GOAT", "Winter is Coming", "You know nothing, Jon Snow", "I have failed"];
//Input
var inp;

//Sets up the canvas, background, and static text
function setup(){
    createCanvas(windowWidth, windowHeight);
    background('black');
    inp = createInput();
    inp.position(width/10, height/1.7);
    fill('white');
    text('Please type the sentence below: ', width/10, height/5, width/2, height/4);
    text('Instructions: [Right Arrow > Next Word] [Enter > Submit]', width/10, height/4, width/2);
}

//Main function that runs the program
function keyPressed(){
    if (keyCode === RIGHT_ARROW){
        y = Math.floor(Math.random()*strings.length);
        fill('black');
        rect((width/10)-15, (height/3)-15, 200, 500);
        fill('white');
        text (strings[y], width/10, height/3);
    }
    if (keyCode === ENTER){
        if (inp.value() === strings[y]){
            x+=10;
            alert("Click the right arrow key for your next sentence!");
        }else{
            x-=10;                
            alert('You need to work on your typing!');
        }
        text('Current Points: ' + x, width/10, height/1.5);
    }
}