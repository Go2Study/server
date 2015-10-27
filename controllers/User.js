'use strict';

var url = require('url');


var User = require('./UserService');



module.exports.usersPcnrequiredEventsIdGet = function usersPcnrequiredEventsIdGet (req, res, next) {
  var pcnrequired = req.swagger.params['pcnrequired'].value;
  var id = req.swagger.params['id'].value;
  var query = req.swagger.params['query'].value;
  

  var result = User.usersPcnrequiredEventsIdGet(pcnrequired, id, query);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersPcnrequiredEventsIdPut = function usersPcnrequiredEventsIdPut (req, res, next) {
  var pcnrequired = req.swagger.params['pcnrequired'].value;
  var id = req.swagger.params['id'].value;
  var name = req.swagger.params['name'].value;
  

  var result = User.usersPcnrequiredEventsIdPut(pcnrequired, id, name);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersPcnrequiredEventsIdPost = function usersPcnrequiredEventsIdPost (req, res, next) {
  var pcnrequired = req.swagger.params['pcnrequired'].value;
  var id = req.swagger.params['id'].value;
  var name = req.swagger.params['name'].value;
  

  var result = User.usersPcnrequiredEventsIdPost(pcnrequired, id, name);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersPcnrequiredEventsIdDelete = function usersPcnrequiredEventsIdDelete (req, res, next) {
  var pcnrequired = req.swagger.params['pcnrequired'].value;
  var id = req.swagger.params['id'].value;
  

  var result = User.usersPcnrequiredEventsIdDelete(pcnrequired, id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersPcnrequiredFavouritesGet = function usersPcnrequiredFavouritesGet (req, res, next) {
  var pcnrequired = req.swagger.params['pcnrequired'].value;
  

  var result = User.usersPcnrequiredFavouritesGet(pcnrequired);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersPcnrequiredFavouritesPost = function usersPcnrequiredFavouritesPost (req, res, next) {
  var pcnrequired = req.swagger.params['pcnrequired'].value;
  var pcn = req.swagger.params['pcn'].value;
  

  var result = User.usersPcnrequiredFavouritesPost(pcnrequired, pcn);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersPcnrequiredFavouritesDelete = function usersPcnrequiredFavouritesDelete (req, res, next) {
  var pcnrequired = req.swagger.params['pcnrequired'].value;
  var pcn = req.swagger.params['pcn'].value;
  

  var result = User.usersPcnrequiredFavouritesDelete(pcnrequired, pcn);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersPcnrequiredGroupsIdGet = function usersPcnrequiredGroupsIdGet (req, res, next) {
  var pcnrequired = req.swagger.params['pcnrequired'].value;
  var id = req.swagger.params['id'].value;
  var query = req.swagger.params['query'].value;
  

  var result = User.usersPcnrequiredGroupsIdGet(pcnrequired, id, query);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersPcnGet = function usersPcnGet (req, res, next) {
  var pcn = req.swagger.params['pcn'].value;
  var user = req.swagger.params['user'].value;
  

  var result = User.usersPcnGet(pcn, user);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersPcnPut = function usersPcnPut (req, res, next) {
  var pcn = req.swagger.params['pcn'].value;
  var photo = req.swagger.params['photo'].value;
  

  var result = User.usersPcnPut(pcn, photo);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersPcnPost = function usersPcnPost (req, res, next) {
  var pcn = req.swagger.params['pcn'].value;
  var firstName = req.swagger.params['firstName'].value;
  var lastName = req.swagger.params['lastName'].value;
  var email = req.swagger.params['email'].value;
  var photo = req.swagger.params['photo'].value;

  var result = User.usersPcnPost(pcn, firstName, lastName, email, photo);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.usersPcnActivePut = function usersPcnActivePut (req, res, next) {
  var pcn = req.swagger.params['pcn'].value;
  var ipaddress = req.swagger.params['ipaddress'].value;
  

  var result = User.usersPcnActivePut(pcn, ipaddress);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
