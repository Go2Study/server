'use strict';

var url = require('url');


var Event = require('./EventService');


module.exports.eventsPost = function eventsPost (req, res, next) {
  var name = req.swagger.params['name'].value;
  var startime = req.swagger.params['startime'].value;
  var location = req.swagger.params['location'].value;
  var startimeopt = req.swagger.params['startimeopt'].value;
  var description = req.swagger.params['description'].value;
  

  var result = Event.eventsPost(name, startime, location, startimeopt, description);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.eventsIdGet = function eventsIdGet (req, res, next) {
  var id = req.swagger.params['id'].value;
  var query = req.swagger.params['query'].value;
  

  var result = Event.eventsIdGet(id, query);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.eventsIdPut = function eventsIdPut (req, res, next) {
  var id = req.swagger.params['id'].value;
  var nameopt = req.swagger.params['nameopt'].value;
  var startimeopt = req.swagger.params['startimeopt'].value;
  var durationopt = req.swagger.params['durationopt'].value;
  var description = req.swagger.params['description'].value;
  var locationopt = req.swagger.params['locationopt'].value;
  

  var result = Event.eventsIdPut(id, nameopt, startimeopt, durationopt, description, locationopt);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.eventsIdDelete = function eventsIdDelete (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = Event.eventsIdDelete(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
