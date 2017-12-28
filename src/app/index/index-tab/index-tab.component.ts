import {Component, OnInit, ViewChild} from '@angular/core';
import {TabsetComponent} from "ngx-bootstrap";
import {ComponentData} from "../core/component.data";

@Component({
  selector: 'app-index-tab',
  templateUrl: './index-tab.component.html'
})
export class IndexTabComponent implements OnInit,ComponentData{
  pageData: {name: string; style: string}={
    name:'选项卡',
    style:'fa fa fa-square'
  };
  ngOnInit(): void {
  }
  // @ViewChild('staticTabs') staticTabs:TabsetComponent;
  // constructor() { }
  // ngOnInit() {
  // }
  // select(index){
  //   this.staticTabs.tabs[index].active=true
  // }
  // disableEnable(index){
  //   this.staticTabs.tabs[index].disabled=!this.staticTabs.tabs[index].disabled
  // }
}
