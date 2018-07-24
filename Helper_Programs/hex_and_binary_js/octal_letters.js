const inp = require("readline-sync");
function str_to_oct(str) {
  return decToOctBytes(charsToBytes(str.split(''))).join(' ');
}

function oct_to_str(octBytes) {
  return bytesToChars(octToDecBytes(octBytes.split(' '))).join('');
}

function charsToBytes(chars) {
  return chars.map(function(char) {
    return char.charCodeAt(0);
  });
}

function bytesToChars(bytes) {
  return bytes.map(function(byte) {
    return String.fromCharCode(parseInt(byte, 10));
  });
}

function decToOctBytes(decBytes) {
  return decBytes.map(function(dec) {
    return ('000' + dec.toString(8)).substr(-3);
  });
}

function octToDecBytes(octBytes) {
  return octBytes.map(function(oct) {
    return parseInt(oct, 8);
  });
}
console.log("1. Convert text into octal code")
console.log("2. Convert octal code to text")
var choice = inp.question("Type 1 or 2: ")
if (choice == "1") {
    var ip = inp.question("Enter text to be converted: ")
    console.log("Result: " + str_to_oct(ip))
} else if (choice == "2") {
    var ip2 = inp.question('Enter octal code to be converted: ')
    console.log(oct_to_str(ip2));
} else {
    console.log("Not a valid option");

}
// Exporting functions to be used in other modules
module.exports = {
    str_to_oct,
    oct_to_str
}