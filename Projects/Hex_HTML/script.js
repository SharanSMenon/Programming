var mode = 1;
var ininfo = "Enter text here: ";
var outinfo = "Hexadecimal output here: "
var text_to_hex = function (str) {
    var arr1 = [];
    for (var n = 0, l = str.length; n < l; n++) {
        var hex = Number(str.charCodeAt(n)).toString(16);
        arr1.push(hex);
    }
    return arr1.join('');
}

function hex_to_text(hexx) {
    var hex = hexx.toString();
    var str = '';
    for (var i = 0;
        (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function swap() {
    mode = (mode == 1) ? 2 : 1
    var iff = document.getElementById("ininfo");
    var off = document.getElementById("outinfo")
    ininfo = (mode == 1) ? "Enter ASCII text here: " : "Enter Hexadecimal value here"
    outinfo = (mode == 1) ? "Hexadecimal output here" : "ASCII output here"
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
        var out = text_to_hex(text.value)
    } else {
        var out = hex_to_text(text.value)
    }
    outP.value = out;
}