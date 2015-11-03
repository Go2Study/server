var express = require('express')
    , router = express.Router();


var path, httpMethod;
var Groups = require('./GroupsService');


path = '/groups'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var query = req.param('query').value;
        

        Groups.index(query, function(err, result){
            if (err) {
                next(err);
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

path = '/groups'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {
        var name = req.param('name').value;
        var pcnlist = req.param('pcnlist').value;
        var description = req.param('description').value;
        

        Groups.create(name, pcnlist, description, function(err, result){
            if (err) {
                next(err);
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

path = '/groups/{groupid}'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {
        var groupid = req.param('groupid').value;
        var name = req.param('name').value;
        var description = req.param('description').value;
        

        Groups.update(groupid, name, description, function(err, result){
            if (err) {
                next(err);
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

path = '/groups/{groupid}'.replace('{',':').replace('}','');
router.route(path)
    .delete(function (req, res) {
        var groupid = req.param('groupid').value;
        

        Groups.delete(groupid, function(err, result){
            if (err) {
                next(err);
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

module.exports = router;