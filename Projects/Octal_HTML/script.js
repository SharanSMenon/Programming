var mode = 1;
var ininfo = "Enter ASCII text here:"
var outinfo = "Octal output here";
function str_to_oct(str) {
    return decToOctBytes(charsToBytes(str.split(''))).join(' ');
}

function oct_to_str(octBytes) {
    return bytesToChars(octToDecBytes(octBytes.split(' '))).join('');
}

function charsToBytes(chars) {
    return chars.map(function (char) {
        return char.charCodeAt(0);
    });
}

function bytesToChars(bytes) {
    return bytes.map(function (byte) {
        return String.fromCharCode(parseInt(byte, 10));
    });
}

function decToOctBytes(decBytes) {
    return decBytes.map(function (dec) {
        return ('000' + dec.toString(8)).substr(-3);
    });
}

function octToDecBytes(octBytes) {
    return octBytes.map(function (oct) {
        return parseInt(oct, 8);
    });
}

function swap() {
    mode = (mode == 1) ? 2 : 1
    var iff = document.getElementById("ininfo");
    var off = document.getElementById("outinfo")
    ininfo = (mode == 1) ? "Enter ASCII text here: " : "Enter octal code here"
    outinfo = (mode == 1) ? "Octal output here" : "ASCII output here"
    iff.innerHTML = ininfo;
    off.innerHTML = outinfo;
    var text = document.getElementById("intext")
    var outP = document.getElementById("outtext")
    text.value = ""
    outP.value = ""
}

function convert() {
    var text = document.getElementById("intext")
    var outP = document.getElementById("outtext")
    if (mode == 1) {
        var out = str_to_oct(text.value)
    } else {
        var out = oct_to_str(text.value)
    }
    outP.value = out;
}