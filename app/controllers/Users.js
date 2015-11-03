var express = require('express')
    , router = express.Router();


var path, httpMethod;
var Users = require('./UsersService');


path = '/users'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var user = req.param('user').value;

        Users.index(user, function(err, result){
            if (err) {
                next(err);
            }
            res.send(result);
        });
        
    });

path = '/users'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {
        var firstName = req.param('firstName').value;
        var lastName = req.param('lastName').value;
        var pcn = req.param('pcn').value;
        var email = req.param('email').value;
        var photo = req.param('photo').value;
        var ipaddress = req.param('ipaddress').value;
        

        Users.create(firstName, lastName, pcn, email, photo, ipaddress, function(err, result){
            if (err) {
                next(err);
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

path = '/users/{pcn}'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {
        var pcn = req.param('pcn').value;
        var photo = req.param('photo').value;
        

        Users.update(pcn, photo, function(err, result){
            if (err) {
                next(err);
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

module.exports = router;