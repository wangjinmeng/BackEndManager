import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'my-panel-tab-nav',
  template: `
  <!--<ul class="nav nav-tabs">-->
  <div class="btn-group pull-right" role="group" aria-label="...">
    <a 
    class="btn btn-{{theme}}"
    *ngFor="let tab of tabs;let i=index;" 
    [class.active]="tab.selected"
    (click)="tabClick(i)">
      {{tab.header}}
    </a>
  </div>
  <!--</ul>-->
  `
})
export class MyPanelTabNavComponent implements OnInit {
  @Input() tabs;
  @Input() theme;
  @Output() onTabClick=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  tabClick(index){
    this.onTabClick.emit(index);
  }
}
