var express = require('express')
    , router = express.Router();

router.use('/', require('./Users'));
router.use('/', require('./Group'));
router.use('/', require('./Event'));

router.get('/', function(req, res) {
    res.send('Home page');
});

module.exports = router;