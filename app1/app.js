/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {

	// print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
/*MongoClient.connect("mongodb://b25a4466-3e13-496d-b170-03df3e843a56:71259e0e-f9e9-47c0-861e-4550da7a0553@169.53.241.182:13491/db", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }else{
  	console.log("Error: " + err);
  }
});*/

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'public/main.html' 
    })
    .when('/#main', {
    	controller: 'MainController',
    	templateUrl: 'public/main.html'
    }) 
    .otherwise({ 
      redirectTo: 'http://www.twitter.com/elhenrysalas' 
    }); 
});