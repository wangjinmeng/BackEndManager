/**
 * Created by OJH on 2017/11/22.
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://139.199.17.200:27017/angular';



module.exports = function(callback){
  console.log("打开数据库连接..." );
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    if(err != null){
      throw err;
    }

    console.log("数据库连接成功!" );
    try{
      var result = callback(db);
      if(result != null){
          result.then(function(){
            console.log("异步处理之后关闭连接!");
            db.close();
          }, function(err){
            console.log("发生异常之后关闭连接:" + err.message);
            db.close();
          });
      }else{
        console.log("同步处理之后关闭连接!");
        db.close();
      }
    }catch(e){
      console.log("发生异常之后关闭连接!");
      db.close();
      throw e;
    }

  });


};





