/**
 * Created by OJH on 2017/11/22.
 */


var User = require("../bean/User");
var Message = require("../bean/Message");

var dbConnection = require("../dbConnection");

var express = require("express");


var app  = express();
var userRouter = express.Router();

userRouter.get("/listPage", function(req, res, next){
   //分页参数
  var query = req.query;
  var rows = query.rows;
  var page = query.page;
  if(rows == null){
    rows = 20;
  }else{
     rows = parseInt(rows);
  }
  if(page == null){
    page = 1;
  }else{
    page = parseInt(page);
  }

  var skipSize = rows * (page - 1);
  dbConnection(function(db){

    var promise = new Promise(function(resolve, reject){
        var userCollection = db.collection("user");
        var cursor = userCollection.find().skip(skipSize).limit(rows);
        cursor.count().then(function(count){

          cursor.toArray(function(err, list){
            if(err != null){
              next(err);
              return;
            }

            res.send({
              content:list,
              count:count
            });

            resolve();

          });
        });


    });

    return promise;
  });




});


userRouter.get("/getUser", function(req, res, next){
  var query = req.query;
  if(query.id == null){
     throw new Error("请求参数id是必须的");
  }

  dbConnection(function(db){
    var promise = new Promise(function(resolve, reject){

      var userCollection = db.collection("user");
      userCollection.findOne({id:query.id}).then(function(user){
        res.send(user);
        resolve();
      });

    });

    return promise;

  });


});

userRouter.post("/save",  function(req, res, next){
  var requestData = req.body;

  dbConnection(function(db){
    var promise = new Promise(function(resolve, reject){

      var userCollection = db.collection("user");
      var user = new User();
      user.name = requestData.name;
      user.password = requestData.password;
      user.age = requestData.age;
      user.address = requestData.address;
      user.introduction = requestData.introduction;
      userCollection.insertOne(user).then(function(r){
        res.send(Message.success("添加用户成功"));
        resolve();
      });

    });

    return promise;

  });

});


userRouter.post("/update", function(){
  var requestData = req.body;
  if(requestData.id == null){
    throw new Error("请求参数id是必须的");
  }

  dbConnection(function(db){
    var promise = new Promise(function(resolve, reject){

      var userCollection = db.collection("user");
      userCollection.findOne({id:query.id}).then(function(user){
        user.name = requestData.name;
        user.password = requestData.password;
        user.age = requestData.age;
        user.address = requestData.address;
        user.introduction = requestData.introduction;
        userCollection.findOneAndUpdate({id:user.id}, user).then(function(r){
          res.send(Message.success("修改用户成功"));
          resolve();
        });


      });


    });

    return promise;

  });

});


userRouter.post("/delete", function(req, res, next){
  var requestData = req.body;
  if(requestData.id == null){
    throw new Error("请求参数id是必须的");
  }

  dbConnection(function(db){
    var promise = new Promise(function(resolve, reject){

      var userCollection = db.collection("user");
      userCollection.findOne({id:query.id}).then(function(user){

        userCollection.deleteOne({id:user.id}).then(function(r){
          res.send(Message.success("删除用户成功"));
          resolve();
        });

      });


    });

    return promise;

  });

});

app.use("/user", userRouter);

module.exports = app;




