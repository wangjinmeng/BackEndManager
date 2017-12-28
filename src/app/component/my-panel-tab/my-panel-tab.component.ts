import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'my-panel-tab',
  template: `
  <div class="panel-body" [style.display]="display">
    <ng-content></ng-content>
  </div>
  `,
  styles:[`
  .tab-pane{
  border: 1px solid #ddd;
  border-top: none;
  padding: 15px;
  } `]
})
export class MyPanelTabComponent implements OnInit {
  @Input() header:string;
  selected:boolean=false;
  get display(){
    return this.selected?'block':'none'
  }
  constructor() { }
  ngOnInit() {}
  setSelect(flag:boolean){
    this.selected=flag;
  }
}
