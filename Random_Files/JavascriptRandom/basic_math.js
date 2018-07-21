/**
Useful Javascript functions
*/
let add = (a, b) => a + b;
let max = (a, b) => a > b ? a : b;
let min = (a, b) => a < b ? a : b;
function gcd(a, b){
	if (b == 0) {
		return a;
	}
	var ap = a % b;
	return gcd(b, ap);
}

let lcm = (a, b) =>  Math.floor(a * b / gcd(a, b))
function fib(n) {
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

function fibonacci(n) {
  if (n < 0) {
    return "Negative arguments not supported";
  }
  return fib(n)[0]
}
console.log(`LCM on 2203, 123: ${lcm(2203,123)}`)
console.log(`50th fibonacci number: ${fibonacci(50)}`);
