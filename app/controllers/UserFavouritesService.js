UserModel = require('../models/User');


module.exports = {

	index: function(pcn, callback) {
		//TODO Implement query parameter (find in any fields)
		UserModel.find({pcn: pcn}, '-_id favourites', function (err, favs) {
			if (err)
				callback(err, null);
			callback(null, favs);
		});
	}, 

	create: function(pcn, pcnfavourite, callback) {
		var conditions = { pcn: pcn }
			, update = {$push: {favourites: pcnfavourite}}
			, options = { multi: true };

		UserModel.findOneAndUpdate(conditions, update, options, function(err, numAffected){
			if (err)
				callback(err, null);

			if (numAffected>0) {
				callback(null, '{success: '+numAffected+' users changed');
			}
		});
	}, 

	delete: function(pcn, pcnfavourite, callback) {
		var conditions = { pcn: pcn }
			, update = {$pull: {favourites: pcnfavourite}}
			, options = { multi: true };

		UserModel.findOneAndUpdate(conditions, update, options, function(err, numAffected){
			if (err)
				callback(err, null);

			if (numAffected>0) {
				callback(null, '{success: '+numAffected+' users changed');
			}
		});
	}
};


