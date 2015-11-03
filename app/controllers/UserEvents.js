var express = require('express')
    , router = express.Router();


var path, httpMethod;
var UserEvents = require('./UserEventsService');


path = '/users/{pcn}/events'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var pcn = req.param('pcn').value;
        var query = req.param('query').value;
        

        UserEvents.index(pcn, query, function(err, result){
            if (err) {
                next(err);
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

path = '/users/{pcn}/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {
        var pcn = req.param('pcn').value;
        var id = req.param('id').value;
        var name = req.param('name').value;
        

        UserEvents.update(pcn, id, name, function(err, result){
            if (err) {
                next(err);
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

path = '/users/{pcn}/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .delete(function (req, res) {
        var pcn = req.param('pcn').value;
        var id = req.param('id').value;
        

        UserEvents.delete(pcn, id, function(err, result){
            if (err) {
                next(err);
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

module.exports = router;