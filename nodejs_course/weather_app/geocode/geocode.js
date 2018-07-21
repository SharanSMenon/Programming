const request = require('request');
console.log("Starting Geocode.js");
let geocodeAddress = (address, callback) => {
    var enAdd = encodeURIComponent(address);
    // console.log(enAdd)
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${enAdd}`
    }, (error, response, body) => {
        var body = JSON.parse(body);
        if (error){
            callback("Unable to connect")
        }else if(body.status === 'ZERO_RESULTS'){  
            callback("Unable to find address.");
        }
        else if(body.status === 'OK'){
            callback(undefined,{
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};
module.exports.geocodeAddress = geocodeAddress;
