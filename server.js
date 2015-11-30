// Get the packages we need
var express    = require('express');        // call express
var mongoose   = require('mongoose');       // MongoDB wrapper
var bodyParser = require('body-parser');
var uriUtil = require('mongodb-uri');
var morgan      = require('morgan');

var app        = express();                 // define our app using express

//MongoDB connection
var rawURI = 'mongodb://g2sadmin:G2SMONGOADMIN77@ds047524.mongolab.com:47524/go2study';
var mongoURI = uriUtil.formatMongoose(rawURI);
mongoose.connect(mongoURI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
   //We have connected
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(bodyParser());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
app.use(morgan('dev'));
app.use('/api', require('./app/controllers'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);