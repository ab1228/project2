// dependencies
// bodyparser: returns input 
var express = require("express");

// tell node  we are creating "Express" server
var app = express();

// set initial PORT
var PORT = process.env.PORT || 7000;

app.use(express.static('app/public'))
//  set up the Express app to handle the parsing/ set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//  Routes: gives our server a map of how to respond when user visit or request data 
require("./routes/api-Routes.js")(app);
require("./routes/html-Routes.js")(app);








///////Listening///////
=======

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
