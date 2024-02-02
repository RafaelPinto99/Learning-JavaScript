// Objects come in key-value pairs in curly braces

const myObj = { name: "Rafael" };
console.log(myObj);
console.log(myObj.name);

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    // You can have nested objects
    beverage: {
        morning: "Coffee",
        afternoon: "Iced tea",
    }
}

// Accessing properties using dot notation
console.log(anotherObj.alive);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj.beverage);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.beverage.afternoon);

// Accessing properties using square bracket notation
console.log(anotherObj["alive"]);
console.log(anotherObj["answer"]);
console.log(anotherObj["hobbies"]);
console.log(anotherObj["hobbies"][1]);
console.log(anotherObj["beverage"]);
console.log(anotherObj["beverage"].morning);
console.log(anotherObj["beverage"].afternoon);