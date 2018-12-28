const friendsArr = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.send(friendsArr)
    });

    app.post("/api/friends", function(req, res) {
        
        

        var newFriend = req.body;
        var userName = newFriend.name;
        var userPhoto = newFriend.photo;
        var newFriendScores = newFriend.scores;

        console.log(newFriend)
        friendsArr.push(newFriend);

        var totalDiff = 0;
        var currentMatch;

        for (var i = 0; i < friendsArr.length; i++) {


            // console.log(friendsArr[i].name);
            // console.log(friendsArr[i])
            totalDiff = 0;

            for (var j = 0; j < 10; j++) {
                totalDiff += Math.abs((parseInt(newFriendScores[j]) - friendsArr[i].score[j]))
            };

            if (i === 0) {
                currentMatch = 0;
                bestDiff = totalDiff;
            } else {
                if (totalDiff < bestDiff) {
                    currentMatch = 1;
                    bestDiff = totalDiff;
                }
            }

            //Problem here
            // for (var j = 0; j < friendsArr[i].score[j]; j++) {
            //     console.log(totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friendsArr[i].score[j])));
                // totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // if (totalDiff <= bestMatch.friendDiff) {
                //     bestMatch.name = friendsArr[i].name;
                //     bestMatch.photo = friendsArr[i].photo;
                //     bestMatch.friendDiff = totalDiff;
                // };
            // };
        };
        

        res.send(friendsArr[currentMatch]);

    });
}