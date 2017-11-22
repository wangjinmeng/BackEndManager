/**
 * Created by OJH on 2017/11/22.
 */

var client = require("./client");

var express = require("express");

var app = express();

app.get('/', function (req, res) {
   res.send('Hello World!');
});

app.get("/getUser", function(req, res){
  var query = req.query;
  console.info("接收参数：" + JSON.stringify(req.params));
  client(function(db){
     var userCollection = db.collection("user");
     userCollection.find({name: query.userName}).toArray(function(err, result){
       if(err){
         console.error("读取数据失败：" + err);
         res.send(err);
         return;
       }
       res.send(result);
     });

  });

});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

