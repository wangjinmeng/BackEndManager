import {Component, OnInit, Input} from '@angular/core';
import {fade} from "../common/animations";

@Component({
  selector: 'my-panel',
  templateUrl: './my-panel.component.html',
  styles:[`
  a{color: inherit;}
  a:hover{color: rgba(0,0,0,.7);}
  `],
  animations:[fade]
})
export class MyPanelComponent implements OnInit {
  @Input() theme:string='default';//default、primary、success、info、warning、warning
  @Input() header:string='title';
  @Input() showToolMinus:Boolean=false;
  @Input() showToolClose:Boolean=false;
  @Input() show:boolean=true;
  @Input() expand:Boolean=true;
  get state(){
    return this.expand?'active':'inactive';
  }
  constructor() { }
  ngOnInit() {}
  minus(){
    this.expand=!this.expand
  }
  close(){
    this.show=false
  }

}
