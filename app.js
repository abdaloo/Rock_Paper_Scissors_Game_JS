// Step 3:
let humanScore = 0;
let computerScore = 0;

let tempVariable = "";


// Step 1:
function getComputerChoice(){
    let result = Math.floor(Math.random()*3 + 1);
    switch(Number(result)){
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

function playRound(computerChoice,humanChoice){

    if(computerChoice == 'rock' && humanChoice == 'rock'){
        console.log("Both are same, Play next round!");
    }else if(computerChoice == 'rock' && humanChoice == 'paper'){
        console.log("You won! paper beats rock");
        console.log(humanScore++);
    }else if(computerChoice == 'rock' && humanChoice == 'scissors'){
        console.log("You lose! rock beats scissors");
        console.log(++computerScore);
    }else if(computerChoice == 'paper' && humanChoice == 'paper'){
       console.log("Both are same, Play next round!");
    }else if(computerChoice == 'paper' && humanChoice == 'scissors'){
        console.log("You won! scissors beats paper");
        console.log(humanScore++);
    }else if(computerChoice == 'paper' && humanChoice == 'rock'){
        console.log("You lose! paper beats rock");
        console.log(computerScore++);
    }else if(computerChoice == 'scissors' && humanChoice == 'scissors'){
        console.log("Both are same, Play next round!");
    }else if(computerChoice == 'scissors' && humanChoice == 'rock'){
        console.log("You won! rock beats scissors");
        console.log(humanScore++);
    }else if(computerChoice == 'scissors' && humanChoice == 'paper'){
        console.log("You lose! scissors beats paper");
        console.log(computerScore++);
    }else{
        console.log("Repeat the Round.");
        
    }
}

let humanSelection = tempVariable;// tempVariable do not repeat the prompt method
let computerSelection = getComputerChoice();



playRound(computerSelection,humanSelection);





