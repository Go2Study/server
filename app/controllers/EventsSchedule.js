var express = require('express')
    , router = express.Router();

var EventsSchedule = require('./EventsScheduleController');


path = '/events/schedule'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var pcnlist = req.param('pcnlist').value;
        var duration = req.param('duration').value;

        EventsSchedule.index(pcnlist, duration, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});

    });

module.exports = router;