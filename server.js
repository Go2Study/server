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
app.set('view engine', 'jade');

// development error handler
// will print stacktrace
/*if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}*/


// START THE CHAT SERVER
//CHAT
var http = require('http').Server(app); // Used for publishing the chat service
var io = require('socket.io')(http); // Socket.IO - used for the chat


// Chatroom

// usernames which are currently connected to the chat
var usernames = {};
var numUsers = 0;

io.on('connection', function (socket) {
    var addedUser = false;

    // when the client emits 'new message', this listens and executes
    socket.on('new message', function (data) {
        // we tell the client to execute 'new message'
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        });
    });

    // when the client emits 'add user', this listens and executes
    socket.on('add user', function (username) {
        // we store the username in the socket session for this client
        socket.username = username;
        // add the client's username to the global list
        usernames[username] = username;
        ++numUsers;
        addedUser = true;
        socket.emit('login', {
            numUsers: numUsers
        });
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });

    // when the client emits 'typing', we broadcast it to others
    socket.on('typing', function () {
        socket.broadcast.emit('typing', {
            username: socket.username
        });
    });

    // when the client emits 'stop typing', we broadcast it to others
    socket.on('stop typing', function () {
        socket.broadcast.emit('stop typing', {
            username: socket.username
        });
    });

    // when the user disconnects.. perform this
    socket.on('disconnect', function () {
        // remove the username from global usernames list
        if (addedUser) {
            delete usernames[socket.username];
            --numUsers;

            // echo globally that this client has left
            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }
    });
});

http.listen(8080, "127.0.0.1");

// START THE SERVER
// =============================================================================
//app.listen(port);
console.log('Magic happens on port ' + port);