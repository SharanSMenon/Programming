const request = require('request');
var geocodeAddress = (address) => {
  return new Promise(function (resolve, reject) {
    var enAdd = encodeURIComponent(address);
    // console.log(enAdd)
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${enAdd}`
    }, (error, response, body) => {
      var body = JSON.parse(body);
      if (error) {
        reject("Unable to connect")
      } else if (body.status === 'ZERO_RESULTS') {
        reject("Unable to find address.");
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
}
geocodeAddress('21042').then((location) => { //Success
  console.log(JSON.stringify(location, undefined, 2));
}, (errorM) => { //Error
  console.log(errorM)
})