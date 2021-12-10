const request = require('postman-request');

const forecast = (longtitude, latitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=45aa566523d20e6c2dff81b3b0c3e2cb&query=' + latitude + ',' + longtitude;
  // Intresting passing json true automatically parses JSON data.
  request({url, json: true }, (error, {body}) => {
    if (error) {
      callback('Unable to connect to the weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined,
        body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +' degrees out but feels more like ' + body.current.feelslike + ' degress.'
      );
    }
  });
}

module.exports = forecast;