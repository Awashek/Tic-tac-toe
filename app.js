let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Resetbtn");
let againbtn = document.querySelector("#Againbtn");
let message = document.querySelector(".message");
let msgpara = document.querySelector("#msg");


let rollO = true; //roll0, rollX

const Wintype = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Main Diagonal
    [2, 4, 6]  // Other Diagonal
];


const resetGame = () => {
    rollO = true;
    enableBtns();
    message.classList.add("hide")

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(rollO){
            box.innerText = "O";
            rollO = false;
        }
        else{
            box.innerText = "X";    
            rollO = true;
        }
        box.disabled = true;
        winnerCheck();
    });
});

const disableBtns = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBtns = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const displayWinner = (winner)=>{
    msgpara.innerText = `Congratulations you win :) ${winner}`
    message.classList.remove("hide")
    disableBtns();
}

const winnerCheck = ()=>{
    for(let i of Wintype){
        let pos1val = boxes[i[0]].innerText
        let pos2val = boxes[i[1]].innerText
        let pos3val = boxes[i[2]].innerText

        if(pos1val != "" && pos2val != "" && pos3val != "" ) {
            if (pos1val === pos2val && pos2val=== pos3val) {
                displayWinner(pos1val);
            }
        }
    }
}

resetbtn.addEventListener("click",resetGame);
againbtn.addEventListener("click",resetGame)