GroupModel = require('../models/Group');


module.exports = {

	index: function(pcn, query, callback) {
		GroupModel.find({pcnlist: pcn}, function (err, groups) {
			if (err)
				callback(err, null);
			callback(null, groups);
		});
	}
};


