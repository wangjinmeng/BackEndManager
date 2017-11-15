import {Component, Input, Output, EventEmitter, OnInit, OnChanges} from "@angular/core";
@Component({
  selector:'index-user-list',
  templateUrl:'list.component.html'
})
export class IndexUserListComponent implements OnInit,OnChanges{
  @Input() curEditId;
  @Input() users;
  @Output() addEvent=new EventEmitter()
  @Output() editEvent=new EventEmitter()
  @Output() deleteEvent=new EventEmitter()
  constructor() { }
  ngOnInit() {}
  ngOnChanges(){}
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
