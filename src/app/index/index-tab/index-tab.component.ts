import {Component, OnInit, ViewChild} from '@angular/core';
import {TabsetComponent} from "ngx-bootstrap";

@Component({
  selector: 'app-index-tab',
  templateUrl: './index-tab.component.html'
})
export class IndexTabComponent implements OnInit {
  pageData={
    name:'选项卡',
    style:'fa  fa-heartbeat',
    id:10
  };
  @ViewChild('staticTabs') staticTabs:TabsetComponent;
  constructor() { }
  ngOnInit() {
  }
  select(index){
    this.staticTabs.tabs[index].active=true
  }
  disableEnable(index){
    this.staticTabs.tabs[index].disabled=!this.staticTabs.tabs[index].disabled
  }
}
