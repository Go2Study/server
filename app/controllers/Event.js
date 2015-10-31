var express = require('express')
    , router = express.Router();


var Event = require('./EventService');
var path;


//Fix string format for the path parameters (if any)
path = '/events'.replace('{',':').replace('}','');
router.route(path)
.post(function (req, res) {
  
  result = Event.eventsPost(req.param('name'), req.param('startime'), req.param('location'), req.param('startimeopt'), req.param('description'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/events/{id}'.replace('{',':').replace('}','');
router.route(path)
.get(function (req, res) {
  
  result = Event.eventsIdGet(req.param('id'), req.param('query'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/events/{id}'.replace('{',':').replace('}','');
router.route(path)
.put(function (req, res) {
  
  result = Event.eventsIdPut(req.param('id'), req.param('nameopt'), req.param('startimeopt'), req.param('durationopt'), req.param('description'), req.param('locationopt'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

//Fix string format for the path parameters (if any)
path = '/events/{id}'.replace('{',':').replace('}','');
router.route(path)
.delete(function (req, res) {
  
  result = Event.eventsIdDelete(req.param('id'));

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
});

module.exports = router;