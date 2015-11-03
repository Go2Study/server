Groups = require('../models/Groups');


module.exports = {

	index: function(query, callback) {
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	},

	show: function(query, callback) {
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	},

	create: function(name, pcnlist, description, callback) {
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	}, 

	update: function(groupid, name, description, callback) {
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	}, 

	delete: function(groupid, callback) {
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	}

};


