var express = require('express')
    , router = express.Router();


var User = require('./UserService');
var path;


//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/events/{id}'.replace('{',':').replace('}','');
router.route(path)
.get(function (req, res) {
  
  result = User.usersPcnrequiredEventsIdGet(req.param('pcnrequired'), req.param('id'), req.param('query'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/events/{id}'.replace('{',':').replace('}','');
router.route(path)
.put(function (req, res) {
  
  result = User.usersPcnrequiredEventsIdPut(req.param('pcnrequired'), req.param('id'), req.param('name'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/events/{id}'.replace('{',':').replace('}','');
router.route(path)
.post(function (req, res) {
  
  result = User.usersPcnrequiredEventsIdPost(req.param('pcnrequired'), req.param('id'), req.param('name'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/events/{id}'.replace('{',':').replace('}','');
router.route(path)
.delete(function (req, res) {
  
  result = User.usersPcnrequiredEventsIdDelete(req.param('pcnrequired'), req.param('id'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/favourites'.replace('{',':').replace('}','');
router.route(path)
.get(function (req, res) {
  
  result = User.usersPcnrequiredFavouritesGet(req.param('pcnrequired'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/favourites'.replace('{',':').replace('}','');
router.route(path)
.post(function (req, res) {
  
  result = User.usersPcnrequiredFavouritesPost(req.param('pcnrequired'), req.param('pcn'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/favourites'.replace('{',':').replace('}','');
router.route(path)
.delete(function (req, res) {
  
  result = User.usersPcnrequiredFavouritesDelete(req.param('pcnrequired'), req.param('pcn'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/users/{pcnrequired}/groups/{id}'.replace('{',':').replace('}','');
router.route(path)
.get(function (req, res) {
  
  result = User.usersPcnrequiredGroupsIdGet(req.param('pcnrequired'), req.param('id'), req.param('query'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/users/{pcn}'.replace('{',':').replace('}','');
router.route(path)
.get(function (req, res) {
  
  result = User.usersPcnGet(req.param('pcn'), req.param('user'));
  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/users/{pcn}'.replace('{',':').replace('}','');
router.route(path)
.put(function (req, res) {
  
  result = User.usersPcnPut(req.param('pcn'), req.param('photo'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/users/{pcn}'.replace('{',':').replace('}','');
router.route(path)
.post(function (req, res) {
  
  result = User.usersPcnPost(req.param('pcn'), req.param('firstName'), req.param('lastName'), req.param('email'), req.param('photo'));
  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/users/{pcn}/active'.replace('{',':').replace('}','');
router.route(path)
.put(function (req, res) {
  
  result = User.usersPcnActivePut(req.param('pcn'), req.param('ipaddress'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

module.exports = router;