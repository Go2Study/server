var express = require('express')
    , router = express.Router();


var path;

path = '/chat';
router.route(path)
    .get(function (req, res) {
        res.sendfile(__dirname + '/index.html');
    });

module.exports = router;