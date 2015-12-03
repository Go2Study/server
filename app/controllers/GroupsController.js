GroupModel = require('../models/Group');


module.exports = {

	index: function(query, callback) {
        //TODO Implement query parameter (find in any fields)
        GroupModel.find({}, '-_id id name description pcnlist', function (err, groups) {
            if (err)
                callback(err, null);
            callback(null, groups);
        });
	},

	show: function(groupid, callback) {
        GroupModel.findOne({id: groupid}, '-_id id name description pcnlist', function (err, group) {
            if (err)
                callback(err, null);
            callback(null, group);
        });
	},

	create: function(name, pcnlist, description, callback) {
		var group = new GroupModel();
        group.name = name;
        group.pcnlist = pcnlist.split(',');
        group.description = description;

        //TODO use the randomstring library
        group.id = Math.floor(Math.random()*20);

        group.save(validateBeforeSave = true, function(err, res){
            if (err)
                callback(err, null);
            callback(null, res);
        });
	}, 

	update: function(groupid, name, description, callback) {
        GroupModel.findOneAndUpdate({id: groupid}, {name: name, description: description}, function(err, res){
            if (err)
                callback(err, null);
            callback(null, res);
        });
	},

	delete: function(groupid, callback) {
        GroupModel.findOneAndRemove({id : groupid}, function (err, group){
            if (err)
                callback(err, null);
            callback(null, group);
        });
	}
};


