import { Injectable } from '@angular/core';
import {users} from "../userInfor";

let currentState=false;
@Injectable()
export class LoginService {
  constructor() { }
  currentState:boolean;
  validPassword(name,password){
    return new Promise((resolve,reject)=>{
      let _res=users.find((item)=>{
        return item['name']===name&&item['password']===password;
      });
      if(_res){
        currentState=true;
        resolve(_res.id);
      }else{
        currentState=false;
          reject()
      }
    })
  }
  getCurrentState(){
    return currentState;
  }
}
