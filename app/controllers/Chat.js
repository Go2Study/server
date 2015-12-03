var express = require('express')
    , router = express.Router();


var path;

path = '/chat';
router.route(path)
    .get(function (req, res) {
        res.sendfile('./index.html');
    });

module.exports = router;