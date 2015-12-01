var express = require('express')
    , router = express.Router();

var path;
var UserFavourites = require('./UserFavouritesService');

path = '/users/{pcn}/favourites'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {
        var pcn = req.param('pcn');

        UserFavourites.index(pcn, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    })

    .post(function (req, res) {
        var pcn = req.param('pcn');
        var pcnfavourite = req.param('pcnfavourite');

        UserFavourites.create(pcn, pcnfavourite, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    })

    .delete(function (req, res) {
        var pcn = req.param('pcn');
        var pcnfavourite = req.param('pcn');

        UserFavourites.usersPcnFavouritesDelete(pcn, pcnfavourite, function(err, result){
            if (err)
                res.json({error: err});
            res.json(result);
        });
    });

module.exports = router;