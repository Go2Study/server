var express = require('express')
    , router = express.Router();


var path;
var Events = require('./EventsService');
var EventsSchedule = require('./EventsScheduleController');


path = '/events'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var query = req.params.query;

        Events.index(query, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    });

path = '/events'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {
        var name = req.param('name');
        var startTime = req.param('startTime');
        var endTime = req.param('endTime');
        var location = req.param('location');
        var description = req.param('description');
        var pcnlist = req.param('pcnlist');
        var group = req.param('group');

        Events.create(name, startTime, endTime, location,  description, pcnlist, group, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    });

path = '/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var id = req.params.id;

        Events.show(id, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    })

    .put(function (req, res) {
        var id = req.param('id');
        var name = req.param('name');
        var startTime = req.param('startTime');
        var endTime = req.param('endTime');
        var description = req.param('description');
        var location = req.param('location');

        Events.update(id, name, startTime, endTime, description, location, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    })

    .delete(function (req, res) {
        var id = req.param('id').value;

        Events.delete(id, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    });

path = '/events/schedule'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        console.log('im here');
        var pcnlist = req.param('pcnlist');
        var duration = req.param('duration');
        console.log('im here');
        EventsSchedule.index(pcnlist, duration, function(err, result){
            if (err)
                res.json({error: err});

            res.json(result);
        });
    });

module.exports = router;