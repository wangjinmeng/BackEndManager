/**
 * 用户信息
 * Created by OJH on 2017/11/30.
 */

class User{

  constructor(){
      this.id = "user_" + new Date().getTime() + Math.round(Math.random() * 1000);
      this.name = null;
      this.password = null;
      this.age = null;
      this.address = null;
      this.introduction = null;
    }

}


module.exports = User;
