'use strict';

exports.groupsGet = function(query) {

  var examples = {};
  
  examples['application/json'] = [ {
  "id" : "aeiou",
  "pcnlist" : [ "" ],
  "name" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.groupsPut = function(groupid, name, description) {

  var examples = {};
  

  
}
exports.groupsPost = function(name, pcnlist, description) {

  var examples = {};
  

  
}
exports.groupsDelete = function(groupid) {

  var examples = {};
  

  
}
exports.groupsIdEventsGet = function(id) {

  var examples = {};
  
  examples['application/json'] = [ {
  "startTime" : "aeiou",
  "id" : "",
  "location" : "aeiou",
  "description" : "aeiou",
  "endTime" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
