UserModel = require('../models/User');


module.exports = {

	index: function(pcn, callback) {
		//TODO Implement query parameter (find in any fields)
		UserModel.findOne({pcn: pcn}, '-_id favourites', function (err, favs) {
			if (err)
				callback(err, null);
			callback(null, favs);
		});
	}, 

	create: function(pcn, pcnfavourite, callback) {
		UserModel.findOneAndUpdate({pcn: pcn, favourites: {$ne: pcnfavourite}}, {$addToSet: {favourites: pcnfavourite}}, function(err, res){
			if (err)
				callback(err, null);
			callback(null, res);
		});
	},

	delete: function(pcn, pcnfavourite, callback) {
		UserModel.findOneAndUpdate({pcn: pcn}, {$pull: {favourites: pcnfavourite}}, function(err, res){
			if (err)
				callback(err, null);
			callback(null, res);
		});
	}
};


