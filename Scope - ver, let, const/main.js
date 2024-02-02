/*UNDERSTANDING SCOPE

Global = Not in a function or block. Not desriable
Local = In a function or block. Not global.
var instantiates function() scoped variables
let and const instantiate {block} sopced variables*/

/*Helpful Tips
Avoid using var. Stick with const and let.
Use const unless you need to reassign value.
Use let if you know you will reassign value. */




//var x = 1; // var was used until 2015 and then const and let happened :D


// Global Scope
/*var x = 1;
let y = 2;
const z = 3;

// Local Scope (block scope)
{
    let y = 4; // this "y" does not appear in the Global Scope
}

// Local Scope (function scope)
function myFunction() {
    
    const z = 5; // this "z" does not appear in the Global Scope
}

// You put a block scope inside a function scope
function myFunction() {
    
    const z = 5;
    console.log(y);

    // Block Scope
    {
        let y = 4;
        console.log(y);
    }
}

myFunction();*/



// Global Scope
var x = 1; // function scoped
let y = 2; // block scoped
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {

    var x = 10;
    const z = 5;
    
    {
        var x = 15; // function scoped
        const z = 7; // block scoped
        
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }

    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}

myFunc();