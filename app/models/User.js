var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    pcn: Number,
    im_status: String,
    gps_location: {x: Number, y: Number},
    photo: Buffer,
    ipaddress: String,
    privateLocation: Boolean,
    privateAgenda: Boolean
});


module.exports = mongoose.model('User', UserSchema);