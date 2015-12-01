var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var GroupSchema   = new Schema({
    name: String,
    id: {type: String, index: {unique: true}, autoIndex: true},
    pcnlist: [String],
    description: String,
    events: [String]
});


module.exports = mongoose.model('Group', GroupSchema);