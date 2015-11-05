EventModel = require('../models/Event');


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

	create: function(name, startime, location, startimeopt, description, callback) {
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	}, 

	update: function(id, nameopt, startimeopt, durationopt, description, locationopt, callback) {
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	}, 

	delete: function(id, callback) {
		//if error
		callback(err, null);

		//if valid
		callback(null, result);
	}

};


