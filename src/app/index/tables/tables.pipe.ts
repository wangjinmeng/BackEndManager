import { Pipe, PipeTransform } from '@angular/core';
import {TableList} from "./tables.service";

@Pipe({
  name: 'tablesFilter'
})
export class TablesPipe implements PipeTransform {

  transform(tableList: any, field:string,keyword:string): any {
    if(!field || !keyword){
      return tableList;
    }
    return tableList.filter(item => {
      let itemFilterValue=item[field].toLowerCase();
       return itemFilterValue.indexOf(keyword)>=0;
    });
  }

}
