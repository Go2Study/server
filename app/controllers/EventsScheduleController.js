EventModel = require('../models/Event');
UserModel = require('../models/User');

//HELPER METHODS
getIndividualFreeTimes = function(pcnlist) {
    var individualFreeTimes = [[]]; // Array with count(pcnlist) as size containing the free time of every member for the given period
    var eventMembers;
    user.where('pcn')
        .in(pcnlist)
        .find('-_id displayName pcn schedule minStartTime maxEndTime',
        function (err, users) {
            if (err){
                callback(err, null);
                return;
            }
            eventMembers = JSON.parse(users);
        });

    //Get the start and end time of all items in the schedule of every member for a given week
    for (var i = 0; i <= eventMembers.length;i++) {
        var schedule = eventMembers[i].schedule;
        // The time between the beginning of the users agenda till the first schedule item
        individualFreeTimes[i].push({startTime: eventMembers[i].minStartTime, endTime: schedule[0].startTime});

        for (var j = 0; j < schedule.length-1; j++) {
            individualFreeTimes[i].push({startTime: schedule[j].endTime, endTime: schedule[j+1].startTime});
        }

        individualFreeTimes[i].push({startTime: schedule[schedule.length-1].endTime, endTime: eventMembers[i].maxEndTime});
    }
    return individualFreeTimes;
};

getOneFreeTimeSpot = function (startTime, endTime, duration, indexOfUser, freeTimesOfTheDay) {
    var confirmed = 0;
    var sTime = moment(startTime);
    var eTime = moment(startTime);
    for (var i = 0;i < freeTimesOfTheDay.length; i++) { // Loop through the free times of every member for a given day
        if (indexOfUser != i) {
            //TODO Get the day from the sTime and eTime and use it to compare only with other times from the same day, not all days.
            for (var j = 0; j < freeTimesOfTheDay[i].length; j++) {
                var freeSpot = freeTimesOfTheDay[i][j];
                var sTimeSpot = moment(freeSpot.startTime);
                var eTimeSpot = moment(freeSpot.endTime);

                if (sTime >= sTimeSpot) {
                    if (eTime <= eTimeSpot){
                        confirmed++;
                        break;
                    } else if (sTime.add(duration, "minutes") <= eTimeSpot) { // If the end time of the compared free time spot provides at least 15 minutes
                        confirmed++;
                        endTime = eTimeSpot;
                        break;
                    }
                }
            }
        }
    }

    if (confirmed == freeTimesOfTheDay.length-1) {
        return {startTime: startTime, endTime: endTime};
    }

    return {};
};

getCommonFreeTimes = function (duration, individualFreeTimes) {
    var commonFreeTimes = [];
    for (var m= 0; m <= individualFreeTimes.length; m++) { // Loop through members (m)
        for (var d = 0; d <= individualFreeTimes[m].length; d++) { // Loop through days (d) Monday - Friday of member's schedule
            for (var s = 0; s <= individualFreeTimes[m][d].length; s++) { // Loop through the items for the day
                var scheduleItem = individualFreeTime[m][d][s];
                var freeTimeBlock = getOneFreeTimeSpot(scheduleItem.startTime, scheduleItem.endTime, duration, m, individualFreeTimes);
                if (freeTimeBlock.keys.length > 0) {
                    commonFreeTimes.push(freeTimeBlock);
                }
            }
        }
    }
    return commonFreeTimes;
};


module.exports = {
    index: function(pcnlist, duration, callback) {
        var individualFreeTimes = getIndividualFreeTimes(pcnlist);
        var commonFreeTimes = getCommonFreeTimes(duration, individualFreeTimes);
        if (commonFreeTimes.length != 0) {
            callback(null, JSONArray.parse(commonFreeTimes));
        } else {
            callback({error: "No free times available for the given period."}, null);
        }
    }
};



