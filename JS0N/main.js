//JSON:  JavaScript Object Notation

/*
JSON is used to send and receive data.
JSON is a text format that is completly langauge independent.
Meaning JSON is used to send and receive data in many languages
... not just in JavaScript.
*/

const myObj = {
    name: "Rafael",
    hobbies: ["photography", "jdm cars", "code"],
    //Hello method
    hello: function () {
        console.log("Olá!");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj); // method lost
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);