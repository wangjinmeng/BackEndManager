import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {UserInfoService, UserInfo} from "../../core/service/user-infor/user-infor.service";
import {Title} from "@angular/platform-browser";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  sidebarCollapse:boolean=false;
  userName:string;
  userImg:string;
  curRouter:string;
  constructor(
    private routeInfo:ActivatedRoute,
    // private userService:UserInfoService,
    // private router:Router,
    private tt:Title
  ) {}
  ngOnInit() {
    this.tt.setTitle('123');
    // this.router.events
    //   .filter(event => event instanceof NavigationEnd)
    //   .map(() => this.routeInfo)
    //   .map(route => {
    //     while (route.firstChild) route = route.firstChild;
    //     return route;
    //   })
    //   .filter(route => route.outlet === 'primary')  // 过滤出未命名的outlet，<router-outlet>
    //   .mergeMap(route => route.data)                // 获取路由配置数据
    //   .subscribe((x)=>{
    //     console.log(x);
    //   });
    this.routeInfo.data.subscribe((data:{userInfo:UserInfo})=>{
      this.userName=data.userInfo.name;
      this.userImg=data.userInfo.img;
    })
  }
  changeSidebarCollapseState(){
    this.sidebarCollapse=!this.sidebarCollapse;
  }
}
