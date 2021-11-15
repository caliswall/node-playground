const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(__dirname);
console.log();

const app = express();

// Define paths for Express
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//case aware
//setup handle bars and location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//static directory
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Andrew Wall'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Andrew Wall'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Andrew Wall',
    message: 'Some kind of helpful message'
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Grantham',
    forecast: 'String info about the forcast'
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew Wall',
    errorMessage: 'Help article not found.'
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew Wall',
    errorMessage: 'Page not found!'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});