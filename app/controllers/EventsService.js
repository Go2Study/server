EventModel = require('../models/Event');
UserModel = require('../models/User');
//randomstring = require("./lib/randomstring");

module.exports = {

	index: function(query, callback) {
		//TODO Implement query parameter
		EventModel.find({}, '-_id id title description startTime endTime location pcnlist', function (err, events) {
			if (err)
				callback(err, null);
			callback(null, events);
		});
	},
	show: function(id, callback) {
		EventModel.findOne({id: id}, '-_id id title description startTime endTime location pcnlist', function (err, event) {
			if (err)
				callback(err, null);
			callback(null, event);
		});
	},

	create: function(name, startTime, endTime, location, description, pcnlist, callback) {
		//Create event model
		var event = new EventModel();
		event.title = name;
		//event.id = randomstring() TODO add id
		event.startTime = startTime;
		event.endTime = endTime;
		event.location = location;
		event.description = description;

		var pcnArray = pcnlist.split(",");
		//Add the list of PCN numbers to the event list, setting the status as invited (default)
		pcnArray.forEach(function (e){
			event.pcnlist.push({pcn: e, status: "invited"});
		});

		console.log(pcnlist);

		EventModel.create(event,function(err, res){
			if (err)
				callback(err, null);
			callback(null, res);
		});
		//TODO Send push notifications with invitations to all the clients in the pcnlist
	}, 

	update: function(id, name, startTime, endTime, description, location, callback) {
		var conditions = { id: id }
			, update = { name: name, startTime: startTime, endTime: endTime, description: description, location: location}
			, options = { multi: true };

		EventModel.update(conditions, update, options, function(err, numAffected){
			if (err)
				callback(err, null);

			if (numAffected>0) {
				callback(null, '{success: '+numAffected+' users changed');
			}
		});
	}, 

	delete: function(id, callback) {
		EventModel.findOneAndRemove({ id: id}, function(err, res) {
			if (err)
				callback(err, null);
			callback(null, res);
		});
	}
};



