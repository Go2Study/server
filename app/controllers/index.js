var express = require('express')
    , router = express.Router();

router.use('/', require('./Users'));
router.use('/', require('./UserGroups'));
router.use('/', require('./UserEvents'));
router.use('/', require('./UserFavourites'));
router.use('/', require('./Groups'));
router.use('/', require('./GroupEvents'));
router.use('/', require('./Events'));
router.use('/', require('./EventsSchedule'));


router.get('/', function(req, res) {
    res.send('Home page');
});

module.exports = router;