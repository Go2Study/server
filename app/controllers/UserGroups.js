var express = require('express')
    , router = express.Router();


var path, httpMethod;
var UserGroups = require('./UserGroupsService');


path = '/users/{pcn}/groups/{id}'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var pcn = req.param('pcn').value;
        var id = req.param('id').value;
        var query = req.param('query').value;
        

        UserGroups.index(pcn, id, query, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

module.exports = router;