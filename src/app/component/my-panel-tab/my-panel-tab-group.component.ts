import {Component, QueryList, ContentChildren, AfterContentInit, Input} from '@angular/core';
import {MyPanelTabComponent} from "./my-panel-tab.component";

@Component({
  selector: 'my-panel-tab-group',
  template: `
    <div  class="panel panel-{{theme}}">
     <div class="panel-heading">
        <my-panel-tab-nav [tabs]="tabs" (onTabClick)="tabClick($event)" [theme]="theme"></my-panel-tab-nav>
        <h4>{{header}}&nbsp;</h4>
     </div>
      <ng-content></ng-content>
    </div>
    `
})
export class MyPanelTabGroupComponent implements AfterContentInit{
  @ContentChildren(MyPanelTabComponent) tabGroup: QueryList<MyPanelTabComponent>;
  @Input() theme:string='default';
  @Input() header:string='';
  tabs:MyPanelTabComponent[];
  currentIndex:number=0;
  constructor() { }
  ngAfterContentInit() {
    this.tabs=this.tabGroup.toArray();
    this.tabs[this.currentIndex].setSelect(true)
  }
  tabClick(index){
    this.tabs.forEach((tab)=>{
      tab.setSelect(false);
    });
    this.currentIndex=index;
    this.tabs[this.currentIndex].setSelect(true)
  }
}
