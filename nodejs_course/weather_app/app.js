const weather = require('./weather/weather');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const argv = yargs //Chaining so don
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: "Address to fetch weather for",
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorM, results) => {
    if (errorM) {
        console.log(errorM);
    } else {
        // console.log(JSON.stringify(results, undefined, 2));
        // console.log(results.latitude)
        console.log(`Weather for ${results.address}`);
        weather.getWeather(results.latitude, results.longitude,(errorM,wResults) => {
            if(errorM){
                console.log(errorM);
            }else{
                // console.log(JSON.stringify(wResults,undefined,3));
                console.log(`Temperature: ${wResults.temperature}`);
                console.log(`Feels like: ${wResults.feelsLike}`);
                console.log(`Summary: ${wResults.summary}`);
                console.log(`Wind Speed: ${wResults.windSpeed}`);
            }
        });
        // weather.getWeather(39.2673283, -76.7983067)
    }
});
// weather.getWeather(39.2590567, -76.8951551)
