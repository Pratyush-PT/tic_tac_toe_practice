let button = document.querySelectorAll(".box");
let reset=document.querySelector(".reset");

let turn=1;//X ki chance

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];



  let chaal=0;
  button.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("chal rha");
        if(!turn)
        {
            //0 ki baari
            box.innerText = "O";
            turn=1;
        }
        else{
             //X ki baari
             box.innerText="X";
             turn=0;
        }
        box.disabled=true;
        chaal++;

        let isWinner = checkWinner();
        if (chaal === 9 && !isWinner) {
            draw();
          }

    })
  });


  // const resetgame=()=>{
  //   turn=1;
  //   enableBoxes();
  //   chaal=0;

  // }

  const enableBoxes = () => {
    for (let box of button) {
      box.disabled = false;
      box.innerText = "";
    }
  };

const disable=()=>{
    for(let x of button)
    x.disabled=true
}

    const draw=()=>{
        console.log(`no one wins here`)


        disable();
        alert(`no one wins here`)
    }

  const showWinner=(winner)=>{
    console.log(`winner is ${winner}`)

    disable();
    alert(`winner is ${winner}`)
  };

  const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = button[pattern[0]].innerText;
      let pos2Val = button[pattern[1]].innerText;
      let pos3Val = button[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };

  // reset.addEventListener("click",()=>{
  //   turn=1;
  //   enableBoxes();
  //   chaal=0;

  // });

  reset.addEventListener("click",()=>{
    turn=1;
    enableBoxes();
    chaal=0;
  })
