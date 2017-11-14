import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'index-role-list',
  templateUrl: './list.component.html'
})
export class IndexRoleListComponent implements OnInit {
  @Input() curEditId;
  @Input() roles;
  @Output() addEvent=new EventEmitter()
  @Output() editEvent=new EventEmitter()
  @Output() deleteEvent=new EventEmitter()
  constructor() { }
  ngOnInit() {}
  add(){
    this.addEvent.emit()
  }
  edit(data){
    this.editEvent.emit(data)
  }
  delete(id){
    this.deleteEvent.emit(id)
  }
}
