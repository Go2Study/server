'use strict';
var db = require('../databases/dbHelper.js');

exports.usersPcnrequiredEventsIdGet = function(pcnrequired, id, query) {

  var examples = {};
  
  examples['application/json'] = "";
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.usersPcnrequiredEventsIdPut = function(pcnrequired, id, name) {

  var examples = {};
  

  
}
exports.usersPcnrequiredEventsIdPost = function(pcnrequired, id, name) {

  var examples = {};
  

  
}
exports.usersPcnrequiredEventsIdDelete = function(pcnrequired, id) {

  var examples = {};
  

  
}
exports.usersPcnrequiredFavouritesGet = function(pcnrequired) {

  var examples = {};
  
  examples['application/json'] = "";
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.usersPcnrequiredFavouritesPost = function(pcnrequired, pcn) {

  var examples = {};
  

  
}
exports.usersPcnrequiredFavouritesDelete = function(pcnrequired, pcn) {

  var examples = {};
  

  
}
exports.usersPcnrequiredGroupsIdGet = function(pcnrequired, id, query) {

  var examples = {};
  
  examples['application/json'] = "";
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.usersPcnGet = function(pcn, user) {

  var examples = {};
  
  examples['application/json'] = [ {
  "id" : "aeiou",
  "im_status" : "aeiou",
  "gps_location" : "aeiou",
  "photo" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.usersPcnPut = function(pcn, photo) {

  var examples = {};
  

  
}
exports.usersPcnPost = function(pcn, firstName, lastName, email, photo) {
  var ff = function(){
    console.log('whatever');
  };

  db.getTest(ff);
  var examples = {};
  

  
}
exports.usersPcnActivePut = function(pcn, ipaddress) {

  var examples = {};
  
  examples['application/json'] = "";
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
