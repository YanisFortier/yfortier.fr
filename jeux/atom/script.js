//Global Variable
var arrayBalls = [];
var arrayAnswers = [];
var size;
//Setup
function setupGame(x) {
    size = x;
    createGrid(x);
    createArray(x);
    compare();
}


function gameBordersClic(x) {
    console.log("Launch !");
    posX = parseInt(x.id.charAt(1));
    posY = parseInt(x.id.charAt(2));
    borderStart = "b" + posX + posY;
    console.log(borderStart);
    if (size == 5) {
        if (posX == 0) {
            //Top
            launchElectron(posX, posY - 1, "bottom");
        } else if (posX == size + 1) {
            //Bottom
            launchElectron(posX, posY - 1, "top");
        } else {
            //Horizontal
            if (posY == 0) {
                //Left
                launchElectron(posX - 1, posY, "right");
            } else if (posY == size + 1) {
                //Right
                launchElectron(posX - 1, posY, "left");
            }
        }
    }
    //Special cases for the different sizes
    if (size == 6 || size == 7) {
        if (posX == 0) {
            //Top
            launchElectron(posX, posY - 1, "bottom");
        } else if (posX == size + 1) {
            //Bottom
            launchElectron(posX - 2, posY - 1, "top");
        } else {
            //Horizontal
            if (posY == 0) {
                //Left
                launchElectron(posX - 1, posY, "right");
            } else if (posY == size + 1) {
                //Right
                launchElectron(posX - 1, posY - 2, "left");
            }
        }
    }

}


function resetClass(x) {
    setTimeout(function() {
        output = document.getElementById(x)
        if (output != null) {
            output.classList.remove("electron-none");
            output.classList.remove("electron-top");
            output.classList.remove("electron-bottom");
            output.classList.remove("electron-right");
            output.classList.remove("electron-left");
            output.classList.remove("electron-horizontally");
            output.classList.remove("electron-vertically");
        }
    }, 2000); //Time before execution
}


function bordersFound(x, y, direction) {
    var bordersPosition;
    //Top
    if (direction == "top") {
        bordersPosition = "b" + (x + 1) + (y + 1);
        if (bordersPosition == borderStart)
            document.getElementById(bordersPosition).classList.add("electron-vertically");
        else
            document.getElementById(bordersPosition).classList.add("electron-top");
        resetClass(bordersPosition);
    }
    //Bottom
    if (direction == "bottom") {
        bordersPosition = "b" + (x - 1) + (y + 1);
        if (bordersPosition == borderStart)
            document.getElementById(bordersPosition).classList.add("electron-vertically");
        else
            document.getElementById(bordersPosition).classList.add("electron-bottom");
        resetClass(bordersPosition);
    }
    //Left
    if (direction == "left") {
        bordersPosition = "b" + (x + 1) + (y + 1);
        if (bordersPosition == borderStart)
            document.getElementById(bordersPosition).classList.add("electron-horizontally");
        else
            document.getElementById(bordersPosition).classList.add("electron-left");
        resetClass(bordersPosition);
    }
    //Right
    if (direction == "right") {
        bordersPosition = "b" + (x + 1) + (y - 1);
        if (bordersPosition == borderStart)
            document.getElementById(bordersPosition).classList.add("electron-horizontally");
        else
            document.getElementById(bordersPosition).classList.add("electron-right");
        resetClass(bordersPosition);
    }
    return null;
}

function launchElectron(x, y, direction) {
    var position = "" + x + y;
    x = parseInt(x);
    y = parseInt(y);
    console.log("x : " + x + "\ny : " + y);
    //Borders found
    if (x < 0 || x > size + 1 || y < 0 || y > size + 1) {
        console.log("Borders found : " + position);
        bordersFound(x, y, direction);
        return null;
    }

    //Atom encountered - Face
    for (var i = 0; i < arrayBalls.length; i++) {
        if (position == arrayBalls[i]) {
            //Atom en face
            console.log("Atom found : " + "position = " + position)
            if (direction == "top") {
                launchElectron(x + 1, y, "bottom");
            }
            if (direction == "bottom") {
                launchElectron(x - 1, y, "top");
            }
            if (direction == "left") {
                launchElectron(x, y + 1, "right");
            }
            if (direction == "right") {
                launchElectron(x, y - 1, "left");
            }
            return null;
        }
    }

    //Checking angle 
    for (var i = 0; i < arrayBalls.length; i++) {
        positionTop = "" + (x - 1) + y;
        positionBottom = "" + (x + 1) + y;
        positionLeft = "" + x + (y - 1);
        positionRight = "" + x + (y + 1);
        if (direction == "top" && positionLeft == arrayBalls[i]) {
            launchElectron(x + 1, y, "right");
            return null;
        }
        if (direction == "top" && positionRight == arrayBalls[i]) {
            launchElectron(x + 1, y, "left");
            return null;
        }
        //Direction bottom
        if (direction == "bottom" && positionLeft == arrayBalls[i]) {
            launchElectron(x - 1, y, "right");
            return null;
        }
        if (direction == "bottom" && positionRight == arrayBalls[i]) {
            launchElectron(x - 1, y, "left");
            return null;
        }

        //Left
        if (direction === "left" && positionTop == arrayBalls[i]) {
            launchElectron(x, y + 1, "bottom");
            return null;
        }
        if (direction === "left" && positionBottom == arrayBalls[i]) {
            launchElectron(x, y + 1, "top");
            return null;
        }

        //Right
        if (direction === "right" && positionTop == arrayBalls[i]) {
            launchElectron(x, y - 1, "bottom");
            return null;
        }
        if (direction === "right" && positionBottom == arrayBalls[i]) {
            launchElectron(x, y - 1, "top");
            return null;
        }
    }



    //If nothing, search again
    if (direction == "top") {
        x = x - 1;
        launchElectron(x, y, "top");
    }
    if (direction == "bottom") {
        x = x + 1;
        launchElectron(x, y, "bottom");
    }
    if (direction == "left") {
        y = y - 1;
        launchElectron(x, y, "left");
    }
    if (direction == "right") {
        y = y + 1;
        launchElectron(x, y, "right");
    }

}

