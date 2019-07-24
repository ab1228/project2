var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        console.log(req.method);
        res.send("/ working");
    });

    app.post("/api/posts", function (req, res) {
        console.log(req.method);
        console.log(req.body);
        res.send("/api/post working")
    });

    app.put("/api/update/:id", function (req, res) {
        console.log(req.method);
        console.log(req.params.id);
        res.send("/api/update/${req.params.id} working");
    });

    app.delete("/api/delete/:id", function (req, res) {
        console.log(req.method);
        console.log(req.params.id);
        res.send("/api/delete/${req.params.id} working")
    });


};