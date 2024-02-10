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




// Uncomment this to use any block of code below
/* document.addEventListener("readystatechange", (event) => {
    
    if (event.target.readyState === "complete") {
        
        console.log("readyState: complete");
        initApp();
    }
}); */

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


// Use event.stopPropagation(); to stop either from going from inwards to outwards or vice versa
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

/* const initApp = () => {

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
} */

/* This setup allows for different interactions with elements within the #view2 section, 
with each interaction triggering a different visual change. Here's a breakdown:

Clicking anywhere within #view2 changes the background color to purple.
Clicking specifically on the div element within #view2 changes its background color to blue.
Clicking specifically on the h2 element within the div within #view2 changes its text content to "Clicked".

This setup provides a demonstration of event delegation and event propagation in JavaScript, 
where events are handled at different levels of the DOM hierarchy.
 */
/* const initApp = () => {

    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        
        event.target.style.backgroundColor = "purple";
    });

    div.addEventListener("click", (event) => {
        
        event.target.style.backgroundColor = "blue";
    });

    h2.addEventListener("click", (event) => {
        
        event.target.textContent = "Clicked";
    });
} */

/* const initApp = () => {

    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    });

    div.addEventListener("click", (event) => {
        
        div.classList.toggle("blue");
        div.classList.toggle("black");
    });

    h2.addEventListener("click", (event) => {
        
        const myText = event.target.textContent;
        myText === "My 2nd View"
            ? event.target.textContent = "Clicked"
            : event.target.textContent = "My 2nd View";
    });

    const nav = document.querySelector("nav");

    nav.addEventListener("mouseover", (event) => {
    
       nav.classList.add("height100");
    });

    nav.addEventListener("mouseout", (event) => {
    
       nav.classList.remove("height100");
    });
}; */





// For view3
document.addEventListener("readystatechange", (event) => {

    if (event.target.readyState === "complete") {
        
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {

    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {

        event.preventDefault();
        console.log("Event Submited");
    });
}