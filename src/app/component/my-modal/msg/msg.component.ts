import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg',
  templateUrl:'./msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
  msg:string='请传入文字';
  hide:Function;
}
