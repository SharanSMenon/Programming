var myString: string;
myString = 'This is a string';
// Cannot assign any other data types to myString
var anotherStr = 'A string without types';
// Does not need to declare the type.
let number1: number = 4; // Can be integer or float
// cannot redeclare number1. 
console.log(number1);
let alive: boolean = true;
console.log(`Alive ${alive}`);
let anArray: Array<string>; // Can only have strings
let anything: any; // Any value can be assigned

