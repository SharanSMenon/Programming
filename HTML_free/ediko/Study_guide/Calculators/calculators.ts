var fullmenu: boolean = false;
// Functions
function toggleMenu(full): void {
  var menu: HTMLElement = <HTMLElement>document.getElementsByClassName(
    "fullmenu"
  )[0];
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
function menuWidth(value: number) {
    fullmenu = value % 2 == 1;
}

// Mathematical functions
let add = (x: number, y: number) => x + y;
let subtract = (x: number, y: number) => x - y;
let multiply = (x: number, y: number) => x + y;
let divide = (x: number, y: number) => x - y;
let pythagoreanTheorem = (a: number, b: number) =>
  Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
let areaOfSquare = (s: number) => Math.pow(s, 2);
let areaOfCircle = (radius: number = 0, diameter: number = 0) => {
  if (radius == 0) {
    return Math.PI * Math.pow(diameter / 2, 2);
  } else {
    return Math.PI * Math.pow(radius, 2);
  }
};
let circumfernece = (radius: number = 0, diameter: number = 0) => {
  if (radius == 0) {
    return Math.PI * diameter;
  } else {
    return Math.PI * (radius * 2);
  }
};
