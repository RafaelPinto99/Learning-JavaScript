// Arrays are a data structure in JS

const myArray = [];

// We can add elementos to an array by referencing the position that they are in the array
myArray[0] = "Rafael";
myArray[1] = 1001;
myArray[2] = false;

// Refer to an array
console.log(myArray); // Notice that the array has a length property

// Length property
console.log(myArray.length);

// Last element in an array
console.log(myArray[myArray.length - 1]);


console.log(myArray[1]);

// Add an element to an array
myArray.push("College");
console.log(myArray);

// Remove an element of an array
myArray.pop();
console.log(myArray);

// Add an element ti the beginning of an array
myArray.unshift(42);
console.log(myArray);

// Remove an element at the beginning of an array
myArray.shift();
console.log(myArray);

// Avoid using this
delete myArray[1];
console.log(myArray); // It actually leaves undefined data. It does not remove

// Remove an element of an array in any position
myArray.splice(1, 1);
console.log(myArray); // It completly removes an element

// Replace an element with another element
myArray.splice(1, 1, 666);
console.log(myArray);

// Add an element without replacing
myArray.splice(1, 0, 420); // simply use 0 in the second statement
console.log(myArray);

// Reverse the order of the elements
myArray.reverse();
console.log(myArray);

// Create a string with all of the elements in the array
const newString = myArray.join();
console.log(newString);

// Create an array with a string
const newArray = newString.split(",");
console.log(newArray);

// Join arrays
const newArrayA = ["A", "B", "C"];
const newArrayB = ["D", "E", "F"];

const newArrayC = newArrayA.concat(newArrayB);
console.log(newArrayA);
console.log(newArrayB);
console.log(newArrayC);

// Another way to join arrays

const newArrayD = [...newArrayA, ...newArrayB];
console.log(newArrayD);





const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
//or
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);