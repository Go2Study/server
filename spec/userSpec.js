var needle = require('needle');
var Mongoose = require('mongoose').Mongoose;
var mongoose = new Mongoose();

var mockgoose = require('mockgoose');
mockgoose(mongoose);

// TEST if base returns HTTP response 200
var baseUrl = "http://localhost:8080/api/mock/users";
describe("GET /users", function() {
    mongoose.connect('mongodb://g2sadmin:G2SMONGOADMIN77@ds047524.mongolab.com:47524/go2study', function(err) {
    });

    it("returns status code 200", function(done) {
        var data = {};
        needle.request('get', baseUrl, data, function(err, resp) {
            expect(resp.statusCode).toBe(200);// here you go, mister.
            done();
        });
    });

    it("returns at least one user", function (done) {
        var data = {};
        needle.request('get', baseUrl, data, function (err, resp) {
            var responseData = JSON.parse(resp);
            expect(responseData).not.toBeNull();// here you go, mister.
            done();
        });
    });

});

