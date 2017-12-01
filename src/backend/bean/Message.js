/**
 * 统一消息类型
 * Created by OJH on 2017/12/1.
 */

class Message{

  constructor(type, msg){
    this.type = type;
    this.msg = msg;
    this.data = {};
  }


  static success(msg){
    return new Message("success", msg);
  }


  static failed(msg){
    return new Message("failed", msg);
  }

  /**
   * 附加数据
   * @param key
   * @param value
   */
  addData(key, value){
    this.data[key] = value;
  }

}


module.exports = Message;
