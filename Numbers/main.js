//An integer is a whole number
const myNumber = 42;

//A number with a decimal point is a float which references the "floatnig point"
const myFloat = 42.01;

const myString = "42";

console.log(myNumber);
console.log(myFloat);
console.log(myString);
console.log(myNumber === myFloat); //ffalse
console.log(myNumber === myString); //false
console.log(myString + 3); //423
console.log(Number(myString)); //myString is now an integer
console.log(Number(myString) + 3); //45
console.log(Number(myString) === myNumber); //true
console.log(Number("Rafael")); //NaN Not a Number meaning it cannot convert
console.log(Number(undefined)); //NaN
console.log(Number(true)); //01
console.log(Number(false)); //0


//Number methods


//The Number.isInteger() method determines wther the passed value is an integer
console.log(Number.isInteger(myString)); //false

//The Number.parseFloat() method parses an argument and returns a 
//floating point number.If a number cannot be parsed from the argument it returns NaN
console.log(Number.parseFloat(myString)); //42

const myStringTwo = "42.123qwerty";
console.log(Number.parseFloat(myStringTwo)); //42.123

//The toFixed() method formats a number according to how many decimal points you provide as
//the parameter
console.log(myFloat.toFixed(2));

//The Number.parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myFloat));

//The toString method returns a string representing the number
console.log(typeof myFloat.toString());

//Chaining = Using several methods chained together
console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

//NaN is an acronym for Not a Number
//The Number.isNaN() method determins wheter the passed value is NaN and its type is Number
console.log(Number.isNaN("Rafael"));

//The global isNaN() function determines wheter a value is NaN or not
console.log(isNaN("Rafael"));