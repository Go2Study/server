EventModel = require('../models/Event');
UserModel = require('../models/User');

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

	create: function(name, startime, endtime, location, description, pcnlist, callback) {
		//TODO Create EventModel with the static information. Limit description to 140 characters
		var event = new EventModel();
		var user = new UserModel();

		event.name = name;
		event.startTime = startime;
		event.endTime = endtime;
		event.location = location;
		event.description = description;
		event.pcnlist = pcnlist;

		//TODO create event and call callback
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



