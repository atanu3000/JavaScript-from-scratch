// undefined

let firstName;

console.log(typeof firstName);
firstName = "Atanu";
console.log(typeof firstName, firstName);

// null
let myVariable = null;
console.log(myVariable);

myVariable = "Atanu";
console.log(typeof myVariable, myVariable);

console.log(typeof null); // bug, error

// BigInt
let myNumber = 123;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);

myNumber = BigInt(12);
console.log(myNumber);

myNumber = 20n; // it is also BigInt
console.log(myNumber); 