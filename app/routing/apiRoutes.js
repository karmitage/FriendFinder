//require friends
var friendData = require("../data/friends");

//routes
module.exports = function (app) {
    //get request
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //post request
    app.post("/api/friends", function (req, res) {

        var surveyData = req.body;
        var responses = surveyData.scores;

        var friendMatch = {
            name: "",
            photo: "",
            compatibility: 10000000 //set the initial compatibility score to a very high number
        };

        //loop over the friends list and compare each friends' scores to the current user scores:

        for (i = 0; i < friends.length; i++) {
            var friend = friends[i];
            var difference = 0;

            //inner loop to compare the specific friends' score to the user score

            for (k = 0; k < friend.scores.length; k++) {
                var friendScore = friendScore.scores[k];
                var responderScore = responses.scores[k];
                //running total of difference
                difference += Math.abs(parseInt(responderScore) - parseInt(friendScore));
            }
            // if the difference is less than the current best match, set this friend to be the match
            if (difference <= friendMatch.compatbility) {
                // Reset the bestMatch to be the new friend.
                friendMatch.name = friend.name;
                friendMatch.photo = friend.photo;
                friendMatch.compatibility = difference;
            }

        }
        //push the survey results to the friend object
        friends.push(surveyData);

        //display their closest match
        res.json(friendMatch);
    });

};
