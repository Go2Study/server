EventModel = require('../models/Event');


module.exports = {

	index: function(id, callback) {
		EventModel.find({group: id}, function (err, eventIds) {
			if (err)
				callback(err, null);
			callback(null, eventIds);
		});
	}
};


