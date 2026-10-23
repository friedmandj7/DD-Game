// create three objects rock paper scissors 
const rock = {}
const paper = {}
const scissors = {}

// const user = ""  // place holder for what the user will "play"
const computer = "" // place hodler for what computer will "play"

console.log("Let's play Rock, Paper, Scissors!");
// prompt("Enter R for rock, P for paper, S for scissors", "Harry Potter");
// console.log("Enter R for rock, P for paper, S for scissors");  // player must enter R P or S - letters must be in uppercase

const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`Type in "rock", "paper" or "scissors": `, playerInput => {
    console.log(`Player chose ${playerInput}!`);
    rl.close();
});

const R = "rock"
const P = "paper"
const S = "scissors"


const randomGenerator = (arr) => {

}

const comparesInput = () => { }

const outputToUser = () => { }

