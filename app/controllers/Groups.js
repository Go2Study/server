var express = require('express')
    , router = express.Router();


var path, httpMethod;
var Groups = require('./GroupsService');


path = '/groups'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var query = req.param('query');
        

        Groups.index(query, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

    });

path = '/groups'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {
        var name = req.param('name');
        var pcnlist = req.param('pcnlist');
        var description = req.param('description');
        console.log("pcn list: "+ pcnlist);
        

        Groups.create(name, pcnlist, description, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

    });

path = '/groups/{groupid}'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {
        var groupid = req.param('groupid').value;
        var name = req.param('name').value;
        var description = req.param('description').value;
        

        Groups.update(groupid, name, description, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

path = '/groups/{groupid}'.replace('{',':').replace('}','');
router.route(path)
    .delete(function (req, res) {
        var groupid = req.param('groupid');
        

        Groups.delete(groupid, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

    });

module.exports = router;