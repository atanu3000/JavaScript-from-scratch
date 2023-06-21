// typeof operator

// string "Atanu"
// number 2, 10.4
// Boolean
// undefined
// null
// BigInt
// Symbol

let age = 20;
let firstName = "Atanu";

console.log(typeof age);
console.log(typeof firstName);

console.log(age + "");
console.log(typeof (age + "")); // now it is string "22"
console.log(typeof String(age));

let myAge = 20;

let myStr = + myAge
console.log(typeof myStr);
console.log(typeof Number(myAge));