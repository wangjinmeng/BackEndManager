import {Component, OnInit, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'share-alert',
  templateUrl: './share-alert.component.html'
})
export class ShareAlertComponent implements OnInit,OnChanges {
  @Input() styleTheme:string='info';
  @Input() toolClose:boolean=false;
  @Output()
  styleClass={
    'alert':true,
    'alert-dismissible':true
  };
  setStyleClass(){
    this.styleClass={
      'alert':true,
      'alert-dismissible':true
    };
    this.styleClass['alert-'+this.styleTheme]=true;
  }
  constructor() { }
  ngOnChanges(): void {
    this.setStyleClass()
  }
  ngOnInit() {
    this.ngOnChanges()
  }
}
