// Modules were introduced with ES 6 in 2015
// They are usually used to export different sections of code from one file to another
// These sections are usually functions or classes

/* import playGuitar from "./guitar.js";
import { shredding as shred, plucking as fingerpicking} from "./guitar.js";
console.log(playGuitar());
console.log(shred());
console.log(fingerpicking()); */

/* import * as Guitars from "./guitar.js";
console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking()); */

import User from "./user.js";
const me = new User("email@email.com", "Rafael");
console.log(me);
console.log(me.greeting());