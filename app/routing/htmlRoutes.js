////////////////////////////////////////////var express = require("express")
var path = require("path");

possfriends = [];
var totaldifference = 0;
var arrTD = [];
//var app = express();

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))






    })
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))





    })

}