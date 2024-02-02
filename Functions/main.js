// Methods = Built in Functions

// Functions provide reusable code

//Function Declaration Syntax

function sum(num1, num2) {

    if (num2 === undefined) {

        return num1 + num1;
    }

    return num1 + num2;
}

console.log(sum(2, 10.1));

/*function getUserNameFromEmail(email) {
    
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("playerOne@SomeRandomEmail.com"));
console.log(getUserNameFromEmail("rafael@SomeRandomEmail.com"));*/


// Arrow Function
const getUserNameFromEmail = (email) => {

    return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail("rafaelpinto@javascript.com"));

const toProperCase = (name) => {

    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("rAfAeL"));
console.log(toProperCase("fEbRUARy"));