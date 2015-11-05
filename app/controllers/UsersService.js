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

    show: function(user, callback) {
        //if error
        callback(err, null);

        //if valid
        callback(null, result);
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

            callback(null, {success: 'Added '+firstName+' '+lastName+' with pcn '+pcn});
        });



	}, 

	update: function(pcn, photo, callback) {
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	}

}


