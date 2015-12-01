EventModel = require('../models/Event');
UserModel = require('../models/User');
var moment = require('moment');

//HELPER METHODS
thingsEqual = function(thing1, thing2) {
    return thing1.startTime == thing2.startTime
        && thing1.endTime == thing2.endTime;
};

arrayContains = function(arr, val, equals) {
    var i = arr.length;
    while (i--) {
        if ( equals(arr[i], val) ) {
            return true;
        }
    }
    return false;
};

removeDuplicates = function(arr, equals) {
    var originalArr = arr.slice(0);
    var i, len, j, val;
    arr.length = 0;

    for (i = 0, len = originalArr.length; i < len; ++i) {
        val = originalArr[i];
        if (!arrayContains(arr, val, equals)) {
            arr.push(val);
        }
    }
};

getOneFreeTimeSpot = function (startTime, endTime, duration, freeTimesOfTheDay) {
    var confirmed = 0;
    duration = duration || 30;
    var sTime = moment(startTime);
    var eTime = moment(endTime);

    for(var i = 0, l = freeTimesOfTheDay.length; i < l; ++i) { // Loop through members (m)
        var oneFreeTime = freeTimesOfTheDay[i];

        for(var j = 0, ln = oneFreeTime.length; j < ln; ++j) {
            var freeSpot = oneFreeTime[j];
            var sTimeSpot = moment(freeSpot["startTime"]);
            var eTimeSpot = moment(freeSpot["endTime"]);

            if (sTime.isAfter(sTimeSpot) || sTime.isSame(sTimeSpot)) {
                if (eTime.isBefore(eTimeSpot) || eTime.isSame(eTimeSpot)){
                    confirmed++;
                    break;
                } else if (eTimeSpot.diff(sTime, "minutes") >= duration) { // If the end time of the compared free time spot provides at least 15 minutes
                    eTime = eTimeSpot;
                    confirmed++;
                    break;
                }
            }
        }
    }

    if (confirmed == freeTimesOfTheDay.length) {
        return {startTime: sTime, endTime: eTime};
    }

    return {};
};

getCommonFreeTimes = function (duration, individualFreeTimes) {
    var commonFreeTimes = [];

    for(var i = 0, l = individualFreeTimes.length; i < l; ++i) { // Loop through members (m)
        var oneFreeTime = individualFreeTimes[i];

        //Remove the current schedule items from the list, to skip iterating over them
        var freeTimesOfOtherMembers = individualFreeTimes.filter(function (freeTime){
            return freeTime != oneFreeTime;
        });

        for(var j = 0, ln = oneFreeTime.length; j < ln; ++j) {
            var freeTime = oneFreeTime[j];
            var freeTimeSpot = getOneFreeTimeSpot(freeTime.startTime, freeTime.endTime, duration, freeTimesOfOtherMembers);

            if (Object.keys(freeTimeSpot).length > 0){
                commonFreeTimes.push(freeTimeSpot);
            }
        }
    }

    // Filter out duplicates
    removeDuplicates(commonFreeTimes, thingsEqual);

    return commonFreeTimes;
};

getIndividualFreeTimes = function(pcnlist, duration, cb) {
    var individualFreeTimes = []; // Array with count(pcnlist) as size containing the free time of every member for the given period
    //TODO read string array from GET params
    var pcnlist = pcnlist.split(",");

    UserModel.find()
        .where('pcn')
        .in(pcnlist)
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



