import {Injectable} from "@angular/core";
export class Role{
  id?:string;
  name:string;
  authorityIds:string[];
}
@Injectable()
export class RoleService{
  roleArrs:Role[]=[
    {
      id:'1',
      name:'超级管理员',
      authorityIds:['1','2','3','4','5','6']
    },
    {
      id:'2',
      name:'超级管理员2',
      authorityIds:['1','4','5']
    }
  ];
  count:number=this.roleArrs.length+1;
  getId(){
    return this.count++;
  }
  get(){
    return this.roleArrs;
  }
  getById(id){
    let index=0;
    let arr;
    this.roleArrs.find((a,i)=>{
      if(a.id===id){
        arr=a;
        index=i;
        return true
      }
      return false
    });
    return {index:index,arr:arr}
  }
  add(data){
    data.id=this.getId();
    this.roleArrs.push(data);
    return true;
  }
  edit(data){
    let index=this.getById(data.id).index;
    this.roleArrs[index]=data
    return true
  }
  delete(id){
    let index=this.getById(id).index;
    this.roleArrs.splice(index,1)
    return true;
  }
}
