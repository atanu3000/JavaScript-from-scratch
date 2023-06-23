// array push pop

// array shift unshift

let fruit = ["apple", "mango", "lemon"];

console.log(fruit);

fruit.push("banana");
console.log(fruit);

console.log(fruit.pop());
console.log(fruit);

let poppedFruit = fruit.pop();
console.log(`Poped fruit is ${poppedFruit}`);
console.log(fruit);

fruit.unshift("banana");
console.log(fruit);

let removeFruit = fruit.shift();
console.log(`Removed fruit is ${removeFruit}`);
console.log(fruit);