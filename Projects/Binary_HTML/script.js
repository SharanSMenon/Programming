var mode = 1;
var ininfo = "Enter text here: ";
var outinfo = "Binary output here: "
var text_to_binary = (function () {
    var pad = '00000000';

    return function (str) {
        return str.replace(/./g, function (c) {
            var bin = c.charCodeAt(0).toString(2);
            return pad.substring(bin.length) + bin;
        });
    };
}());

function binary_to_text(code) {
    let s2 = "";
    for (let i = 0; i <= code.length - 8; i += 8) {
        s2 += String.fromCharCode(parseInt(code.substring(i, i + 8), 2));
    }
    return s2;
}
function swap(){
    mode = (mode == 1) ? 2 : 1
    var iff = document.getElementById("ininfo");
    var off = document.getElementById("outinfo")
    ininfo = (mode == 1) ? "Enter ASCII text here: ": "Enter binary code here"
    outinfo = (mode == 1) ? "Binary output here": "ASCII output here"
    iff.innerHTML = ininfo;
    off.innerHTML = outinfo;
    var text = document.getElementById("intext")
    var outP = document.getElementById("outtext")
    text.value = ""
    outP.value = ""
}
function convert(){
    var text = document.getElementById("intext")
    var outP = document.getElementById("outtext")
    if(mode == 1){
        var out = text_to_binary(text.value)
    }else{
        var out = binary_to_text(text.value)
    }
    outP.value = out;
}
