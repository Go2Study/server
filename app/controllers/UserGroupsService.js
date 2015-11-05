GroupModel = require('../models/Group');


module.exports = {

	index: function(pcn, id, query, callback) {

		UserGroups.find({}, function (err, users) {
			if (err){
				console.log(err);
				callback(err, null);
				return;
			}

			callback(null, JSON.stringify(users));
		});
	}

};


