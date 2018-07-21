const yargs = require('yargs');
const axios = require('axios');
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

var enAdd = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${enAdd}`;
axios.get(geocodeURL).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find address');
    }
    // console.log(response.data);
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherURL = `https://api.darksky.net/forecast/7559731c585814f3c2efa58a679f2aad/${lat},${lng}`;
    // console.log(weatherURL)
    return axios.get(weatherURL).then((response2) => {
        // console.log(response.data.currently)
        var rdata = {
            latitude:response.data.results[0].geometry.location.lat,
            longitude:response.data.results[0].geometry.location.lng,
            address:response.data.results[0].formatted_address,
            temp:response2.data.currently.temperature,
            feelsLike:response2.data.currently.apparentTemperature,
            windSpeed:response2.data.currently.windSpeed,
            summary:response2.data.currently.summary
        };
        // console.log(JSON.stringify(data,undefined,2))
        data = rdata;
        console.log(JSON.stringify(data,undefined,2))
    }).catch((e) => {
        console.log("Error has happened")
    })
}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log("Unable to connect")
    }else{
        console.log(e.message)
    }
})
// weather.getWeather(39.2590567, -76.8951551)