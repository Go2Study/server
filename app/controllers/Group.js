var express = require('express')
    , router = express.Router();


var Group = require('./GroupService');
var path;


//Fix string format for the path parameters (if any)
path = '/groups'.replace('{',':').replace('}','');
router.route(path)
.get(function (req, res) {
  
  result = Group.groupsGet(req.param('query'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/groups'.replace('{',':').replace('}','');
router.route(path)
.post(function (req, res) {
  
  result = Group.groupsPost(req.param('name'), req.param('pcnlist'), req.param('description'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/groups/{groupid}'.replace('{',':').replace('}','');
router.route(path)
.put(function (req, res) {
  
  result = Group.groupsGroupidPut(req.param('groupid'), req.param('name'), req.param('description'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/groups/{groupid}'.replace('{',':').replace('}','');
router.route(path)
.delete(function (req, res) {
  
  result = Group.groupsGroupidDelete(req.param('groupid'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/groups/{id}/events'.replace('{',':').replace('}','');
router.route(path)
.get(function (req, res) {
  
  result = Group.groupsIdEventsGet(req.param('id'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

module.exports = router;