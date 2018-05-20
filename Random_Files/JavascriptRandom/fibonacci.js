class Fibonacci {
	/**
		* Fibonacci class
		* A collection of functions
		*/
	constructor() {
		/**
			* No variables for this constructor
			*/
		console.log("Welcome to the Fibonacci class");
		console.log(
			"This contains a set of functions that has to do with fibonacci numbers"
		);
		console.log("There are also basic functions like add and subtract");
	}
	fib(n) {
		if (n == 0) {
			return [0, 1];
		} else {
			var a = this.fib(Math.floor(n / 2))[0];
			var b = this.fib(Math.floor(n / 2))[1];
			var c = a * (b * 2 - a);
			var d = a * a + b * b;
			if (n % 2 == 0) {
				return [c, d];
			} else {
				return [d, c + d];
			}
		}
	}

	calcFib(n) {
		/**
			* Calculates the nth fibonacci number
			*/
		if (n < 0) {
			return "Negative arguments not supported";
		}
		return this.fib(n)[0]
	}

	fibonacciList(n){
		/**
			* Returns a list of fibonacci numbers from 1 to n
			*/
		var returnList = [];
		for (let i = 0; i < n + 1; i++) {
			returnList.push(this.calcFib(i)); 
		}
		return returnList;
			}
			add(a, b){
				return a + b;
			} 

}
fib = new Fibonacci()
console.log(fib.calcFib(10));
console.log(fib.fibonacciList(10))
