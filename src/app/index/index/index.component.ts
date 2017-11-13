import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {UserInfoService, UserInfo} from "../../core/service/user-infor/user-infor.service";
import {Title} from "@angular/platform-browser";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {NavService} from "../nav.service";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles:[
    ` 
 `
  ]
})
export class IndexComponent implements OnInit {
  sidebarCollapse:boolean=false;
  userName:string;
  userImg:string;
  pageTitle:string;
  curRouteId;
  navData;
  curRouter:string;
  constructor(
    private routeInfo:ActivatedRoute,
    private router:Router,
    private navService:NavService,
    private tt:Title
  ) {}
  ngOnInit() {
    this.navData=this.navService.getNavData();
    this.tt.setTitle('123');
    this.setPage(this.routeInfo.snapshot.children[0].data);
    console.log()
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.routeInfo)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')  // 过滤出未命名的outlet，<router-outlet>
      .mergeMap(route => route.data)                // 获取路由配置数据
      .subscribe((x)=>{
        this.setPage(x);
        console.log(this.routeInfo.firstChild);
        this.routeInfo.fragment.subscribe(x=>{console.log(x)})
      });

    this.routeInfo.data.subscribe((data:{userInfo:UserInfo})=>{
      this.userName=data.userInfo.name;
      this.userImg=data.userInfo.img;
    });
  }
  changeSidebarCollapseState(){
    this.sidebarCollapse=!this.sidebarCollapse;
  }
  setPage(data){
    this.curRouteId=data.id;
    this.pageTitle=data.name;
    this.tt.setTitle(data.title)
  }
}
