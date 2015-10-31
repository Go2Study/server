var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    pcn: Number,
    im_status: String,
    gps_location: {x: Number, y: Number},
    photo: Buffer
});


module.exports = mongoose.model('user', UserSchema);