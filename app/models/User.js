var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    firstName: String,
    lastName: String,
    displayName: String,
    pcn: {type: String, index: { unique: true } },
    gpsLocation: {x: Number, y: Number},
    photo: Buffer,
    ipAddress: String,
    privateLocation: Boolean,
    privateAgenda: Boolean,
    department: String,
    title: String,
});


module.exports = mongoose.model('User', UserSchema);