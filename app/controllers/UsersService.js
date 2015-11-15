UserModel = require('../models/User');


module.exports = {

	index: function(user, callback) {

        UserModel.find({}, '-_id firstName lastName displayName pcn email photo ipaddress', function (err, users) {
            if (err){
                callback(err, null);
                return;
            }

            callback(null, JSON.stringify(users));
        });
	},

    show: function(pcn, callback) {
        UserModel.find({pcn: pcn}, '-_id firstName lastName displayName pcn email photo ipaddress', function (err, user) {
            if (err){
                callback(err, null);
                return;
            }

            callback(null, JSON.stringify(user));
        });
    },

	create: function(firstName, lastName, pcn, email, photo, ipaddress, callback) {
        var newUser = new UserModel();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.displayName = firstName + ' ' + lastName;    //default display name, can be changed by the user later
        newUser.pcn = pcn;
        newUser.email = email;
        newUser.photo = photo;
        newUser.ipaddress = ipaddress; // The current ip address of the client
        newUser.privateAgenda = false; // Agenda is publicly available by default
        newUser.privateLocation = false; // Location is publicly known by default


        newUser.save(validateBeforeSave = true, function(err){
            if (err){
                callback(err, null);
                return err;
            }

        });

        UserModel.findOne({pcn: pcn}).lean().exec(function(err, user) {
            if (err){
                callback(err, null);
            }
            
            callback(null, user);
        });

	},

	update: function(pcn, photo, callback) {

        var conditions = { pcn: pcn }
            , update = { photo: photo }
            , options = { multi: true };

        UserModel.update(conditions, update, options, function(err, numAffected){
            if (err){
                callback(err, null);
            }
            if (numAffected>0) {
                callback(null, '{success: '+numAffected+' users changed');
            }
            callback(null, res);
        });
	}

}


