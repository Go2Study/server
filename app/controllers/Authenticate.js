var express = require('express')
    , router = express.Router();
var UserModel = require('../models/User');
var jwt       = require('jsonwebtoken'); // used to create, sign, and verify tokens


router.post('/authenticate', function(req, res) {

    // find the user
    UserModel.findOne({
        pcn: req.body.pcn
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token
                //TODO Put config config secret instead hardcode
                var token = jwt.sign(user, "MYSUPERSECRET", {
                    expiresInMinutes: 1440 // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }

    });
});

module.exports = router;