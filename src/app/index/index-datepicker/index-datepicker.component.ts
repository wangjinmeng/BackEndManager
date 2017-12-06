import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { listLocales } from 'ngx-bootstrap/bs-moment';
@Component({
  selector: 'app-index-datepicker',
  templateUrl: './index-datepicker.component.html'
})
export class IndexDatepickerComponent implements OnInit {
  pageData={
    name:'日期选择器',
    style:'fa  fa-heartbeat',
    id:11
  };
  minDate:Date=new Date(2017,0,1);
  maxDate:Date=new Date(2017,11,31);
  bsValue:Date=new Date();
  formGroup:FormGroup;
  myTime=new Date();
  bsConfig;
  colorTheme:string='default';
  constructor(
    private fb:FormBuilder
  ) { }
  ngOnInit() {
    console.log(listLocales());
    this.formGroup=this.fb.group({
      data:new FormControl('',[Validators.required])
    })
  }
  applyTheme(dp){
    this.bsConfig=Object.assign({},{
      containerClass: this.colorTheme,
      showWeekNumbers:false
    });
    setTimeout(()=>{
      dp.show();
    },300)
  }
}
