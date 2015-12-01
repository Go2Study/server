var express = require('express')
    , router = express.Router();

var EventsSchedule = require('./EventsScheduleController');


path = '/events/schedule'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var pcnlist = req.param('pcnlist');
        var duration = req.param('duration');

        EventsSchedule.index(pcnlist, duration, function(err, result){
            if (err) {
                res.json({error: err});
            }
            res.json(result);
        });
    });

module.exports = router;