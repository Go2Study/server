var express = require('express')
    , router = express.Router();

router.use('/', require('./user'));

router.get('/', function(req, res) {
    res.send('Home page')
});

module.exports = router;