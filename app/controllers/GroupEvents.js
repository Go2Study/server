var express = require('express')
    , router = express.Router();


var path;
var GroupEvents = require('./GroupEventsController');


path = '/groups/{id}/events'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var id = req.param('id');

        GroupEvents.index(id, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    });

module.exports = router;