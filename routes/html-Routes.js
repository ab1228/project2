// var db = require("../models");////will come from sequelize models

var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, ""));
    });


    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, ""));
    });


    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, ""));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, ""));
    });

};