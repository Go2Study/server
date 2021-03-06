/**
 * Created by cinjo on 11/3/2015.
 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EventSchema   = new Schema({
    id: {type: String, index: {unique: true} },
    title: String,
    description: String,
    startTime: Date,
    endTime: Date,
    location: String,
    pcnlist: [{
                 pcn: {type: String, default: ""},
                 status: {type: String, default: "invited"},
             }],
    group: String
});


module.exports = mongoose.model('Event', EventSchema);