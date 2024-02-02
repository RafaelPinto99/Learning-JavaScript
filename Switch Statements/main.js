// syntax

/*switch (expression OR value) {
    
    case choice1:
    // run this code
    break;

    case choice2:
    //run this different code
    break;

    // add as many as needed

    default:
    //run this code if no case matches
    // no need for a break here
}*/

/*switch (Math.floor(Math.random() * 5 + 1)) {
    
    case 1:
        console.log(1);
        break;
    
    case 2:
        console.log(2);
        break;
    
    case 3:
        console.log(3);
        break;
    
    default:
        console.log("No match");
}*/

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
        
        if (computer === "paper") {
            console.log("Computer wins!");
        } else if (computer === "scissors") {
            console.log("Player One wins!");
        } else {
            console.log("It's a tie!");
        }

        break;
    
    case "paper":

        if (computer === "scissors") {
            console.log("Computer wins!");
        } else if (computer === "rock") {
            console.log("Player One wins!");
        } else {
            console.log("It's a tie!");
        }

        break;
    
    case "scissors":

        if (computer === "rock") {
            console.log("Computer wins!");
        } else if (computer === "paper") {
            console.log("Player One wins!");
        } else {
            console.log("It's a tie!");
        }

        break;
    
    default:
        console.log("Invalid choice for Player One");
}