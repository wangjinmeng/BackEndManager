import {Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'app-index-sidebar',
  templateUrl: './index-sidebar.component.html'
})
export class IndexSidebarComponent implements OnInit {
  @Input() navList;
  @Input() curId;
  constructor() {}
  ngOnInit() {}
}
