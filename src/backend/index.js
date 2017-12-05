/**
 * Created by OJH on 2017/11/22.
 */


var Message = require("./bean/Message");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(function(req, res, next){
  console.log("接收请求：" + req.originalUrl);
  console.log("~附加参数：" + JSON.stringify(req.query) + ">>" + JSON.stringify(req.body));
  next();
});

app.use(require("./controller/user"));

app.use(function(req,res, next){
  res.status(404);
  res.send(Message.failed("请求的内容未找到-404"));
});

app.use(function(err, req, res, next){
    console.error("请求发生了错误：" + err, err.stack);
    res.send(Message.failed(err.message || err));
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('服务启动成功 http://%s:%s', host, port);
});



