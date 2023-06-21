// and or operator

let firstName = "Atanu";
let age = 20;

if  (firstName[0] === "A" && age > 18) {
    console.log("Name starts with A and age is 18" );
}

if  (firstName[0] === "B" || age > 18) {
    console.log("Inside if " );
} else{
    console.log("outside if");
}