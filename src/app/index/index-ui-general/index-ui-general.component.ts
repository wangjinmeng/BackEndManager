import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-ui-general',
  templateUrl: './index-ui-general.component.html'
})
export class IndexUiGeneralComponent implements OnInit {
  pageData= {
    name:'小部件',
    style:'fa  fa-cubes',
    id:1
  }
  constructor() { }

  ngOnInit() {
  }

}
