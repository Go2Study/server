var express = require('express')
    , router = express.Router();


var path, httpMethod;
var Events = require('./EventsService');


path = '/events'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var query = req.param('query').value;
        

        Events.index(query, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

path = '/events'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {
        var name = req.param('name').value;
        var startime = req.param('startime').value;
        var location = req.param('location').value;
        var startimeopt = req.param('startimeopt').value;
        var description = req.param('description').value;
        

        Events.create(name, startime, location, startimeopt, description, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

path = '/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {
        var id = req.param('id').value;
        var nameopt = req.param('nameopt').value;
        var startimeopt = req.param('startimeopt').value;
        var durationopt = req.param('durationopt').value;
        var description = req.param('description').value;
        var locationopt = req.param('locationopt').value;
        

        Events.update(id, nameopt, startimeopt, durationopt, description, locationopt, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

path = '/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .delete(function (req, res) {
        var id = req.param('id').value;
        

        Events.delete(id, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

module.exports = router;