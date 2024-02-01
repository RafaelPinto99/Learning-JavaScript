let customerIsBanned = true;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crackers`;
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = "Sorry, we're out of soup";
}

console.log(reply);

let testscore = 89;
let collegeStudent = true;
let grade;

if (testscore >= 90) {
    grade = "A";
} else if (testscore >= 80) {
    grade = "B";
} else if (testscore >= 70) {
    grade = "C";
} else if (testscore >= 60) {
    grade = "D";
} else {
    if (collegeStudent) {
        grade = "U";
    } else {
        grade = "F";
    }
    
}

console.log(grade);

//Rock Paper Scissors

//Take user input for playerOne
let playerOne = prompt("Enter your choice (rock, paper, scissors)").toLowerCase();

//Generate a random choice for the computer
let computerChoices = ["rock", "paper", "scissors"];
let computer = computerChoices[Math.floor(Math.random() * computerChoices)];

//Decision tree
if (playerOne === computer) {

    console.log("Tie game!");
}

else if (playerOne === "rock") {

    if (computer === "paper") {

        console.log("Computer wins!");
    }
    
    else {

        console.log("PlayerOne wins!");
    }
    
}

else if (playerOne === "paper") {
    
    if (computer === "scissors") {
     
        console.log("Computer wins!");
    }
    
    else {
        
        console.log("PlayerOne wins!");
    }

}

else {

    if (computer === "scissors") {
       
        console.log("Computer wins!");
    }
    
    else {
        
        console.log("PlayerOne wins!");
    }
}