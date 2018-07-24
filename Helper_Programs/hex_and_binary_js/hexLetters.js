// Imports
const inp = require("readline-sync")
// Functions
var text_to_hex = function(str){
    var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
}

function hex_to_text(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}
// Testing and User Interface
console.log("1. Convert text into hex code")
console.log("2. Convert hex code to text")
var choice = inp.question("Type 1 or 2: ")
if (choice == "1") {
    var ip = inp.question("Enter text to be converted: ")
    console.log("Result: " + text_to_hex(ip))
} else if (choice == "2") {
    var ip2 = inp.question('Enter hex code to be converted: ')
    console.log(hex_to_text(ip2));
} else {
    console.log("Not a valid option");

}
// Exporting functions to be used in other modules
module.exports = {
    hex_to_text,
    text_to_hex
}