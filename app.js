// const express = require('express');
// const app = express();
// var port = process.env.PORT || 3000;
// app.get('/get', (req, res) => res.send('Hello World'));
// app.listen (port, () => console.log('Server is running on port'+ port));

var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
mongoose = require('mongoose'),
Task = require('./api/models/model'), //created model loading here
bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://kukudb:kukudb@my-cluster.gdjpc4s.mongodb.net/?retryWrites=true&w=majority'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// var routes = require('./api/routes/routes'); //importing route
// routes(app); //register the route


app.get('/get', (req, res) => res.send('Hello World'));

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);