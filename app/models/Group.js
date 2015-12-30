var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var GroupSchema   = new Schema({
    name: {type: String, required: true },
    id: {type: String, index: {unique: true}, autoIndex: true},
    pcnlist: [String],
    description: String
});


module.exports = mongoose.model('Group', GroupSchema);