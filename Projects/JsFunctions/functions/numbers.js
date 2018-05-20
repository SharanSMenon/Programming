// Converts from degrees to radians.
let radians = function (degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
let degrees = function (radians) {
    return radians * 180 / Math.PI;
};
let isPrime = (x) => {
    for (let i = 2; i < x/2; i++) {
        if (x % i == 0) {
            return false;
        }        
    }
    return true;
}
let isEven = x => x % 2 === 0;
let lawOfCosines = (a, b, C) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - (2*a*b*Math.cos(radians(C))));
module.exports = {
    isPrime,
    isEven,
    lawOfCosines
}