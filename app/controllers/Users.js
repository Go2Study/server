var express = require('express')
    , router = express.Router();


var path, httpMethod;
var Users = require('./UsersService');


path = '/users'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var user = (typeof req.param('user') === 'undefined') ? '0' : req.param('user').value;

        Users.index(user, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });
        
    });

path = '/users'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {
        var firstName = req.param('firstname');
        var lastName = req.param('lastname');
        var pcn = req.param('pcn');
        var email = req.param('email');
        var photo = req.param('photo');
        var ipaddress = req.param('ipaddress');


        Users.create(firstName, lastName, pcn, email, photo, ipaddress, function(err, result){
            if (err) {
                console.log(err);
                res.send({error: err});
            }

            res.json(result);
        });


    });

path = '/users/{pcn}'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {
        var pcn = req.param('pcn').value;
        var photo = req.param('photo').value;
        

        Users.update(pcn, photo, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

module.exports = router;