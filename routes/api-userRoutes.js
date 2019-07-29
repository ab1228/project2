var db = require("../models");


module.exports = function (app) {

    app.get("/api/users", function (req, res) {
        // 1. Add a join to include all of each user
        db.User.findAll({ include: [db.Inventory] }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/users/:id", function (req, res) {
        // 2; Add a join to include all of the users rentals
        db.User.findOne({
            where: {
                id: req.params.id
            }, include: [db.Inventory]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
    app.get("/api/users/:id", function (req, res) {
        // 2; Add a join to include all of the users rentals
        db.User.update({
            where: {
                id: req.params.id
            }
            // , include: [db.Inventory]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });


    app.post("/api/users", function (req, res) {
        db.User.create(req.body).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    app.delete("/api/users/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });


};