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


function totaldiff(score, userS) {
    var total = 0;

    for (var i = 0; i = 11; i++) {
        // for loop repeat until it get the total
        // until the loop end 

        if (i === 10) {

            arrTD.push(total)
            console.log(arrTD)
        } else {
            total += diff;

            var diff = Math.abs(parseInt(score[i]) + Math.abs(parseInt(userS[i])))


        }


    }


}

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {

        fs.readFile("app/data/friends.js", "utf8", function (err, response) {

            if (err) throw err;
            var results = JSON.parse(response);
            res.send(results);






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

            }



            datalist.forEach(function (item) {

                total = 0;
                var friend = item.score;
                var search = newfriend.score;
                // totaldifference += total;


                totaldiff(friend, search);

                /* totaldifference = 7;
                    console.log(friend + "   " + search)
                    totaldifference = 0;
                    for (var i = 0; i < 11; i++) {


                        total = (parseInt(friend[i]) + parseInt(search[i]))

                        arrTD.push(total);

                    }
*/
            })






            console.log(arrTD);

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