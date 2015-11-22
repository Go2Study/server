EventModel = require('../models/Event');
UserModel = require('../models/User');
var moment = require('moment');

//HELPER METHODS
getOneFreeTimeSpot = function (startTime, endTime, duration, indexOfUser, freeTimesOfTheDay) {
    var confirmed = 0;
    duration = duration || 30;
    var sTime = moment(startTime);
    var eTime = moment(endTime);
    //TODO Get the day from the sTime and eTime and use it to compare only with other times from the same day, not all days.
    for(var i = 0, l = freeTimesOfTheDay.length; i < l; ++i) { // Loop through members (m)
        console.log("Start time : "+ sTime.format("DD-MM-YYYY"));
        console.log("End time : "+ eTime.format("DD-MM-YYYY"));

        var oneFreeTime = freeTimesOfTheDay[i];
        console.log("---------- Compared to :");
        console.log(oneFreeTime);
        console.log("---------- Matches:");
        for(var j = 0, ln = oneFreeTime.length; j < ln; ++j) {
            var freeSpot = oneFreeTime[j];

            // Convert the start & end times to moment objects
            var sTimeSpot = moment(freeSpot["startTime"]);
            var eTimeSpot = moment(freeSpot["endTime"]);
            if (sTime.isAfter(sTimeSpot) || sTime.isSame(sTimeSpot)) {
                if (eTime.isBefore(eTimeSpot) || eTime.isSame(eTimeSpot)){
                    confirmed++;
                    console.log("Confirmations: "  + confirmed + " for " + sTime.format("DD-MM-YYYY") + " till " + eTime.format("DD-MM-YYYY"));
                } else if (eTimeSpot.diff(sTime, "minutes") >= duration) { // If the end time of the compared free time spot provides at least 15 minutes
                    eTime = eTimeSpot;
                    confirmed++;
                    console.log("End match shortened to :" + eTime);
                }
            }
        }
    }
    console.log("---- RESULTS: "+confirmed);
    console.log("---- REQUIRED confirms: " + freeTimesOfTheDay.length);
    console.log("\n \n \n \n");


    if (confirmed == freeTimesOfTheDay.length) {
        return {startTime: sTime, endTime: eTime};
    }

    return {};
};

getCommonFreeTimes = function (duration, individualFreeTimes) {
    var commonFreeTimes = [];
    for(var i = 0, l = individualFreeTimes.length; i < l; ++i) { // Loop through members (m)
        var oneFreeTime = individualFreeTimes[i];
        for(var j = 0, ln = oneFreeTime.length; j < ln; ++j) {
            var freeTime = oneFreeTime[j];
            var freeTimeSpot = getOneFreeTimeSpot(freeTime.startTime, freeTime.endTime, duration, i, individualFreeTimes);
            commonFreeTimes.push(freeTimeSpot);
        }
    }
    return commonFreeTimes;
};

getIndividualFreeTimes = function(pcnlist, duration, cb) {
    var individualFreeTimes = []; // Array with count(pcnlist) as size containing the free time of every member for the given period
    //TODO read string array from GET params
    var pcnlisthard = [51, 48];

    UserModel.find()
        .where('pcn')
        .in(pcnlisthard)
        .exec(function (err, users) {
            if (err){
                cb(err, null);
                return;
            }

            //Get the start and end time of all items in the schedule of every member for a given week
            for (var i = 0, l = users.length; i < l; ++i) {
                var userTimes = [];
                var schedule = users[i].schedule;

                // The time between the beginning of the users agenda till the first schedule item
                userTimes.push({startTime: users[i].minStartTime, endTime: schedule[schedule.length-1].startTime});

                var length = users[i].schedule.length-1;
                for (var j = length; j > 0; --j) {
                    userTimes.push({startTime: users[i].schedule[j].endTime, endTime: users[i].schedule[j-1].startTime});
                }

                userTimes.push({startTime: schedule[0].endTime, endTime: users[i].maxEndTime});
                individualFreeTimes.push(userTimes);
                console.log("INDIVIDUAL TIMES:");
                console.log(individualFreeTimes);

            }
            var commonFreeTimes = JSON.stringify(getCommonFreeTimes(duration, individualFreeTimes));
            cb(null, commonFreeTimes);
        });
};

module.exports = {
    index: function(pcnlist, duration, callback) {
        getIndividualFreeTimes(pcnlist, duration, callback);
    }
};



