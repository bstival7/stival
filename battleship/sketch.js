//Canvas & Board
function setup(){
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.mouseClicked(youWin);
    background('black');
    for (var row=0; row<4; row++){
        for (var col=0; col<4; col++){
            fill('gray');
            rect(row*160,col*160,160,160);
        }
    }
    battleShip();
}

var grid;
var rows;
var cols;
var winner=0;

function battleShip(){
    grid = [[false, false, false, false],[false, false, false, false],[false, false, false, false],[false, false, false, false]];
    for (var i = 0; i<4; i++){
        rows = Math.floor(Math.random()*4);
        cols = Math.floor(Math.random()*4);
        if (grid[rows][cols] === false){
            grid[rows][cols] = true;
            console.log(grid[rows][cols]);
        }else{
            console.log("error");
        }
    }
}


function youWin(){
    if (mouseX <= 160){
        if (mouseY <=160){
            if (grid[0][0] === true){
                fill ('black');
                rect (0,0,160,160);
                winner++;
            }
        }
        if (mouseY <=320 && mouseY>160){
            if (grid[0][1] === true){
                fill ('black');
                rect (0,160,160,160);
                winner++;
            }
        }
        if (mouseY <=480 && mouseY>320){
            if (grid[0][2] === true){
                fill ('black');
                rect (0,320,160,160);
                winner++;
            }
        }
        if (mouseY <=640 && mouseY>480){
            if (grid[0][3] === true){
                fill ('black');
                rect (0,480,160,160);
                winner++;
            }
        }
    }
    if (mouseX <= 320 && mouseX > 160){
        if (mouseY <=160){
            if (grid[1][0] === true){
                fill ('black');
                rect (160,0,160,160);
                winner++;
            }
        }
        if (mouseY <=320 && mouseY>160){
            if (grid[1][1] === true){
                fill ('black');
                rect (160,160,160,160);
                winner++;
            }
        }
        if (mouseY <=480 && mouseY>320){
            if (grid[1][2] === true){
                fill ('black');
                rect (160,320,160,160);
                winner++;
            }
        }
        if (mouseY <=640 && mouseY>480){
            if (grid[1][3] === true){
                fill ('black');
                rect (160,480,160,160);
                winner++;
            }
        }
    }
    if (mouseX <= 480 && mouseX > 320){
        if (mouseY <=160){
            if (grid[2][0] === true){
                fill ('black');
                rect (320,0,160,160);
                winner++;
            }
        }
        if (mouseY <=320 && mouseY>160){
            if (grid[2][1] === true){
                fill ('black');
                rect (320,160,160,160);
                winner++;
            }
        }
        if (mouseY <=480 && mouseY>320){
            if (grid[2][2] === true){
                fill ('black');
                rect (320,320,160,160);
                winner++;
            }
        }
        if (mouseY <=640 && mouseY>480){
            if (grid[2][3] === true){
                fill ('black');
                rect (320,480,160,160);
                winner++;
            }
        }
    }
    if (mouseX <= 640 && mouseX > 480){
        if (mouseY <=160){
            if (grid[3][0] === true){
                fill ('black');
                rect (480,0,160,160);
                winner++;
            }
        }
        if (mouseY <=320 && mouseY>160){
            if (grid[3][1] === true){
                fill ('black');
                rect (480,160,160,160);
                winner++;
            }
        }
        if (mouseY <=480 && mouseY>320){
            if (grid[3][2] === true){
                fill ('black');
                rect (480,320,160,160);
                winner++;
            }
        }
        if (mouseY <=640 && mouseY>480){
            if (grid[3][3] === true){
                fill ('black');
                rect (480,480,160,160);
                winner++;
            }
        }
    }
}