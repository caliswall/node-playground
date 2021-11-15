const fs = require('fs');

const dataBuffer = fs.readFileSync('json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Andrew';
data.age = '42';

const personJson = JSON.stringify(data);
fs.writeFileSync('json.json', personJson);