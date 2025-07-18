let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        
        if (turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkWinner();
        if(count===9 && !iswinner)
        {
            gameDraw();
        }
    });
    
});

const gameDraw =()=>{
    msg.innerText="Draw";
    msgcontainer.classList.remove("hide");
    disableBtn();
}

const disableBtn=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const showwinner=(winner) => {
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBtn();
};

const checkWinner= () => {
    for(pattern of winpattern)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if (pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                console.log("Winner ",pos1val);
                
                showwinner(pos1val);
                return true;
                
            }
        }
    }
};

const enablebtn= () => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
    
};

const resetgame = () => {
    turnO=true;
    count=0;
    enablebtn();
    msgcontainer.classList.add("hide");
};

resetBtn.addEventListener("click",resetgame);