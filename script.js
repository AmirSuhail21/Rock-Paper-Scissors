let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

const genComChoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
}

const drawGame = () =>{
    msg.innerText = "Game Was Draw. Play Again.";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
        msg.style.color = "white";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost!  ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

const playGame = (userChoice) =>{
    const compChoice = genComChoice();
    
    if(userChoice === compChoice){
        // Darw Game!
        drawGame();
    }
        else {
            let userWin = true;
            if(userChoice === "rock"){
                // paper , scissors
                userWin = compChoice === "paper" ? false : true;
            }

            else if(userChoice === "paper"){
                    // rock , scissors
                    userWin = compChoice === "scissors" ? false : true ;
            }
            else{
                // rock , paper
                    userWin = compChoice === "rock" ? false : true;
                }
        showWinner(userWin , userChoice , compChoice);    
        }
        
        
        
}

choices.forEach((choice) =>{
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});