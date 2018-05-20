let feetToInches = (feet) => feet*12;
let inchesToFeet = (inches) => {
    return inches / 12;
};
function inchesToInchesAndFeet(inches){
    return {
        "Feet":Math.floor(inches/12),
        "Inches":inches%12
    };
}
console.log(`7 Feet is ${feetToInches(7)} inches`);
console.log(`156 inchest is ${inchesToFeet(156)} feet`);
console.log(inchesToInchesAndFeet(157));
