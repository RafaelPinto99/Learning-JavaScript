console.log(Math.PI); //3.14...
console.log(Math.trunc(Math.PI)); //3
console.log(Math.round(3.5)); //4
console.log(Math.ceil(2.2)); //3 ceil = ceiling it rounds up always
console.log(Math.floor(1.9)); //1
console.log(Math.pow(2, 3)); //8
console.log(Math.min(2, 0.5, -9)); //-9
console.log(Math.max(2, 0.5, -9)); //2

//random value from 0 to 1
console.log(Math.random()); //0.1700274075513719
console.log(Math.random()); //0.1700274075513719
console.log(Math.random()); //0.1700274075513719

//random value from 1 to 10 you can replace 10 with whatever number you want
console.log(Math.floor(Math.random() * 10) + 1); //8
console.log(Math.floor(Math.random() * 10) + 1); //1
console.log(Math.floor(Math.random() * 10) + 1); //3

/*Choose Math.floor() 
  Not Math.ceil()
  for generating a random number from 1 to 10
  Why?
  Math.random() returns a range from 0 to 1 that includes 0 but not 1
  Math.ceil(Math.random() * 10) has a chance of resulting in zero
  Math.floor() * 10) + 1) is the way to go*/
