var express = require('express')
    , router = express.Router();


var path, httpMethod;
var UserFavourites = require('./UserFavouritesService');


path = '/users/{pcn}/favourites'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var pcn = req.param('pcn').value;
        

        UserFavourites.index(pcn, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

path = '/users/{pcn}/favourites'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {
        var pcn = req.param('pcn').value;
        var pcnfavourite = req.param('pcnfavourite').value;
        

        UserFavourites.create(pcn, pcnfavourite, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

path = '/users/{pcn}/favourites'.replace('{',':').replace('}','');
router.route(path)
    .delete(function (req, res) {
        var pcn = req.param('pcn').value;
        var pcnfavourite = req.param('pcn').value;
        

        UserFavourites.usersPcnFavouritesDelete(pcn, pcnfavourite, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

module.exports = router;