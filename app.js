// Step 3:
let humanScore = 0;
let computerScore = 0;

// Step 1:
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

// console.log(getComputerChoice()); // this is just for text the function

// Step 2:
function getHumanChoice(){
    let result = +prompt("Enter a number i.e.[1 = rock, 2 = paper, 3 = scissors]","");
    if(result === 1){
        return "rock";
    } else if(result === 2){
        return "paper";
    } else if(result === 3){
        return "scissors";
    } else{
        return alert("Please enter the 1,2 or 3 number.");
    }
}

// console.log(getHumanChoice()); // this is just for text the function

//Step 4:
function playRound(humanChoice,computerChoice){

}




