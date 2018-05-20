const inp = require('readline-sync');
let binary = n => {
    var n2 = n;
    var binaryStr = '';
    while (n2 > 1) {
        var num = n2 % 2;
        n2 = parseInt(n2 / 2);
        binaryStr += num;
    }
    binaryStr += '1';
    var backwardsB = '';
    for (let i = 1; i < binaryStr.length+1; i++) {
        backwardsB += binaryStr[binaryStr.length - i];
        
    };
    return backwardsB;
}
var number = inp.questionInt('Enter a number to convert into binary: ')
console.log(binary(number));