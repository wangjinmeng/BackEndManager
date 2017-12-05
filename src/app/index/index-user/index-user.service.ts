import {Injectable} from '@angular/core';
import {MyHttpService} from "../../component/my-http/my-http.service";
import {Observable} from "rxjs";

@Injectable()
export class IndexUserService {
  constructor(public myHttp:MyHttpService) {}
  getList(){
    return this.myHttp.get('/api/user/listPage',{successPopup:false,loading:false});
  }
  getItem(id){
    return this.myHttp.get('/api/user/getUser?id='+id,{successPopup:false,loading:false});
  }
  add(data:User){
    return this.myHttp.post('/api/user/save',data,{successPopup:true,loading:true});
  }
  delete(id){
    return this.myHttp.post('/api/user/delete',{id:id},{successPopup:true,loading:true});
  }
  update(data:User){
    return this.myHttp.post('/api/user/update',data,{successPopup:true,loading:true});
  }
}
export class User{
  id?:string;
  name:string;
  password:string;
  age:number;
  address:string;
  introduction:string;
}
