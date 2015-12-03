var express = require('express')
    , router = express.Router();

var path;
var UserEvents = require('./UserEventsController');

path = '/users/{pcn}/events'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var pcn = req.param('pcn');
        var query = (typeof req.param('query') === 'undefined') ? '' : req.param('query');

        UserEvents.index(pcn, query, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    });

path = '/users/{pcn}/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {
        var pcn = req.param('pcn');
        var id = req.param('id');
        var name = req.param('name');

        UserEvents.update(pcn, id, name, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    })

    .delete(function (req, res) {
        var pcn = req.param('pcn');
        var id = req.param('id');

        UserEvents.delete(pcn, id, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    });

module.exports = router;