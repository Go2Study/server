var express = require('express')
    , router = express.Router()
    , User = require('../models/User');


var path;


//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {

        var pcnrequired = req.param('pcnrequired');
        var id = req.param('id');
        var query = req.param('query');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {

        var pcnrequired = req.param('pcnrequired');
        var id = req.param('id');
        var name = req.param('name');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {

        var pcnrequired = req.param('pcnrequired');
        var id = req.param('id');
        var name = req.param('name');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/events/{id}'.replace('{',':').replace('}','');
router.route(path)
    .delete(function (req, res) {

        var pcnrequired = req.param('pcnrequired');
        var id = req.param('id');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/favourites'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {

        var pcnrequired = req.param('pcnrequired');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/favourites'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {

        var pcnrequired = req.param('pcnrequired');
        var pcn = req.param('pcn');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/favourites'.replace('{',':').replace('}','');
router.route(path)
    .delete(function (req, res) {

        var pcnrequired = req.param('pcnrequired');
        var pcn = req.param('pcn');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/groups/{id}'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {

        var pcnrequired = req.param('pcnrequired');
        var id = req.param('id');
        var query = req.param('query');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/users/{pcn}'.replace('{',':').replace('}','');
router.route(path)
    .get(function (req, res) {

        var pcn = req.param('pcn');
        var user = req.param('user');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/users/{pcn}'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {

        var pcn = req.param('pcn');
        var photo = req.param('photo');
        

  
    });

//Fix string format for the path parameters (if any)
path = '/users/{pcn}'.replace('{',':').replace('}','');
router.route(path)
    .post(function (req, res) {

        var pcn = req.param('pcn');
        var firstName = req.param('firstName');
        var lastName = req.param('lastName');
        var email = req.param('email');
        var photo = req.param('photo');
        var ipaddress = req.param('ipaddress');
        var privateAgenda = req.param('privateAgenda');
        var privateLocation = req.param('privateLocation');


        //TODO check if pcn exists in Fontys
        var user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.pcn = pcn;
        user.email = email;
        user.photo = photo;
        user.ipaddress = ipaddress;
        user.im_status = 'in_campus';
        user.privateAgenda = privateAgenda;
        user.privateLocation = privateLocation;

        // save the user
        user.save(function(err) {
          if (err)
            res.send(err);

          res.json({ message: 'User (pcn: '+pcn+' has been created.' });
        });
  
    });

//Fix string format for the path parameters (if any)
path = '/users/{pcn}/active'.replace('{',':').replace('}','');
router.route(path)
    .put(function (req, res) {

        var pcn = req.param('pcn');
        var ipaddress = req.param('ipaddress');

        // Find the user with this pcn and update his current ipaddress
        User.findOne({pcn: pcn}, function(err, user) {

          if (err)
            res.send({error: 'Invalid user.'});

          user.ipaddress = ipaddress;  // update the bears info

          // save the bear
          user.save(function(err) {
            if (err)
              res.send(err);

            res.json({ message: 'User ip address updated!' });
          });

        });


    });

module.exports = router;