/**
 * Created by OJH on 2017/11/22.
 */


var express = require("express");

var client = require("./client");
var app = require("./appServer");

var userRouter = express.Router();

/**
 * 获取用户信息
 */
userRouter.get("/getUser", function(req, res){
  var query = req.query;
   console.log("接收参数：" + JSON.stringify(query));
   if(query.id == null || query.id == ""){
     res.send("not found");
     return;
   }
  client(function(db){
    var userCollection = db.collection("user");
    userCollection.find({id:query.id}).toArray(function(err, result){
      if(err){
        console.error("读取数据失败：" + err);
        res.send(err);
        return;
      }

      res.send(result);
    });

  });

});


app.use("/user", userRouter);



