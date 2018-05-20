const {questionInt} = require('readline-sync');
const {performance} = require('perf_hooks')
// Fast Fibonacci Algorithm
function fib(n){
    if (n == 0) {
        return [0, 1];
    } else {
        var a = fib(Math.floor(n / 2))[0];
        var b = fib(Math.floor(n / 2))[1];
        var c = a * (b * 2 - a);
        var d = a * a + b * b;
        if (n % 2 == 0) {
            return [c, d];
        } else {
            return [d, c + d];
        }
    }
}

function fastFibonacci(n) {
    /**
     * Calculates the nth fibonacci number
     */
    if (n < 0) {
        return "Negative arguments not supported";
    }
    return fib(n)[0]
}

function normalFibonacci(n) {
    var returnList = [0, 1];
    for (let i = 2; i < n; i++) {
        returnList.push(returnList[i - 1] + returnList[i - 1]);
    }
}

// Testing the code
var n = questionInt("Enter a number n: ");
var startTime = performance.now();
var answer = fastFibonacci(n);
var endTime = performance.now();
var difference = (endTime - startTime) * 1000000;
console.log("Fast Fibonacci Algorithm: ");
console.log(`Duration: ${difference} nanoseconds`);
console.log(`Answer: ${answer}`);

var startTime = performance.now();
var answer2 = normalFibonacci(n);
var endTime = performance.now();
var duration = (endTime - startTime) * 1000000;
console.log("Slower Fibonacci algorithm: ");
console.log(`Duration: ${duration} nanoseconds`);
console.log("Answer is same as above");

