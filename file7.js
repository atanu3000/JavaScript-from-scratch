let firstName = "  Atanu Paul  ";
console.log(firstName.length);

firstName.trim();
console.log(firstName.length); // it is not changed because string is immutable 

let newString = firstName.trim();   // assinging in new variable
console.log(newString);
console.log(newString.length);

firstName = newString.toUpperCase();
console.log(firstName);
firstName = newString.toLowerCase();
console.log(firstName);

newString = firstName.slice(0,4);
console.log(newString);
newString = firstName.slice(1);
console.log(newString);



