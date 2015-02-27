var express = require('express'),
 	mongoose = require('mongoose'),
	colors = require('colors'); 


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

// Config Object
var config = {
	rootPath: __dirname,
	db : 'mongodb://localhost/mean-dev',
	port : process.env.PORT || 3000
}

// EXPRESS setup
require('./server/config/express')(app, config);

// MongoDB setup via mongoose 
require('./server/config/mongoose')(config);

// Config Routes/API
require('./server/config/routes')(app);

// GO GO GO 
app.listen(config.port);
console.log("Listening on port ".green + config.port);
