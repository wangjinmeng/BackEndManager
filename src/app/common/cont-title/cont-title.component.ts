import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cont-title',
  templateUrl: './cont-title.component.html',
  styleUrls: ['./cont-title.component.css']
})
export class ContTitleComponent implements OnInit {
  @Input() title:string;
  @Input() subTitle:string;
  constructor() { }

  ngOnInit() {
  }

}
