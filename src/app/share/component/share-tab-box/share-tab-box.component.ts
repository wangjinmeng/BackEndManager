import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'share-tab-box',
  templateUrl: './share-tab-box.component.html'
})
export class ShareTabBoxComponent implements OnInit {
  @Input() navData:{key:string,text:string,active:Boolean}[];
  constructor() { }

  ngOnInit() {
  }

}
