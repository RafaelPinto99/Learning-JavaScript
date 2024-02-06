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
    },

    action: function () {
        return `Time for ${this.beverage.morning}`;
    }
};

// Accessing properties using dot notation
console.log(anotherObj.alive);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj.beverage);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.beverage.afternoon);
console.log(anotherObj.action());

// Accessing properties using square bracket notation
console.log(anotherObj["alive"]);
console.log(anotherObj["answer"]);
console.log(anotherObj["hobbies"]);
console.log(anotherObj["hobbies"][1]);
console.log(anotherObj["beverage"]);
console.log(anotherObj["beverage"].morning);
console.log(anotherObj["beverage"].afternoon);
console.log(anotherObj["action"]());

const vehicle = {

    wheels: 4,
    engine: function () {
        return "Vroooom!";
    }
};

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); // Inheritance
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;

car.engine = function () {
    return "Whooooosh!";
};

console.log(car.engine());
console.log(car.wheels);

const tesla = Object.create(car);
console.log(tesla.wheels);

tesla.engine = function () {
    return "Shhhh...";
};

console.log(tesla.engine());




const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

console.log(Object.keys(band));
console.log(Object.values(band));


//for in loop
for (let job in band) {
    //To get the valeus in each iteration
    console.log(band[job]); //Use bracket notation here instead of dot notation otherwise it will look for that specific name, this way it will
                            //iterate through each of the objects
}

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
}

// Destructuring Objects
const { guitar: myGuitar, bass: myBass } = band;
console.log(myGuitar);
console.log(myBass);

// These are 4 new variables
const { vocals, guitar, bass, drums } = band;
console.log(guitar);
console.log(bass);


// No need for the blocks of code above
function sings({ vocals }) {
    return `${vocals} sings!`;
}

console.log(sings(band));