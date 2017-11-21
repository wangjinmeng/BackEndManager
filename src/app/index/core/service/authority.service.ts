import {Injectable} from "@angular/core";
import {authorities, Authority} from "../authority.data";

@Injectable()
export class AuthorityService{
  authorityArrs:Authority[]=authorities;
  count:number=this.authorityArrs.length+1;
  getId(){
    return this.count++;
  }
  get(){
    return this.authorityArrs;
  }
  getById(id){
    let index=0;
    let arr;
    this.authorityArrs.find((a,i)=>{
      if(a.id==id){
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
    this.authorityArrs.push(data);
    return true;
  }
  edit(data){
    let index=this.getById(data.id).index;
    this.authorityArrs[index]=data
    return true
  }
  delete(id){
    let index=this.getById(id).index;
    this.authorityArrs.splice(index,1)
    return true;
  }
}
