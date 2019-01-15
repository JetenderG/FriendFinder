var express = require("express")
var path = require("path");
var app = express();



app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


module.exports = function (app) {
    get.app("/app/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "./app/"));
    })

    post.app("app/friends", function (req, res) {});
}