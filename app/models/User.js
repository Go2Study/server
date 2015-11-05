var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    firstName: String,
    lastName: String,
    displayName: String,
    pcn: {type: Number, index: { unique: true } },
    gps_location: {x: Number, y: Number},
    photo: Buffer,
    ipaddress: String,
    privateLocation: Boolean,
    privateAgenda: Boolean
});


module.exports = mongoose.model('User', UserSchema);