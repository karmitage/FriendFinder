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
        var difference = 0;

        for (i = 0; i < friendData.length; i++) {
            var friend = friendData[i];
            difference = 0;

            //inner loop to compare the specific friends' score to the user score

            for (k = 0; k < friend.scores.length; k++) {
                var friendScore = friend.scores[k];
                var responderScore = responses[k];
                //running total of difference
                difference += Math.abs(parseInt(responderScore) - parseInt(friendScore));
                console.log("difference is: " + difference);
            }
            // if the difference is less than the current best match, set this friend to be the match
            if (difference <= friendMatch.compatibility) {
                // Reset the bestMatch to be the new friend.
                friendMatch.name = friend.name;
                friendMatch.photo = friend.photo;
                friendMatch.compatibility = difference;
                console.log("blah");
            }

            console.log("No, really, what is it?" + friendMatch.name);

        }
        //push the survey results to the friend object
        friendData.push(surveyData);

        console.log("What is the friend match?" + friendMatch.name);

        //display their closest match
        res.json(friendMatch);
    });

};
