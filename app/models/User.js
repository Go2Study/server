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
    className: String,
    ipaddress: String,
    password: String,
    privateLocation: Boolean,
    privateAgenda: Boolean,
    //schedule: EventSchema,
    schedule : [{
        scheduleId: {type: String, default: ""},
        startTime : Date,
        endTime : Date,
        room: {type: String, default: ""},
        subject: {type: String, default: ""},
        teacher: {type: String, default: ""},
        description: {type: String, default: ""},
        title: {type: String, default: ""}
    }],
    favourites: [String],
    minStartTime: String,
    maxEndTime: String
});

module.exports = mongoose.model('User', UserSchema);