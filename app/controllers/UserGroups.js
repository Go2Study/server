var express = require('express')
    , router = express.Router();


var path, httpMethod;
var UserGroups = require('./UserGroupsService');


path = '/users/{pcn}/groups'.replace('{',':').replace('}','');
console.log(path);
router.route(path)
    .get(function (req, res) {
        var pcn = req.param('pcn');
        var query = req.param('query');
        console.log(pcn);

        UserGroups.index(pcn, query, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });
    });

module.exports = router;