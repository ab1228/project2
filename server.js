// dependencies

var express = require("express");
var passport = require("passport");
var session = require("express-session");
var exphbs = require("express-handlebars");



// tell node  we are creating "Express" server
var app = express();

// set initial PORT
// database requiring models for syncing
var PORT = process.env.PORT || 7000;
var db = require("./models");

// middleware
//  set up the Express app to handle the parsing/ set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'))

// passport initialization
app.use(
    session({
        secret: "believe in passport",
        resave: true,
        saveUninitialized: true
    })
);
//session secret
app.use(passport.initialize());
app.use(passport.session()); //allows persistent login sessions

//set up handlebars
app.set("views", "./views");
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.get("/", function (req, res) {
    res.send("Welcome to Passport with Sequlize");
});

//  Routes: gives our server a map of how to respond when user visit or request data 
require("./routes/api-Routes.js")(app);
require("./routes/html-Routes.js")(app);
// added for passport
require("./routes/api_passport-Routes.js")(app);
require("./routes/html_passport-Routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});