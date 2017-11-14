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
  private tableList:Array<TableList>;
  private tableIdFilter:FormControl=new FormControl();
  private keyword:string;
  constructor(private tableListService:TablesService) { }

  ngOnInit() {
     this.tableList=this.tableListService.getTableList();
     this.tableIdFilter.valueChanges.debounceTime(500).subscribe(value => this.keyword = value )
  }

}
