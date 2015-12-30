var express = require('express')
    , router = express.Router();


var path;
var Users = require('./UsersController');


path = '/users'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var query = (typeof req.param('query') === 'undefined') ? '' : req.param('query');

        Users.index(query, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    });

path = '/users'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {
        var firstName = req.param('firstName');
        var lastName = req.param('lastName');
        var pcn = req.param('pcn');
        var email = req.param('email');
        var photo = req.param('photo');
        var ipaddress = req.param('ipaddress');
        var className = req.param('className');

        Users.create(firstName, lastName, pcn, email, className, photo, ipaddress, function(err, user){
            if (err)
                res.json({error: err});
            res.json(user);
        });
    });

path = '/users/{pcn}'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {
        var objForUpdate = {};
        var pcn;
        if (typeof req.params.pcn !== 'undefined') pcn = req.params.pcn;
        if (typeof req.params.displayName !== 'undefined') objForUpdate.displayName = req.params.displayName;
        if (typeof req.params.email !== 'undefined') objForUpdate.email = req.params.email;
        if (typeof req.params.photo !== 'undefined') objForUpdate.photo = req.params.photo;

        var setObj = { $set: objForUpdate };

        Users.update(pcn, setObj, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    })

    .get(function (req, res) {
        var pcn = req.params.pcn;

        Users.show(pcn, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    });

module.exports = router;