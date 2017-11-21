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
  getIndex(id){
    let index=0;
    this.authorityArrs.find((a,i)=>{
      if(a.id==id){
        index=i;
        return true
      }
      return false
    });
    return index
  }
  getById(id){
    return new Promise((resolve,reject)=>{
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
      setTimeout(()=>{
        resolve({index:index,arr:arr});
        },3000)
    })
  }
  add(data){
    return new Promise((resolve,reject)=>{
      data.id=this.getId();
      this.authorityArrs.push(data);
      setTimeout(()=>{
        resolve(true)
      },3000)
    })
  }
  edit(data){
    return new Promise((resolve,reject)=>{
      let index=this.getIndex(data.id);
      this.authorityArrs[index]=data;
      setTimeout(()=>{
        resolve(true)
      },3000);
    })
  }
  delete(id){
    return new Promise((resolve,reject)=>{
      let index=this.getIndex(id);
      this.authorityArrs.splice(index,1)
      setTimeout(()=>{
        resolve(true)
      },3000);
    });
  }
}
