var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b)
            }else{
                reject("Arguments must be numbers")
            }
        },1500)
    });
};
asyncAdd(10,'20').then((res) => {
    console.log(res)
    return asyncAdd(res, 33);
}).then((rest) => {
    console.log(rest)
}).catch((err) => {
    console.log("Arguments must be numbers");
});
// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("It worked");
//         // reject('It didn not work');
//     },1000)
// });

// somePromise.then((message) => {
//     console.log(`Success: ${message}`)
// },(errorMessage) => {
//     console.log(`Error: ${errorMessage}`)
// });
