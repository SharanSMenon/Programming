// Imports
const inp = require("readline-sync")
// Functions
var text_to_binary = (function () {
    var pad = '00000000';

    return function (str) {
        return str.replace(/./g, function (c) {
            var bin = c.charCodeAt(0).toString(2);
            return pad.substring(bin.length) + bin;
        });
    };
}());

function binary_to_text(bin) {
    return bin.replace(/[01]{8}/g, function (v) {
        return String.fromCharCode(parseInt(v, 2));
    });
}
// Testing and User Interface
console.log("1. Convert text into binary code")
console.log("2. Convert binary code to text")
var choice = inp.question("Type 1 or 2: ")
if (choice == "1") {
    var ip = inp.question("Enter text to be converted: ")
    console.log("Result: " + text_to_binary(ip))
} else if (choice == "2") {
    var ip2 = inp.question('Enter binary code to be converted: ')
    console.log("Result: " + binary_to_text(ip2));
} else {
    console.log("Not a valid option");

}
// Exporting functions to be used in other modules
module.exports = {
    binary_to_text,
    text_to_binary
}