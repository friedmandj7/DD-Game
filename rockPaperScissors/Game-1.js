const prompt = require('prompt-sync')();

console.log("Let's play Rock, Paper, Scissors!");

const playerInput = prompt('Type in "rock", "paper" or "scissors":');
console.log(`Player chose ${playerInput}!`);

if(playerInput !== "rock" || playerInput !== "scissors" || playerInput !== "paper"){
    console.log("Input must be rock, paper or scissors")
}
else{
const elements = ["rock", "paper", "scissors"]

const computerInput = elements[Math.floor(Math.random()*elements.length)];
console.log(`Computer chose ${computerInput}`);

if (playerInput == computerInput) {
    console.log("It's a draw!");
} else if (playerInput == "rock" && computerInput == "scissors") {
    console.log("Player wins!");
} else if (playerInput == "paper" && computerInput == "rock") {
    console.log("Player wins!");
} else if (playerInput == "scissors" && computerInput == "paper") {
    console.log("Player wins!");
} else if (computerInput == "rock" && playerInput == "scissors") {
    console.log("Computer wins!");
} else if (computerInput == "paper" && playerInput == "rock") {
    console.log("Computer wins!");
} else if (computerInput == "scissors" && playerInput == "paper") {
    console.log("Computer wins!");
} 
}