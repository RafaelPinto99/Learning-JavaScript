//let myNumber = 10;

/*while (myNumber <= 50) {

    console.log(myNumber);
    //myNumber = myNumber + 1;
    //myNumber += 1;
    myNumber++;
}*/

// do not create an endless loop, you will run out of memory

/*do {

    console.log(myNumber);
    myNumber++;

} while (myNumber <= 20);*/

/*for (let i = 1; i <= 10;){

    console.log(i);
    i++
}*/

/*let name = "Rafael Pinto"

for (let i = 0; i <= name.length; i++){

    console.log(name.charAt(i));
}*/

let name = "Rafael";
let counter = 0;
let myLetter;

while (counter <= 3) {
    
    myLetter = name[counter];
    console.log(myLetter);

    if (counter === 1) {
        counter += 2;
        continue; //goes back to the beginning
    }

    if (myLetter === "e") break;
    counter++;
}

console.log(counter);