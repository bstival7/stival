var x = 0;

//setup does not loop
function setup(){
    createCanvas(windowWidth,windowHeight);
}

//draw loops
function draw(){
    background('purple');
    fill(120,200,3);
    ellipse(x,x,x,x);
   if (x<height || x<width){
        x+=10;
    }
    if (x>height || x>width){
        x=x-10;
    }
}