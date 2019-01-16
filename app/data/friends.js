var data = require("../routing/apiRoutes")
var possFriends = [];

possFriends.push(data.newfriend)


module.exports = {

    possFriends: possFriends
}

/*module.exports = function (app) {

    app.post("/app/data/friends", function (req, res) {

        var friend = req.body;

        possFriends.push(friend);
        console.log(possFriends);
        console.log("GIID");

        // res.sendFile(path.join(__dirname, "./app/data/friends.js"));

    })


}
*/