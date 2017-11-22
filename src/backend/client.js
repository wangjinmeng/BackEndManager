/**
 * Created by OJH on 2017/11/22.
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://192.168.88.69:27017/Angular';


module.exports = function(callback){

  MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("mongodb连接成功！");
    if(err != null){
      throw err;
    }

    callback(db);

  });


};



