GroupModel = require('../models/Group');


module.exports = {

	index: function(pcn, query, callback) {
		console.log(pcn);

		GroupModel.find({pcnlist: pcn}, function (err, groups) {
			if (err){
				callback(err, null);
				return;
			}

			callback(null, JSON.stringify(groups));
		});
	}

};


