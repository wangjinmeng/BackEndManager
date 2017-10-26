/**
 * Created by wangjinmeng on 2017/10/26.
 */
import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {LoginService} from "../login/service/login/login.service";
@Injectable()
export class IndexGuard implements CanActivate{
  constructor(private loginService:LoginService,private router:Router){}
  canActivate(){
    if(this.loginService.getCurrentState()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false
    }
  }
}
