'use strict';

var url = require('url');


var Group = require('./GroupService');


module.exports.groupsGet = function groupsGet (req, res, next) {
  var query = req.swagger.params['query'].value;
  

  var result = Group.groupsGet(query);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.groupsPut = function groupsPut (req, res, next) {
  var groupid = req.swagger.params['groupid'].value;
  var name = req.swagger.params['name'].value;
  var description = req.swagger.params['description'].value;
  

  var result = Group.groupsPut(groupid, name, description);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.groupsPost = function groupsPost (req, res, next) {
  var name = req.swagger.params['name'].value;
  var pcnlist = req.swagger.params['pcnlist'].value;
  var description = req.swagger.params['description'].value;
  

  var result = Group.groupsPost(name, pcnlist, description);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.groupsDelete = function groupsDelete (req, res, next) {
  var groupid = req.swagger.params['groupid'].value;
  

  var result = Group.groupsDelete(groupid);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.groupsIdEventsGet = function groupsIdEventsGet (req, res, next) {
  var id = req.swagger.params['id'].value;
  

  var result = Group.groupsIdEventsGet(id);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
