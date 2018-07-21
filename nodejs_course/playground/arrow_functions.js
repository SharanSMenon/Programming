/*
----Arrow functions----
---Syntax types---
--Statement syntax--
var f1 = (x) => {
    return x*2
}
--Expression syntax--
var f1 = x => x*2
-Note-
If you have 1 argument you dont need ().
Else, you need (),
*/
console.log("Starting app");
//Expression syntax
var square = x => x * x
console.log(square(5));
var user = {
    name:"Sharan",
    sayHi: () => {
        console.log(`Hi`);
    },
    sayHi2 () {
        console.log(`Hi I am ${this.name}`)
    }
};
user.sayHi();
user.sayHi2();
console.log(user.name);