import { Injectable } from '@angular/core';

@Injectable()
export class TablesService {
  private tableList:TableList[]=[
       new TableList(1,"John Doe","11-7-2014","Approved","Approved"),
       new TableList(2,"Alexander Pierce","11-7-2015","Approved","Approved"),
       new TableList(3,"Bob Doe","11-7-2016","Approved","Approved"),
       new TableList(4,"Mike Doe","11-7-2017","Approved","Approved"),
  ];
  constructor() { }
   getTableList():TableList[]{
          return this.tableList;
   }
   getTableId(tableId:number):TableList{
        var tId=this.tableList.find(function(tableList){return tableList.id==tableId;});
        if(!tId){
          tId= new TableList(0,"","","","");
        }
        return tId;
   }
}
export class TableList{
    constructor(
      public id:number,
      public user:string,
      public date:string,
      public status:string,
      public reason:string){

    }
}
