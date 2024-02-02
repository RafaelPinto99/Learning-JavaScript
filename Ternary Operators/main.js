// syntax
// condition ? ifTrue : ifFalse;

let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup" : "No, no soup today";
// if it holds a value it is true if it does not have a value it is false
console.log(response);


let meat;
response = meat ? "Yes, we have meat" : "No, no meat today";
// if it holds a value it is true if it does not have a value it is false
console.log(response);


let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you"
    : soup ? `Yes, we have ${soup} today`
        : "Sorry, no soup today";
console.log(soupAccess);




//let testScore = 79;
let testScore = Math.floor(Math.random() * 100);
let myGrade = testScore > 89 ? "A"
    : testScore > 79 ? "B"
        : testScore > 69 ? "C"
            : testScore > 59 ? "D"
                : "F";
console.log(`My test grade is ${myGrade}`);




const option = ["rock", "paper", "scissors"];

const randomNumber = Math.floor(Math.random() * 3);

const randomOption = option[randomNumber];

let playerOne = randomOption;
console.log(playerOne);

const computerRandomNumber = Math.floor(Math.random() * 3);

const computerRandomOption = option[computerRandomNumber];

let computer = computerRandomOption;
console.log(computer);

switch (playerOne) {

    case "rock":

        console.log(computer === "paper" ? "Computer wins!"
            : computer === "scissors" ? "Player One wins!"
                : "It's a tie!");
        break;
    
    case "paper":

        console.log(computer === "scissors" ? "Computer wins!"
            : computer === "rock" ? "Player One wins!"
                : "It's a tie!");
        break;
    
    case "scissors":

        console.log(computer === "rock" ? "Computer wins!"
            : computer === "paper" ? "Player One wins!"
                : "It's a tie!");
        break;
    
    default:
        console.log("Invalid choice for Player One");
}
