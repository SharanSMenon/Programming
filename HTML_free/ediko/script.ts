// Imports

// import { Car } from "./Car/Car";
// import { Case } from "./Car/Case";
// import { Engine } from "./Car/Engine";
// import { SmartSystem } from "./Car/SmartSystem";
// import { Tank } from "./Car/Tank";
// Global variables
var fullmenu :boolean = false;
// Functions
function toggleMenu(full): void {
    var menu: HTMLElement = <HTMLElement>document.getElementsByClassName("fullmenu")[0];
    console.log(menu.style.width);
    if (menu.style.width == "0px" || menu.style.width == "") {
        if (full) {
            menu.style.width = "100%";
        } else {
            menu.style.width = "33%";
        }
    } else {
        menu.style.width = "0px";
    }
}
// Settings
let menuWidth = (value: number) => fullmenu = (value % 2 == 1);
