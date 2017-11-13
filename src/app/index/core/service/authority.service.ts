import {Injectable} from "@angular/core";
export class Authority{
  name:string;
  path:string;
  style:string;
  id?:number|string;
}

@Injectable()
export class AuthorityService{
  authorityArrs:Authority[]=[
    {
      path: 'general',
      name:'小部件',
      style:'fa  fa-cubes',
      id:1
    },
    {
      path: 'form',
      name:'表单',
      style:'glyphicon glyphicon-list-alt',
      id:2
    },
    {
      path: 'animation',
      name:'动画',
      style:'glyphicon glyphicon-film ',
      id:3
    },
    {
      path: 'tree',
      name:'树',
      style:'fa  fa-heartbeat',
      id:4
    },
    {
      path: 'authority',
      name:'权限管理',
      style:'glyphicon glyphicon-menu-hamburger',
      id:5
    }
  ];
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
