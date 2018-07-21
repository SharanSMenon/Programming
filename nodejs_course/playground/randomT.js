let mx = (a, b) => a > b ? a : b;
let mn = (a, b) => a < b ? a : b;
let even = a => a % 2 == 0;
let odd = a => a % 2 == 1;
let sum = (a, b) => a + b;
var l = [];
for (let x = 0; x < 10; x++) {
    const n = Math.round(Math.random() * 100)
    l.push(n);
}
console.log(`List: ${l}`);
console.log(`Max: ${l.reduce(mx)}`);
console.log(`Min: ${l.reduce(mn)}`);
console.log(`Evens: ${l.filter(even)}`);
console.log(`Odds: ${l.filter(odd)}`);
console.log(`Sum: ${l.reduce(sum)}`);
