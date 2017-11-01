import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.css']
})
export class IndexHeaderComponent implements OnInit {
  @Output() toggleNavStateEvent=new EventEmitter();
  @Input() userName:string;
  @Input() userImg:string;
  title:string='';
  constructor() { }
  ngOnInit() {}
  toggleNavState(){
    this.toggleNavStateEvent.emit();
  }
  signOut(){

  }
}
