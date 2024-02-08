/* const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// Syntax: addEventListener(event, function, useCapture)

const doSomething = () => {
    
    alert("Doing something");
}

h2.addEventListener("click", doSomething, false); //You can ommit false as it is the default option
h2.removeEventListener("click", doSomething);

h2.addEventListener("click", (event) => { //You can also use the word function
    
    console.log(event.target);
    event.target.textContent = "Clicked";
}) */





document.addEventListener("readystatechange", (event) => {
    
    if (event.target.readyState === "complete") {
        
        console.log("readyState: complete");
        initApp();
    }
});

// Event Bubbling
/* Event Bubbling is a concept in the DOM.
It happens when an element receives an event,
and that event bubbles up (or you can say is transmitted or propagated)
to its parent and ancestor elements in the DOM tree until it gets to the root element.
In other words it goes from inwards to outwards. */
/* const initApp = () => {

    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        
        view.style.backgroundColor = "purple";
    });

    div.addEventListener("click", (event) => {
        
        div.style.backgroundColor = "blue";
    });

    h2.addEventListener("click", (event) => {
        
        event.target.textContent = "Clicked";
    });
} */

// Here it goes from outwards to inwards
/* const initApp = () => {

    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        
        view.style.backgroundColor = "purple";
    }, true);

    div.addEventListener("click", (event) => {
        
        div.style.backgroundColor = "blue";
    }, true);

    h2.addEventListener("click", (event) => {
        
        event.target.textContent = "Clicked";
    }, true);
} */


// Use event.stopPropagation(); to stop either from going from outwards to inwards or vice versa
/* const initApp = () => {

    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        
        view.style.backgroundColor = "purple";
    });

    div.addEventListener("click", (event) => {
        
        div.style.backgroundColor = "blue";
    });

    h2.addEventListener("click", (event) => {
        
        event.stopPropagation();
        event.target.textContent = "Clicked";
    });
} */

const initApp = () => {

    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        
        event.stopPropagation();
        view.style.backgroundColor = "purple";
    }, true);

    div.addEventListener("click", (event) => {
        
        div.style.backgroundColor = "blue";
    }, true);

    h2.addEventListener("click", (event) => {
        
        event.target.textContent = "Clicked";
    }, true);
}