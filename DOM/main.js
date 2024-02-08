// Document Object Model

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views);

const sameviews = document.querySelectorAll(`.view`);
console.log(sameviews);

const divs = view1.querySelectorAll("div");
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++){

    evenDivs[i].style.backgroundColor = "darkblue";
    /* evenDivs[i].style.width = "200px";
    evenDivs[i].style.height = "200px"; */
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Olá";

const navBar = document.querySelector("nav");
navBar.innerHTML = `<h1>Olá</h1> <p>This should align right</p>`;
console.log(navBar);
//navBar.style.justifyContent = "flex-start"; //sends evreything to the left
//navBar.style.justifyContent = "flex-end"; //sends everything to the right
//navBar.style.justifyContent = "space-evenly";
navBar.style.justifyContent = "space-between";

// Navegating through the DOM tree
console.log(evenDivs[0]); // Outputs the first even div element selected
console.log(evenDivs[0].parentElement); // Outputs the parent element of the first even div element, 
                                        // which is the section element with id "view1"
console.log(evenDivs[0].parentElement.children); // Outputs a live HTMLCollection containing all child elements
                                                 // of the parent section element.In this case, it contains all
                                                 // the div elements inside the section element with id "view1".
console.log(evenDivs[0].parentElement.childNodes); // Outputs a NodeList containing all child nodes 
                                                   // of the parent section element.This includes not only 
                                                   // element nodes(divs) but also text nodes(whitespace 
                                                   // between divs) and possibly comment nodes.
console.log(evenDivs[0].parentElement.hasChildNodes()); // Outputs true or false. In this case true
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);
console.log(evenDivs[0].previousElementSibling.nextElementSibling);

// Adding
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
    
    view2.lastChild.remove();
}

const createDivs = (parent, iter) => {

    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
}

//createDivs(view2, 10);

for (let i = 1; i <= 12; i++){
    
    createDivs(view2, i);
}