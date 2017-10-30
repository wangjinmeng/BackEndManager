import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'share-box',
  templateUrl: './share-box.component.html'
})
export class ShareBoxComponent implements OnInit,OnChanges {
  @Input() loading:boolean=false;
  @Input() toolCollapse:boolean=true;
  @Input() toolRemove:boolean=false;
  @Input() styleSolid:boolean=false;
  @Input() styleCollapsed:boolean=false;
  @Input() styleTheme:number=0;

  @Output() eventCollapse=new EventEmitter();
  @Output() eventRemove=new EventEmitter();
  themeArr=['default','primary','success','warning','danger'];
  currentClasses={};
  setCurrentClass(){
    this.currentClasses={
      'box':true,
      'box-solid':this.styleSolid,
      'collapsed-box':this.styleCollapsed
    };
    this.currentClasses['box-'+this.themeArr[this.styleTheme]]=true;
  }
  constructor() {}
  ngOnInit() {
    this.ngOnChanges()
  }
  ngOnChanges(): void {
    this.setCurrentClass()
  }
  remove(){
    this.eventRemove.emit()
  }
  collapse(){
    this.styleCollapsed=!this.styleCollapsed
    this.eventCollapse.emit(this.styleCollapsed)
  }
}


