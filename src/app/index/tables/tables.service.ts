import { Injectable } from '@angular/core';

@Injectable()
export class TablesService {
  private tableList:TableList[]=[
       new TableList(1,"John","11-7-2014","Approved","Approved"),
       new TableList(2,"Alexander","11-7-2015","Pending","Approved"),
       new TableList(3,"Bob","11-7-2016","Approved","Approved"),
       new TableList(4,"Mike","11-7-2017","Denied","Approved"),
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
