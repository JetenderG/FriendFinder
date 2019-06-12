var express = require("express");
var path = require("path");
var app = express();
PORT = process.env.PORT || 3000;
var htmlR = require("./app/routing/htmlRoutes.js");
var apiR = require("./app/routing/apiRoutes.js")

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

htmlR(app);
apiR(app);
////////////////////////////////////////////
/*
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"))
})
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survey.html"))
})


app.post("/app/friends", function (req, res) {

    var friend = req.body;

    console.log(friend);


    // res.sendFile(path.join(__dirname, "./app/data/friends.js"));

});

*/
app.listen(PORT, function () {
    console.log("App listening into PORT: " + PORT);
    console.log("http://localhost:" + PORT)
})