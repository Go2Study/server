var express = require('express')
    , router = express.Router();

var jwt       = require('jsonwebtoken'); // used to create, sign, and verify tokens


// Route the Auth path first, so that the middleware does not check it for token
router.use('/', require('./Authenticate'));

// Route middleware to verify token
router.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, "MYSUPERSECRET", function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

//Route all paths, which require authentication
router.use('/', require('./Users'));
router.use('/', require('./UserGroups'));
router.use('/', require('./UserEvents'));
router.use('/', require('./UserFavourites'));
router.use('/', require('./Groups'));
router.use('/', require('./GroupEvents'));
router.use('/', require('./Events'));
router.use('/', require('./EventsSchedule'));


router.get('/', function(req, res) {
    res.send('Home page');
});

module.exports = router;