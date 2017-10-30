import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'share-callout',
  templateUrl: './share-callout.component.html',
  styleUrls: ['./share-callout.component.css']
})
export class ShareCalloutComponent implements OnInit {
  @Input() styleTheme:string='info';
  styleClass={};
  setStyleClass(){
    this.styleClass={
      'callout':true
    };
    this.styleClass['callout-'+this.styleTheme]=true;
  }
  constructor() { }
  ngOnChanges(): void {
    this.setStyleClass()
  }
  ngOnInit() {
    this.ngOnChanges()
  }
}
