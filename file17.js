// nested if else 

let winingNumber = 19;
let userGuess = +prompt("Guess a number: ");

console.log(typeof userGuess, userGuess);

if (userGuess === winingNumber) {
    console.log("your guess is right");
} else {
    // console.log("Your guess is wrong!");
    if (userGuess > winingNumber) {
        console.log("too long!!");
    } else {
        console.log("too short!!");
    }
}