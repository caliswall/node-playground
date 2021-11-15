const http = require('http');
const https = require('https');

const httpUrl = 'http://api.weatherstack.com/current?access_key=45aa566523d20e6c2dff81b3b0c3e2cb&query=40,-75';

const request = http.request(httpUrl, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data += chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', () => {
  console.log('An Error', error);
});

request.end();