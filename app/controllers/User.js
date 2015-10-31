var express = require('express')
    , router = express.Router()
    , User = require('../models/user')
    , auth = require('../middlewares/auth');

/*router.post('/', auth, function(req, res) {
    user = req.user.id;
    text = req.body.text;

    Comment.create(user, text, function (err, comment) {
        res.redirect('/')
    })
});*/

router.get('/user', function(req, res) {
    User.get(req.params.id, function (err, comment) {
        res.render('comments/comment', {comment: comment})
    })
});

module.exports = router;