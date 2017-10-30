import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserInfoService, UserInfo} from "../../core/service/user-infor/user-infor.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  sidebarCollapse:boolean=false;
  userName:string;
  userImg:string;
  constructor(
    private routeInfo:ActivatedRoute,
    private userService:UserInfoService,
    private router:Router
  ) { }
  ngOnInit() {
    this.routeInfo.data.subscribe((data:{userInfo:UserInfo})=>{
      console.log(data.userInfo);
      this.userImg=data.userInfo.img;
      this.userName=data.userInfo.name;
    })
  }
  changeSidebarCollapseState(){
    this.sidebarCollapse=!this.sidebarCollapse;
  }
}
