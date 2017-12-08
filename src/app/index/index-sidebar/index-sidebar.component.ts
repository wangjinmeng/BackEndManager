import {Component, Input, ViewChildren, QueryList} from '@angular/core';
import {SidebarItemComponent} from "./sidebar-item/sidebar-item.component";
import {SidebarNav} from "../core/service/nav.service";

@Component({
  selector: 'app-index-sidebar',
  templateUrl: './index-sidebar.component.html',
  styleUrls:['./index-sidebar.component.css']
})
export class IndexSidebarComponent{
  curId:number=8;
  @Input() navList:SidebarNav[];
  @ViewChildren(SidebarItemComponent)
  sideBarItem: QueryList<SidebarItemComponent>;
  toggleSubNav(item:{flag:Boolean,component:SidebarItemComponent}){
    if(!item.flag) return;
    this.sideBarItem.forEach((data)=>{
      if(data!=item.component){
        data.isOpen=false;
      }
    })
  }
  toggleSelect(item:{flag:Boolean,component:SidebarItemComponent}){
    if(!item.flag) return;
    this.sideBarItem.forEach((data)=>{
      if(data!=item.component){
        data.isSelect=false;
      }
    })
  }
}

