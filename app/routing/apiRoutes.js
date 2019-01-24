var express = require("express")
var path = require("path");
var app = express();
var fs = require("fs");


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

possfriends = [];
var totaldifference = 0;
var arrTD = [];


function totaldiff(array) {
    var matchV = Math.min.apply(null, array);
    console.log(matchV)
    var matchF = array.indexOf(matchV);
    console.log(matchF);

    return matchF;
}

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {

        fs.readFile("app/data/friends.js", "utf8", function (err, response) {

            if (err) throw err;
            var results = JSON.parse(response);






            //console.log(JSON.parse(response))
        })
    })

    app.post("/api/friends", function (req, res) {
        var newfriend = req.body;
        possfriends.push(newfriend);
        fs.readFile("app/data/friends.js", "utf8", function (err, data) {
            if (err) throw err;

            if (data.length === 0) {
                [].push.apply(possfriends, datalist);
            } else {
                var datalist = JSON.parse(data);
                [].push.apply(possfriends, datalist);

                datalist.forEach(function (item) {
                    console.log(arrTD);
                    var total = 0;
                    var friend = item.score;
                    var search = newfriend.score;
                    for (var i = 0; i < search.length + 1; i++) {
                        if (i === 9) {
                            var diff = (parseInt(friend[i]) - parseInt(search[i]))
                            total += Math.abs(diff)
                            // console.log(total);

                            arrTD.push((total))
                            // arrTD.push(total);
                        } else {
                            var diff = (parseInt(friend[i]) - parseInt(search[i]))
                            total += Math.abs(diff)
                            //  console.log(total + "         nlnn;");
                        }

                    }

                })



            }

            console.log(arrTD);
            var match = totaldiff(arrTD);
            res.send(datalist[match].name)
            // console.log(arrTD);






            //  console.log("Survey :" + survey);
            // console.log("data :" + (datalist));
            //console.log("array :" + (possfriends));

            fs.writeFile("app/data/friends.js", JSON.stringify(possfriends), function (err, response) {
                if (err) throw err;
                //creata array variable ot hold data then send it back

                console.log("confirm");

            })




        });

    })
}