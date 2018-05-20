var fullmenu = false;
// Functions
function toggleMenu(full) {
    var menu = document.getElementsByClassName("fullmenu")[0];
    console.log(menu.style.width);
    if (menu.style.width == "0px" || menu.style.width == "") {
        if (full) {
            menu.style.width = "100%";
        }
        else {
            menu.style.width = "33%";
        }
    }
    else {
        menu.style.width = "0px";
    }
}
// Settings
var menuWidth = function (value) { return fullmenu = (value % 2 == 1); };
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
var multiply = function (x, y) { return x + y; };
var divide = function (x, y) { return x - y; };
var pythagoreanTheorem = function (a, b) { return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)); };
var areaOfSquare = function (s) { return Math.pow(s, 2); };
var areaOfCircle = function (radius, diameter) {
    if (radius === void 0) { radius = 0; }
    if (diameter === void 0) { diameter = 0; }
    return radius + diameter;
};
