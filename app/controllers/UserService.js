User = require('../models/User');
exports.usersPcnrequiredEventsIdGet = function(pcnrequired, id, query) {	

	
};
exports.usersPcnrequiredEventsIdPut = function(pcnrequired, id, name) {	
	
	
};
exports.usersPcnrequiredEventsIdPost = function(pcnrequired, id, name) {	
	
	
};
exports.usersPcnrequiredEventsIdDelete = function(pcnrequired, id) {	
	
	
};
exports.usersPcnrequiredFavouritesGet = function(pcnrequired) {	
	
	
};
exports.usersPcnrequiredFavouritesPost = function(pcnrequired, pcn) {	
	
	
};
exports.usersPcnrequiredFavouritesDelete = function(pcnrequired, pcn) {	
	
	
};
exports.usersPcnrequiredGroupsIdGet = function(pcnrequired, id, query) {	
	
	
};
exports.usersPcnGet = function(pcn, user) {
    User.find(function(err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
};
exports.usersPcnPut = function(pcn, photo) {	
	
	
};
exports.usersPcnPost = function(pcn, firstName, lastName, email, photo) {
    var user = new User();      // create a new instance of the Bear model
    user.name = req.body.name;  // set the bears name (comes from the request)

    // save the bear and check for errors
    user.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'User created!' });
    });
	
};
exports.usersPcnActivePut = function(pcn, ipaddress) {	
	
	
};
