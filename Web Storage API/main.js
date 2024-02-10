/* Not part of the DOM - refers to the Window API
Available to JS via the global variable: window
We do not have to type window. It is implied */

// window.alert("ok!"); = alert("ok!");
// window.alert(window.location); = alert(location);

/* THE DIFFERENCE BETWEEN LOCALSTORAGE AND SESSIONSTORAGE
 While data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends */

const myArray = ["eat", "sleep", "code"];

const myObject = {
    name: "Rafael",
    hobbies: ["eat", "sleep", "code"],
    logNome: function () {
        
        console.log(this.name);
    }
}

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(typeof mySessionData);
console.log(mySessionData);

localStorage.setItem("myLocalStore", JSON.stringify(myArray));
//localStorage.removeItem("myLocalStore"); clears one key
//localStorage.clear(); clears all keys
const key = localStorage.key(0); // key(position) - the position works like an array starts at 0
const length = localStorage.length; // says how many key are there in total
const myLocalData = JSON.parse(localStorage.getItem("localStorage"));
console.log(typeof localStorage);
console.log(localStorage);
console.log(key);
console.log(length);