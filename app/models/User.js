var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    firstName: String,
    lastName: String,
    displayName: String,
    email: String,
    pcn: {type: String, index: { unique: true } },
    gps_location: {x: Number, y: Number},
    photo: Buffer, 
    ipaddress: String,
    privateLocation: Boolean,
    privateAgenda: Boolean
});

UserSchema.options.toJSON = {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
    }
};


module.exports = mongoose.model('User', UserSchema);