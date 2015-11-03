var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var GroupSchema   = new Schema({
    name: String,
    id: {type: String, index: {unique: true} },
    pcnlist: Array
});


module.exports = mongoose.model('Group', GroupSchema);