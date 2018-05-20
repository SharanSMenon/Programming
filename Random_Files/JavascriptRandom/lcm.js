function gcd(a, b){
	/**
		* Efficient algorithm to calculate gcd
		* returns GCD of a and b
		*/
	if (b == 0) {
		return a;
	}
	var ap = a % b;
	return gcd(b, ap);
}

let lcm = (a, b) => {
	/**
		* Returns LCM of a and b
		*/
	return Math.floor(a * b / gcd(a, b))
}
console.log(lcm(2203, 123));
