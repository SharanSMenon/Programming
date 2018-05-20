const inp = require('readline-sync');
let minimum = (a, b) => a < b ? a:b;
let sort = array => {
    var newArray = [];
    var clone = array.slice();
    for (let x = 0; x < array.length; x++) {
        const minimu = clone.reduce(minimum);
        var index = clone.indexOf(minimu)
        newArray.push(minimu);
        clone.splice(index, 1)
    }
    return newArray;
}
let primes = array => {
    var primes = []
    for (let i = 1; i < array.length; i++) {
        var prime = true;
        for (let j = 2; j < array.length; j++) {
            if(array[i]%j === 0 && array[i] !== j){
                // console.log(array[i])
                prime = false;
            }                                
        }
        if(prime === true){
            primes.push(array[i])
        }        
    }
    return primes;
};
let goldbach = n => {
    var evenTrue;
    if (n % 2 === 0) {
        evenTrue = true;
    } else {
        evenTrue = false;
    }
    while (evenTrue == false) {
        n = inp.questionInt("Enter an even number: ");
        if (n % 2 === 0) {
            evenTrue = true;
        }
        else {
            evenTrue = false;
        }
    }
    var primesArray = [];
    for (let i = 0; i < n; i++) {
        primesArray.push(i);
    }
    var allPrimes = primes(primesArray);
    // console.log(allPrimes);
    var allPairs = [];
    for (let k = 0; k < allPrimes.length; k++) {
        for (let l = 0; l < allPrimes.length; l++) {
            if(allPrimes[k] + allPrimes[l] === n){
                var pair = [allPrimes[k], allPrimes[l]];
                allPairs.push(pair);
            }            
        }        
    }
    //Sort all pairs to eliminate
    for (let z = 0; z < allPairs.length; z++) {
        allPairs[z] = sort(allPairs[z]);
    }
    if(allPairs.length > 2){
        for (let y = 0; y < allPairs.length; y++) {
            for (let b = 0; b < allPairs.length; b++) {
                if (allPairs[y][0] === allPairs[b][0]) {
                    // console.log(allPairs.indexOf(allPairs[y]));
                    // console.log(allPairs.indexOf(allPairs[b]));
                    // console.log("---")
                    if (allPairs.indexOf(allPairs[y]) !== allPairs.indexOf(allPairs[b])){
                        var index = allPairs.indexOf(allPairs[b]);
                        // console.log(index)
                        allPairs.splice(index, 1);
                    }
                }            
            }
        }
    }
    console.log(allPairs);
};
var n = inp.questionInt("Enter an even number: ");
goldbach(n);