// Step 3:
let humanScore = 0;
let computerScore = 0;

let tempVariable = "";

// Step 1:
function getComputerChoice(){
    let result = Math.floor(Math.random()*3 + 1);
    switch(result){
        case 1:
             return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return null;
    }
}

// Step 2:
function getHumanChoice(){
    let result = prompt("Enter one word i.e  'rock' , 'paper' or 'scissors' ","");
    
    function checkInput(str) {
        if (!str) return alert("Please enter one of three words"); // Handle empty string case
        return str.toLowerCase(); //return words in lowercase
    }
    tempVariable = checkInput(result);
    return (checkInput(result));

}

console.log("Human choice: " + getHumanChoice()); // this is just for testing the function
console.log("Computer choice: " + getComputerChoice()); // this is just for testing the function

// Step 4:

function playRound(humanChoice, computerChoice){

    if(computerChoice == 'rock' && humanChoice == 'rock'){
        return console.log("Both are same, Play next round!");
    }
    
    if(computerChoice == 'rock' && humanChoice == 'paper'){
        // console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        return console.log(`You won! paper beats rock`);
        // return console.log(humanScore++);
    }
    
    if(computerChoice == 'rock' && humanChoice == 'scissors'){
        return console.log(`You lose! rock beats scissors`);//true
        // console.log(++computerScore);
    }
    
    if(computerChoice == 'paper' && humanChoice == 'paper'){
       return console.log("Both are same, Play next round!");
    }
    
    if(computerChoice == 'paper' && humanChoice == 'scissors'){
        return console.log(`You won! scissors beats paper`);
        // console.log(humanScore++);
    }
    
    if(computerChoice == 'paper' && humanChoice == 'rock'){
        return console.log(`You lose! paper beats rock`);// true
        // console.log(computerScore++);
    }
    
    if(computerChoice == 'scissors' && humanChoice == 'scissors'){
        return console.log("Both are same, Play next round!");
    }
    
    if(computerChoice == 'scissors' && humanChoice == 'rock'){
        return console.log(`You won! rock beats scissors`);
        // console.log(humanScore++);
    }
    
    if(computerChoice == 'scissors' && humanChoice == 'paper'){
        return console.log(`You lose! scissors beats paper`);
        // console.log(computerScore++);
    }
}

const humanSelection = tempVariable;
const computerSelection = getComputerChoice();


playRound(humanSelection,computerSelection);





