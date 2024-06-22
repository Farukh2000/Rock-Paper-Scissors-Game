let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const opt=["rock","paper","scissors"];
    // rock, paper, scissors
    const randIdx=Math.floor(Math.random()*3);
    return opt[randIdx];
    

}


const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw"
    msg.style.backgroundColor="yellow"
    msg.style.color="black"
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore;
        msg.innerText=(`you win! your ${userChoice} beats ${compChoice}`);
        msg.style.backgroundColor="green"
    }
    else{
        compScore++
        compScorePara.innerText=compScore;
        msg.innerText=`you lose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red"
    }
}



const playGame = (userChoice)=>{
    //generate computer choice
    const compChoice=genCompChoice();


    if(userChoice===compChoice){
        //Draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            // if(compChoice==="paper"){
            //     userWin=false;
            // }
            // else{
            //     userWin=true;
            // }
            userWin=compChoice==="paper" ? false :true;

        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false :true;
        }
        else{ 
            userWin=compChoice==="rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}



choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
})