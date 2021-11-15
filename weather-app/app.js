const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];
if (!address) {
  return console.log('Please enter a location');
}

geocode(address, (error, {longtitude, latitude, location} = {}) => {
  if (error) {
    return console.log('Error', error);    
  }
  forecast(longtitude, latitude, (error, forecastData) => {
    if (error) {
      return console.log('Error', error);
    }

    console.log(location);
    console.log(forecastData);
  });

});