let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let result = Math.floor(Math.random()*3 + 1);
    if(result === 1){
        return "rock";
    } else if(result === 2){
        return "paper";
    } else{
        return "scissors";
    }
    
}

console.log(getComputerChoice());


