var db = require("../models");



module.exports = function (app) {

    // app.get("/", function (req, res) {
    //     // 1. Add a join to include all of each user
    //     db.Inventory.findAll({}).then(function (dbInventory) {
    //         res.json(dbInventory);
    //     });
    // });

    app.get("/api/inventory/:id", function (req, res) {
        // 2; Add a join to include all of the users rentals
        db.Inventory.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbInventory) {
            res.json(dbInventory);
        });
    });

    app.post("/api/inventory", function (req, res) {
        db.Inventory.create(req.body).then(function (dbInventory) {
            res.json(dbInventory);
        });
    });

    app.delete("/api/inventory/:id", function (req, res) {
        db.Inventory.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbInventory) {
            res.json(dbInventory);

        });

    });


};