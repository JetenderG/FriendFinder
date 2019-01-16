var express = require("express")
var path = require("path");
var app = express();
var data = require("../data/friends")



app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {

        res.send(data.possFriends)
        console.log(data.possFriends)
    })

    app.post("/api/friends", function (req, res) {

        var newfriend = req.body;
        module.exports = {

            newfriend: newfriend

        }
        var totaldifference;

        console.log(newfriend)
    });
}