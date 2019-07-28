var db = require("../models");////will come from sequelize models

var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    app.get("/hotcars", function (req, res) {
        db.Inventory.findAll({}).then(function(results){
            res.render("index", {
                cars: results
            })
        });
    });

};