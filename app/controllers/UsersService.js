UserModel = require('../models/User');


module.exports = {

	index: function(user, callback) {

        UserModel.find({}, function (err, users) {
            if (err){
                console.log(err);
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
        newUser.pcn = pcn;
        newUser.email = email;
        newUser.photo = photo;
        newUser.ipaddress = ipaddress;

        newUser.save(validateBeforeSave=true, function(err){
            if (err){
                //if error
                callback(err, null);
                return err;
            }
            //if valid
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


