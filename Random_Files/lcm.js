function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    ap = a % b;
    return gcd(b, ap)
}
let lcm = (a, b) => Math.floor(a * b / gcd(a, b))
console.log(lcm(2203,123))