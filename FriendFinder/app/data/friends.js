var express = require("express");
var path = require("path");



var app = express()




app.post("/app/friends", function (req, res) {

    var friend = req.body;

    console.log(friend);


    // res.sendFile(path.join(__dirname, "./app/data/friends.js"));

});