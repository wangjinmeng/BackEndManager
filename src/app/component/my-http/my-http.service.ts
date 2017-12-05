import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyModalModule} from "../my-modal/my-modal.module";
import {MyModalService} from "../my-modal/my-modal.service";
import set = Reflect.set;
const type={
  success:true,
  failed:false
};
@Injectable()
export class MyHttpService {
  constructor(
    public http:HttpClient,
    private myModal:MyModalService
  ) { }
  config:MyHttpConfig={
    loading:true,
    successPopup:true,
    successMsg:'操作成功',
    errorPopup:true
  };
  request(method,url,params,opt?:MyHttpConfig){
    let _this=this;
    let conf=Object.assign({},this.config,opt||{});
    let ref;
    if(conf.loading){
      ref=this.myModal.loading();
    }

    return new Observable((observer)=>{
      let observerObj={
        next:data =>{
          if(conf.loading){
            _this.myModal.hideModal(ref);
          }
          if(data['type']==='failed'){
            if(conf.errorPopup){
              setTimeout(()=>{_this.myModal.msg(data['msg']||conf.errorMsg);},0)
            }
            observer.error('error');
          }else{
            observer.next(data);
            if(conf.successPopup){
              setTimeout(()=>{_this.myModal.msg(conf.successMsg);},0)
            }
          }
        },
        error:(err)=>{
          if(conf.loading){
            _this.myModal.hideModal(ref);
          }
          if(conf.errorPopup){
            setTimeout(()=>{_this.myModal.msg('服务发生错误');},0)
          }
          observer.error(err);
        },
        complete:()=>{
          observer.complete();
        }
      };
      if(method==='get'){
        this.http.get(url).subscribe(observerObj);
      }else if(method=='post'){
        const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded ");
        let paramsArr=[];
        for(let key in params){
          paramsArr.push(`${key}=${params[key]}`);
        }
        this.http.post(url,paramsArr.join('&'),{headers}).subscribe(observerObj);
      }
    });
  }

  get(url,opt?:MyHttpConfig){
    return this.request('get',url,{},opt);
  }
  post(url,data,opt?:MyHttpConfig){
    return this.request('post',url,data,opt);
  }
}

export class MyHttpConfig {
  loading?:Boolean;
  successPopup?:Boolean;
  successMsg?:string;
  errorPopup?:Boolean;
  errorMsg?:string;
}
