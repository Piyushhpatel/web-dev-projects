const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// Function to initialize the game
function initGame(){
    currentPlayer = "X";
    
    //Empty in memory
    gameGrid = ["", "", "", "", "", "", "", "", ""];

    //Empty in Ui
    boxes.forEach((box, index) => {
        boxes[index].style.pointerEvents = "all";
        box.innerText = "";
        box.classList.remove("win");
    });

    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function swapturn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver(){
    let answer = "";

    winningPositions.forEach((position) => {
        
        //All 3 boxes must be empty and all boxes must have same values

        if((gameGrid[position[0]] !== "" || gameGrid[position[1]] != "" || gameGrid[position[2]] !== "") && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] == gameGrid[position[2]])){
            if(gameGrid[position[0]] === "X"){
                answer = "X";
            }
            else{
                answer = "O";
            }

            boxes.forEach((box)=>{
                box.style.pointerEvents = "none";
            })

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        } 
    });

    if(answer != ""){
        gameInfo.innerText = `Winner - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    let fillCnt = 0;
    gameGrid.forEach((box) => {
        if(box != ""){
            fillCnt++;
        }
    });

    if(fillCnt === 9){
        gameInfo.innerText = "Game Tied!";
        newGameBtn.classList.add("active");
    }
}

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerText = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        gameGrid[index] = currentPlayer;
        swapturn();
        checkGameOver();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () =>{
        console.log("clicked");
        handleClick(index);
    })
});

newGameBtn.addEventListener("click", initGame);

initGame();