var express = require('express')
    , router = express.Router();


var path, httpMethod;
var GroupEvents = require('./GroupEventsService');


path = '/groups/{id}/events'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var id = req.param('id').value;
        

        GroupEvents.index(id, function(err, result){
            if (err) {
                res.send({error: err});
            }
            res.send(result);
        });

        res.send({'error': { 'code' : '401', 'message' : 'Bad request.' }});   
        
    });

module.exports = router;