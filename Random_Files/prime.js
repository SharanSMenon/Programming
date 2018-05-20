const {question,questionInt} = require('readline-sync');
// inp.questionInt
// inp.question
let checkPrimes = n => {
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function primes(arr){
  var prime = [];
  for (var i = 0; i < arr.length; i++) {
    if (checkPrimes(arr[i])) {
      prime.push(arr[i]);
    }
  }
  return prime;
}
console.log("Welcome to primes");
console.log("Option 1: Check if a number is prime");
console.log("Option 2: Find primes in a list from 1 to n");
var choice = questionInt("Type in 1 or 2: ");
if (choice == 1) {
  var num = questionInt("Which number do you want to check? ")
  console.log(checkPrimes(num));
}else{
  var mx = questionInt("What is the maximum number? ")
  l = [];
  for (var i = 2; i < mx; i++) {
    l.push(i)
  }
  console.log(primes(l));
}
console.log("Thank you for visiting today.");
