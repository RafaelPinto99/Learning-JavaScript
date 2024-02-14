/* Fetch API requires a discussion off...
Callbacks, Promises, Thenables, and Async/Await */

//Callbacks
//Are just functions that are passed to other functions as parameters

/* function firstFunction(parameters, callback) {
    
    //do stuff
    callback();
}

//Aka "callback hell"
firstFunction(para, function () {
    
    //do stuff
    secondFunction(para, function () {
        
        //do stuff
        thirdFunction(para, function () {
            
            //do stuff
        })
    })
}) */

//Promises
//3 states: Pending, Fulfilled, Rejected

/* const myPromise = new Promise((resolve, reject) => {

    const error = true;
    if (!error) {
        
        resolve("Yes! resolved the promise!");
    } else {
        
        reject("No! rejected the promise!");
    }
});

console.log(myPromise);

myPromise.then(value => {
    
    return value + 1;
})
    .then(newValue => {
    
        console.log(newValue);
    })
    .catch(err => {
    
        console.error(err);
}) */

/* const myPromise = new Promise((resolve, reject) => {

    const error = false;
    if (!error) {
        
        resolve("Yes! resolved the promise!");
    } else {
        
        reject("No! rejected the promise!");
    }
});

const myNextPromise = new Promise((resolve, reject) => {
    
    setTimeout(function () {

        resolve("myNextPromise resolved!")
    }, 3000); //3 seconds later
});

myNextPromise.then(value => {
    
    console.log(value);
});

myPromise.then(value => {
    
    console.log(value);
}); */

//Async & Await

const myUsers = {

    userLIST: []
};

async function myCoolFunction() {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.jason();
    console.log(jsonUserData);
    return jsonUserData;
}

myCoolFunction();

/* const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {

        console.log(response);
        return response.json();
    })
    .then(data => {

        console.log(data);
        data.forEach(user => {
            console.log(user);
        })
    }); */

