import {Component} from "@angular/core";
@Component({
  templateUrl:'./index-user.component.html'
})
export class IndexUserComponent{
  pageData={
    name:'用户管理',
    style:'fa  fa-user',
    id:9
  };
  constructor() { }
}
