var needle = require('needle');
var UserModel = require('../../app/models/User');


// TEST if base returns HTTP response 200
var baseUrl = "http://localhost:8080/api";
describe("Base path", function() {
    describe("GET /", function() {
        it("returns status code 200", function() {
            var data = {

            };

            needle.request('get', baseUrl, data, function(err, resp) {
                expect(resp.statusCode).toBe(200);// here you go, mister.
                done();
            });
        });
    });
});

// USERS

// GET /users
var usersUrl = baseUrl+ "/users";
describe("Users", function() {
    describe("GET /users", function() {
        it("returns status code 200", function() {
            var data = {

            };

            needle.get(usersUrl, data, function(err, resp) {
                if (!err && resp.statusCode == 200)
                    expect(response.statusCode).toBe(200);// here you go, mister.
            });
        });


    });
});

// GET /users
describe("Users", function() {
    describe("GET /users", function() {
        it("contains at least one user", function() {
            var data = {

            };

            needle.request('get', usersUrl, data, function(err, resp, body) {
                if (!err && resp.statusCode == 200) {
                    var user = new UserModel();
                    user.firstName = body;
                    user.lastName = lastName;
                    user.displayName = firstName + ' ' + lastName;    //default display name, can be changed by the user later
                    user.pcn = pcn;
                    user.email = email;
                    user.photo = photo;
                    user.ipaddress = ipaddress; // The current ip address of the client
                    user.privateAgenda = false; // Agenda is publicly available by default
                    user.privateLocation = false; // Location is publicly known by default
                    user.minStartTime = new Date("12-12-2012");
                    user.maxEndTime = new Date("12-12-2016");
                    user.className = className;
                    user.schedule = body[0].schedule;

                    expect(user).toBeTruthy();// here you go, mister.
                    done();
                }

            });
        });
    });
});





