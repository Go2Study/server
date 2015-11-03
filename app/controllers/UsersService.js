Users = require('../models/Users');


module.exports = {

	index: function(user, callback) {

        UserModel.find().lean().exec(function (err, users) {
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
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	}, 

	update: function(pcn, photo, callback) {
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	}

}


