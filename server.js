
//Require express and create an Express instance
var express = require("express");
var app = express();


//set port
var PORT = process.env.PORT || 3000;

//boilerplate code for json and url-encoded data handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start server on designated port
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});