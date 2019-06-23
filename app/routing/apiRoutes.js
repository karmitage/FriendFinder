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
            compatibility: Infinity
        };

        //loop over the friends list and compare each friends' scores to the
        //current user scores:

        for (i = 0; i < friends.length; i++) {
            var friend = friends[i];
            var difference = 0;

            //inner loop to compare the specific friends' score to the user score

            for (k = 0; k < friend.scores.length; k++) {

            }


        }


        //push the survey results to the friend object
        friends.push(surveyData);

        //display their closest match
        res.json(friendMatch);
    });

};
