// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App

var app = express();

// Sets an initial port. Prevents having to reconfigure when deployed
var PORT = process.env.PORT || 8080;
socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock";

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


require('./app/routing/apiRoutes.js')(app);
//include htmlRoutes
require('./app/routing/htmlRoutes.js')(app,express);



// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});