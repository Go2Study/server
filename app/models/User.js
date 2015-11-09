var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    firstName: String,
    lastName: String,
    displayName: String,
    pcn: {type: Number, index: { unique: true } },
    gpsLocation: {x: Number, y: Number},
    photo: Buffer,
    ipAddress: String,
    privateLocation: Boolean,
    privateAgenda: Boolean
});


module.exports = mongoose.model('User', UserSchema);