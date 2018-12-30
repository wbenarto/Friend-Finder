const friendsArr = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.send(friendsArr)
    });

    app.post("/api/friends", function(req, res) {
        
        var data = req.body;
        //
        var userName = data.name;
        var userPhoto = data.photo;
        var userScores = data.scores;

        var b = userScores.map(function(item) {
            return parseInt(item, 10)
        });

        var newFriend = {
            name: userName,
            photo: userPhoto,
            scores: b
        };

        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: 1000,
            message: ""
        };

        var totalDiff = 0;
        var sum = b.reduce((a, b) => a + b, 0);

        for (var i = 0; i < friendsArr.length; i++) {

            // console.log(friendsArr[i].name);
            // console.log(friendsArr[i])
            var totalDiff = 0;

            var bffScore = friendsArr[i].scores.reduce((a, b) => a + b, 0);
            totalDiff += Math.abs(sum - bffScore);

            if (totalDiff <= bestMatch.friendDiff) {
                bestMatch.name = friendsArr[i].name;
                bestMatch.photo = friendsArr[i].photo;
                bestMatch.friendDiff = totalDiff;
                bestMatch.message = friendsArr[i].message;
            };
        };
        

        friendsArr.push(newFriend);
        res.send(bestMatch);

    });
}