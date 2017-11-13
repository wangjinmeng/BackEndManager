import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Authority} from "../../core/service/authority.service";

@Component({
  selector: 'index-authority-list',
  templateUrl: './list.component.html'
})
export class IndexAuthorityListComponent implements OnInit {
  @Input() authorityList:Authority[];
  @Input() curEditId:string;
  @Output() addEvent=new EventEmitter();
  @Output() deleteEvent=new EventEmitter();
  @Output() editEvent=new EventEmitter();
  constructor() { }
  ngOnInit() {}
  add(){
    this.addEvent.emit();
  }
  delete(id){
    this.deleteEvent.emit(id);
  }
  edit(id){
    this.editEvent.emit(id);
  }
}
