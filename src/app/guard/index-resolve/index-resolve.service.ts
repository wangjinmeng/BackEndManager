import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, Router} from "@angular/router";
import {UserInfo, UserInfoService} from "../../core/service/user-infor/user-infor.service";
import {Observable} from "rxjs";
@Injectable()
export class IndexResolveService implements Resolve<UserInfo>{
  constructor(private us:UserInfoService,private router:Router) { }
  resolve(route: ActivatedRouteSnapshot): Observable<UserInfo>|Promise<UserInfo>|UserInfo {
    let id = route.paramMap.get('id');
    let _res=this.us.getUserInfoById(id);
    if(_res){
      return _res;
    }else{
      this.router.navigate(['/login']);
      return null
    }
  }
}
