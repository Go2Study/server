var UserModel = require('../models/User');
var randomstring = require("randomstring");


module.exports = {

	index: function(query, callback) {

        var queryOptions = [
            {'firstName': { "$regex": query, "$options": "i"}},
            {'lastName': { "$regex": query, "$options": "i"}},
            {'displayName': { "$regex": query, "$options": "i"}},
            {'email': { "$regex": query, "$options": "i"}}
        ];

        UserModel.find({$or : queryOptions}, '-_id firstName lastName displayName pcn email photo ipaddress schedule minStartTime maxEndTime', function (err, users) {
            if (err)
                callback(err, null);
            callback(null, users);
        });
	},

    show: function(pcn, callback) {
        UserModel.findOne({pcn: pcn}, '-_id firstName lastName displayName pcn email photo ipaddress schedule', function (err, user) {
            if (err)
                callback(err, null);
            callback(null, user);
        });
    },

	create: function(firstName, lastName, pcn, email, className, photo, ipaddress, callback) {
        var newUser = new UserModel();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.displayName = firstName + ' ' + lastName;    //default display name, can be changed by the user later
        newUser.pcn = pcn;
        newUser.email = email;
        newUser.photo = photo;
        newUser.ipaddress = ipaddress; // The current ip address of the client
        newUser.privateAgenda = false; // Agenda is publicly available by default
        newUser.privateLocation = false; // Location is publicly known by default
        newUser.minStartTime = new Date("12-12-2012");
        newUser.maxEndTime = new Date("12-12-2016");
        newUser.className = className;

        //TODO generate this password on client side and generate a JWT before creating the user
        newUser.password = randomstring.generate({length: 30, charset: 'hex'});
        newUser.schedule = [
            {
                startTime: new Date(2015, (Math.random()*5)+1, (Math.random()*30)+1),
                endTime: new Date(2015, (Math.random()*6)+6, (Math.random()*30)+1)
            },
            {
                startTime: new Date(2014,(Math.random()*5)+1,(Math.random()*30)+1),
                endTime: new Date(2014,(Math.random()*6)+6,(Math.random()*30)+1)
            },
            {
                startTime: new Date(2013,(Math.random()*5)+1,(Math.random()*30)+1),
                endTime: new Date(2013,(Math.random()*6)+6,(Math.random()*30)+1)
            }];

        UserModel.create(newUser, function (err, res) {
            if (err)
                callback(err,null); // Error
            callback(null, res);
        });
	},

	update: function(pcn, updateParams, callback) {

        UserModel.findOneAndUpdate({ pcn: pcn }, updateParams, function(err, res){
            if (err)
                callback(err, null);
            callback(null, res);
        });
	}
};


