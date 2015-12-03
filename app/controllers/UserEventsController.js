EventsModel = require('../models/Event');


module.exports = {

	index: function(pcn, query, callback) {
		var queryOptions = [
				{'title': { "$regex": query, "$options": "i"}},
				{'description': { "$regex": query, "$options": "i"}},
				{'startTime': { "$regex": query, "$options": "i"}},
				{'startTime': { "$regex": query, "$options": "i"}},
				{'endTime': { "$regex": query, "$options": "i"}},
				{'location': { "$regex": query, "$options": "i"}},
				{'pcnlist': { "$regex": query, "$options": "i"}}
		];

		EventModel.find({'pcnlist.pcn': pcn, $or: queryOptions}, '-_id id title description startTime endTime location pcnlist', function (err, events) {
			if (err)
				callback(err, null);
			callback(null, events);
		});
	}, 

	update: function(pcn, id, name, callback) {
		var conditions = { 'pcnlist.pcn' : pcn, 'id': id}
			, update = { name: name}
			, options = { multi: true };

		EventModel.update(conditions, update, options, function(err, numAffected){
			if (err)
				callback(err, null);

			if (numAffected>0) {
				callback(null, {success: 'Updated details for '+numAffected+' rows'});
			}
		});
	}, 

	delete: function(pcn, id, callback) {
		var conditions = { 'pcnlist.pcn' : pcn, 'id': id}
			, update = { $pull: {'pcnlist': pcn}}
			, options = { multi: true };

		EventModel.update(conditions, update, options, function(err, numAffected){
			if (err)
				callback(err, null);

			if (numAffected>0) {
				callback(null, {success: 'Updated details for '+numAffected+' rows'});
			}
		});
	}

};


