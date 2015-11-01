var express = require('express')
    , router = express.Router()
    , Event = require('../models/Event');


var path;


//Fix string format for the path parameters (if any)
path = '/events'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {

        var name = req.param('name');
        var startime = req.param('startime');
        var location = req.param('location');
        var startimeopt = req.param('startimeopt');
        var description = req.param('description');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {

        var id = req.param('id');
        var query = req.param('query');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {

        var id = req.param('id');
        var nameopt = req.param('nameopt');
        var startimeopt = req.param('startimeopt');
        var durationopt = req.param('durationopt');
        var description = req.param('description');
        var locationopt = req.param('locationopt');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .delete(function (req, res) {

        var id = req.param('id');
        

  
    });

module.exports = router;