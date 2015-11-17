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
        var endtime = req.param('endtime').value;
        var location = req.param('location').value;
        var description = req.param('description').value;
        var pcnlist = req.param('pcnlist').value;
        

        Events.create(name, startime, endtime, location,  description, pcnlist, function(err, result){
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
        var name = req.param('name').value;
        var startime = req.param('startime').value;
        var duration = req.param('duration').value;
        var description = req.param('description').value;
        var location = req.param('location').value;
        

        Events.update(id, name, startime, duration, description, location, function(err, result){
            if (err) {
                res.json({error: err});
            }
            res.send(result);
        });

        
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