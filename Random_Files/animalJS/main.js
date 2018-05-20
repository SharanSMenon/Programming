const {Lion, Tiger, Elephant} = require('./species')
var l = new Lion('Killer', 5, 60);
l.whoami();
l.eat();
console.log("----");
var t = new Tiger('Tigger', 5, 90);
t.whoami();
t.eat()
console.log("----");
