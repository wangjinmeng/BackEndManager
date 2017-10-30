import { Injectable } from '@angular/core';
import {users} from "../userInfor";

export class UserInfo{
  constructor(
    public id:string,
    public name:string,
    public img:string
  ){}
}

@Injectable()
export class UserInfoService {
  constructor() { }
  getUserInfoById(id){
    let _res=users.find((item)=>{
      return item['id']===id;
    });
    if(_res){
      return new UserInfo(_res.id,_res.name,_res.img)
    }else{
     return null
    }
  }
}
