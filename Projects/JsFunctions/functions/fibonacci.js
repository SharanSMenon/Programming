function fib(n) {
    /**
     * Helper function for fibonacci
     */
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

let fibonacci = n => {
    /**
     * Calculates the nth fibonacci number
     */
    if (n < 0) {
        return "Negative arguments not supported";
    }
    return this.fib(n)[0]
}
module.exports = {
    fibonacci
}