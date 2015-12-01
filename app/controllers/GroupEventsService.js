GroupModel = require('../models/Group');
EventModel = require('../models/Event');


module.exports = {

	index: function(id, callback) {
		GroupModel.findOne({id: id}, '-_id events', function (err, eventIds) {
			if (err)
				callback(err, null);

			// Get the list of event IDs returned for this group
			var eventIDs = JSON.parse(eventIds).toArray();

			EventModel.find()
				.where('id')
				.in(eventIDs)
				.exec(function (err, events) {
					if (err)
						callback(err, null);

					callback(null, events);
				});
		});
	}
};


