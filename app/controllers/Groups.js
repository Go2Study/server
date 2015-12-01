var express = require('express')
    , router = express.Router();


var path;
var Groups = require('./GroupsService');

path = '/groups'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var query = req.param('query');

        Groups.index(query, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });

    });

path = '/groups'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {
        var name = req.param('name');
        var pcnlist = req.param('pcnlist');
        var description = req.param('description');

        Groups.create(name, pcnlist, description, function(err, result){
            if (err) {
                res.json({error: err});
            }
            res.json(result);
        });
    });

path = '/groups/{groupid}'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var groupid = req.params.groupid;

        Groups.show(groupid, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    })

    .put(function (req, res) {
        var groupid = req.param('groupid');
        var name = req.param('name');
        var description = req.param('description');

        Groups.update(groupid, name, description, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    })

    .delete(function (req, res) {
        var groupid = req.param('groupid');

        Groups.delete(groupid, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    });

module.exports = router;