function gameClic(x) {

    posX = parseInt(x.id.charAt(0));
    posY = parseInt(x.id.charAt(1));
    position = "" + posX + posY;
    console.log("cell :", position);
    if (arrayAnswers.includes(position)) {

        arrayAnswers = arrayAnswers.filter(val => val !== position);

        console.log(arrayAnswers); // ["orange","black","white"]
    } else
        arrayAnswers.push(position);
    console.log(arrayAnswers);
}

//Create the array for the game 
//x is the maximum number of ball
function createArray(x) {
    var arrText = "";
    var arrayAtom1x = new Array();
    var arrayAtom1y = new Array();

    //Generate random positions (they can overlap)
    for (i = 0; i < x - 2; i++) {
        arrayAtom1x[i] = getRandomInt(x - 2);
        arrayAtom1y[i] = getRandomInt(x - 2);
    }

    //Merge the array into one
    arrayResult = arrayAtom1x.map((item, index) => { return [item, arrayAtom1y[index]] })
        //console.log(arrayResult);
        //Display in web page
    var posX, posY;
    for (var i = 0; i < arrayResult.length; i++) {
        posX = arrayResult[i][0];
        posY = arrayResult[i][1];
        //Creating a new ball everytime & Append it to the div
        var ball = document.createElement("img");
        //ball.classList.add("ball");
        document.getElementById("" + posX + posY).appendChild(ball);
        arrayBalls.push("" + posX + posY); // Append the ball into an array
        arrText = ""; //Don't forget to reset
        posX = 0;
        posY = 0;
    }
    console.log(arrayBalls);

};

//Create the grid for the game
function createGrid(x) {
    x = x + 2; //Adding 2 for the borders

    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            if (rows == 0 || columns == 0 || rows == x - 1 || columns == x - 1) {
                $("#game-container").append("<div id= 'b" + (rows) + (columns) + "' onclick='gameBordersClic(this)' class='grid game-borders'></div>");
            } else {
                $("#game-container").append("<div id='" + (rows - 1) + (columns - 1) + "' onclick='gameClic(this)' class='grid'></div>");
            }
        };
    };
    $(".grid").width(300 / x);
    $(".grid").height(300 / x);
};

function clearGrid() {
    $(".grid").remove();
    console.clear();
};

//Clean & Generate the random number for the game size
function refreshGrid() {
    arrayBalls = [];
    arrayAnswers = [];
    var x = Math.round(Math.random() * (7 - 5) + 5);
    clearGrid();
    setupGame(x);
    document.getElementById("placeholder").style.display = "block";
    document.getElementById("win").style.display = "none";
    document.getElementById("lose").style.display = "none";
};


function solveGrid() {
    //Remove duplicates
    let uniqueBalls = [...new Set(arrayBalls)];

    //Sort the array
    uniqueBalls.sort();
    arrayAnswers.sort();

    //Compare
    if (uniqueBalls.toString() === arrayAnswers.toString()) {
        //Win
        document.getElementById("placeholder").style.display = "none";
        document.getElementById("win").style.display = "block";

    } else {
        //Lose
        document.getElementById("placeholder").style.display = "none";
        document.getElementById("lose").style.display = "block";
    }

    console.log(uniqueBalls.toString() === arrayAnswers.toString());
    for (var i = 0; i < uniqueBalls.length; i++) {
        console.log(uniqueBalls[i]);
        document.getElementById(uniqueBalls[i]).classList.add("ball");
        document.getElementById(uniqueBalls[i]).classList.add("right");
    }
}

function compare() {
    var backgroundColor = "rgb(255, 255, 255)";
    var borderColor = "rgb(127, 255, 212)";
    $(".grid").click(function() {
        if ($(this).css("background-color") == backgroundColor) {
            $(this).css("background-color", "black");

        } else if ($(this).css("background-color") == borderColor) {

        } else {
            $(this).css("background-color", "rgb(255, 255, 255)");
        }
    });
}

//Output a random number, from 0 to max
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

$(document).ready(function() {
    setupGame(5);

    $(".newGrid").click(function() {
        refreshGrid();
    });

    $(".solveGrid").click(function() {
        solveGrid();
    });
});