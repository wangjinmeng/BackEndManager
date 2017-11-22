/**
 * Created by OJH on 2017/11/22.
 */

var app = require("./appServer");
app.get('/', function (req, res) {
  res.send('欢迎使用angular');
});

require("./user");

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

