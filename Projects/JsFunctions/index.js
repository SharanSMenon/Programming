// Imports
const lists = require('./functions/lists');
const numbers = require('./functions/numbers');
//Tests
// Lists
l = [1,2,3,4,5,6,7,8,9,10]
console.log("Test for lists module");
console.log(`List: ${l}`)
console.log(`Sum of list: ${lists.addList(l)}`)
console.log("-----");
// Numbers
console.log("Tests for numbers module");
console.log("5 is prime: "+numbers.isPrime(5));
console.log("10 is prime: " + numbers.isPrime(10));
console.log("10 is even: " + numbers.isEven(10));
console.log("5 is even: " + numbers.isEven(5));
console.log(`Law of cosines for a, b = 10 and C = 25: ${numbers.lawOfCosines(10,10,25)}`);

console.log("-----");
