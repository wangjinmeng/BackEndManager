import { Pipe, PipeTransform } from '@angular/core';


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
      let key=keyword.toLowerCase();
        return itemFilterValue.indexOf(key)>=0;
    });
  }

}
