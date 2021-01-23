const express = require('express');
const { animals } = require('./data/animals.json');
// const fs = require('fs'); //used to write data to the animals.json file
// const path = require('path'); //makes our file system a little more predictable and easier to interface with Heroku
const { type } = require('os');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// tells heroku where to go
const PORT = process.env.PORT || 3001;

// instantiate the serve
const app = express();

// ----------------------------------------MIDDLEWARE ----------------------------------------
// parse incoming string or array data
app.use(express.urlencoded({ extended:true }));
// parse incoming JSON data
app.use(express.json());

// this tells the server that anytime a client navigates to <ourhost>/api, the app will use the router that we set up in apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// instructs server to make certain files readily available and not gate behind server endpoint
app.use(express.static('public'));

// ---------------------------------------- FUNCTIONS ----------------------------------------
// // ability to filter results or what you are looking for
// function filterByQuery(query, animalsArray) {
// this function was moved to lib/animals.js

// findById that takes the id and array of animals and returns a single animal object
// function findById(id, animalsArray) {
// this function was moved to lib/animals.js

// function to create a new animal
//function createNewAnimal(body, animalsArray) {
// this function was moved to lib/animals.js

// function to validate the new animal data coming in
//function validateAnimal(animal) {
// this function was moved to lib/animals.js

// ---------------------------------------- GET DATA FROM THE SERVER ----------------------------------------
// // ROUTE add the route to get the information
// app.get('/api/animals', (req, res) => {
// this route moved to routes/apiRoutes/animalRoutes.js

// // ROUTE adds id to the route for the animals
// app.get('/api/animals/:id', (req, res) => {
// this route moved to routes/apiRoutes/animalRoutes.js

// ROUTE used for creating the homepage index.html (main page)
//app.get('/', (req, res) => {
// this route moved to routes/htmlRoutes/index.js

// ROUTE used for creating the animals page
//app.get('/animals', (req, res) => {
// this route moved to routes/htmlRoutes/index.js

// ROUTE used for creating the zookeepers page
//app.get('/zookeepers', (req, res) => {
// this route moved to routes/htmlRoutes/index.js

// ---------------------------------------- POST DATA TO THE SERVER ----------------------------------------
// app.post('/api/animals', (req, res) => {
// this route moved to routes/apiRoutes/animalRoutes.js

// ---------------------------------------- SERVER TO LISTEN ----------------------------------------
// get the server to listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });