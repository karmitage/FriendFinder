
//Require express and create an Express instance
var express = require("express");
var app = express();


//set port
var PORT = process.env.PORT || 3000;

//boilerplate code for json and url-encoded data handling (this allows us to parse json objects & url data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require routing files & pass them the Express server instance
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start server on designated port
app.listen(PORT, function () {
    console.log("App listening on localhost:" + PORT);
});