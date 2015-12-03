var express = require('express')
    , router = express.Router();


var path, httpMethod;
var UserGroups = require('./UserGroupsController');


path = '/users/{pcn}/groups'.replace('{',':').replace('}','');
console.log(path);
router.route(path)
    .get(function (req, res) {
        var pcn = req.param('pcn');
        var query = req.param('query');
        console.log(pcn);

        UserGroups.index(pcn, query, function(err, result){
            if (err) {
                res.json({error: err});
            }
            res.json(result);
        });
    });

module.exports = router;