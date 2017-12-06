import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  pageData={
    name:'日期',
    style:'fa fa-calendar ',
    id:5
  };
  constructor() { }
  ngOnInit() {}
}
