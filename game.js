


let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newButton=document.querySelector("#newbutton");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnx=true;

const winpatter=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnx=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
         console.log("box was clicked");
         if(turnx){
           box.innerText="X";
            turnx=false;
        } else{
        box.innerText="O";
        turnx=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
      box.disabled=true;  
    }

};
const enableBoxes=()=>{
    for(let box of boxes){
      box.disabled=false; 
      box.innerText="";
    }
};
const showWinner =(winner) =>{
    msg.innerText=`congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

 const checkwinner=()=>{
    for(pattern of winpatter){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1Val!=""&&pos2Val!=""&&pos3val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
 };
 newButton.addEventListener("click",resetGame);
 reset.addEventListener("click",resetGame);
 