var express = require('express')
    , router = express.Router();

router.use('/', require('./Users'));
router.use('/', require('./Groups'));
router.use('/', require('./Events'));

router.get('/', function(req, res) {
    res.send('Home page');
});

module.exports = router;