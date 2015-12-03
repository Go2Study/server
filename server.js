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

// Body Parser used for getting POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
app.use(morgan('dev'));
app.use('/api', require('./app/controllers'));

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}


// START THE CHAT SERVER
//CHAT
var http = require('http').Server(app); // Used for publishing the chat service
var io = require('socket.io')(http); // Socket.IO - used for the chat


io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

//on chat message - emit to all users
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        socket.broadcast.emit('chat message', msg);
    });
});

http.listen(8080, "127.0.0.1");

// START THE SERVER
// =============================================================================
//app.listen(port);
console.log('Magic happens on port ' + port);