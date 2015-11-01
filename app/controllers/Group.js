var express = require('express')
    , router = express.Router()
    , Group = require('../models/Group');


var path;


//Fix string format for the path parameters (if any)
path = '/groups'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {

        var query = req.param('query');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/groups'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {

        var name = req.param('name');
        var pcnlist = req.param('pcnlist');
        var description = req.param('description');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/groups/{groupid}'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {

        var groupid = req.param('groupid');
        var name = req.param('name');
        var description = req.param('description');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/groups/{groupid}'.replace('{',':').replace('}','');
router.route(path)
    .delete(function (req, res) {

        var groupid = req.param('groupid');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/groups/{id}/events'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {

        var id = req.param('id');
        

  
    });

module.exports = router;