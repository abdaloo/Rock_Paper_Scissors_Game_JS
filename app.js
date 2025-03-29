// Step 3:
let humanScore = 0;
let computerScore = 0;

// Step 1:
function getComputerChoice(){
    let result = Math.floor(Math.random()*3 + 1);
    switch(result){
        case 1:
             return "rock";
        case 2:
            return "paper";
        default:
            return "scissors";
    }
}


// Step 2:
function getHumanChoice(){
    let result = Number(prompt("Enter a number i.e.[1 = rock, 2 = paper, 3 = scissors]",""));
    if(result === 1){
        return console.log("rock");
    } else if(result === 2){
        return console.log("paper");
    } else if(result === 3){
        return console.log("scissors");
    } else{
        return console.log("Please enter the 1,2 or 3 number.");
    }
}

console.log(getHumanChoice()); // this is just for test the function
console.log(getComputerChoice()); // this is just for test the function

//Step 4:
// function playRound(humanChoice,computerChoice){

// }




