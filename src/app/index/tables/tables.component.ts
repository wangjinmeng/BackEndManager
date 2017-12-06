import { Component, OnInit } from '@angular/core';
import {TableList, TablesService} from "./tables.service";
import {FormControl} from "@angular/forms";
import "rxjs/Rx";


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  pageData={
    name:'表格',
    style:'fa fa-table ',
    id:4
  };
  private tableList:Array<TableList>;
  private tableIdFilter:FormControl=new FormControl();
  private keyword:string;

   changeStatus={
      "Approved":"success",
      "Pending":"warning",
      "Denied":"danger"
  };
  constructor(private tableListService:TablesService) {  }

  ngOnInit() {

     this.tableList=this.tableListService.getTableList();
     this.tableIdFilter.valueChanges.debounceTime(500).subscribe(value => this.keyword = value );
     this.ngOnChanges();

  }
  ngOnChanges(): void {

  }
}
