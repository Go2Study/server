var EventModel = require('../models/Event');
var UserModel = require('../models/User');

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

	create: function(name, startTime, endTime, location, description, pcnlist, group, callback) {
		//Create event model
		var event = new EventModel();
		event.title = name;
		event.id = Math.floor(Math.random(1,100)*100);
		event.startTime = startTime;
		event.endTime = endTime;
		event.location = location;
		event.description = description;
		event.group = group;

		var pcnArray = pcnlist.split(",");

		//Add the list of PCN numbers to the event list, setting the status as invited (default)
		pcnArray.forEach(function (e){
			event.pcnlist.push({pcn: e, status: "invited"});
		});

		EventModel.create(event,function(err, res){
			if (err)
				callback(err, null);
			callback(null, res);
		});
		//TODO Send push notifications with invitations to all the clients in the pcnlist
	}, 

	update: function(eventid, updateParams, callback) {
		EventModel.findOneAndUpdate({id: eventid}, updateParams, function(err, res){
			if (err)
                callback(err, null);
            callback(null, res);
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



