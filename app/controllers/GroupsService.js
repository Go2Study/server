GroupModel = require('../models/Group');


module.exports = {

	index: function(query, callback) {
        GroupModel.find({}, '-_id id name description pcnlist', function (err, users) {
            if (err){
                callback(err, null);
                return;
            }

            callback(null, JSON.stringify(users));
        });
	},

	show: function(query, callback) {
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	},

	create: function(name, pcnlist, description, callback) {
		var group = new GroupModel();
        group.name = name;
        group.pcnlist = pcnlist.split(',');
        group.description = description;
        group.id = Math.floor(Math.random()*20);

        group.save(validateBeforeSave = true, function(err){
            if (err){
                callback(err, null);
                return err;
            }

            callback(null, {success: 'Created a new group : ' + name});
        });
	}, 

	update: function(groupid, name, description, callback) {
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	}, 

	delete: function(groupid, callback) {

        GroupModel.findOneAndRemove({id : groupid}, function (err, group){
            if (err)
                callback(err, null);
            callback(null, {success: 'Succesfully deleted group '});
        });
	}

};


