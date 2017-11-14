import {Injectable} from "@angular/core";
export class User{
  id?:string;
  name:string;
  roleId:string;
  img:string;
}
@Injectable()
export class UserService{
  users:User[]=[
    {id:'1',name:'user1',img:'assets/img/user1-128x128.jpg',roleId:'1'},
    {id:'2',name:'user2',img:'assets/img/user2-160x160.jpg',roleId:'1'},
    {id:'3',name:'user3',img:'assets/img/user3-128x128.jpg',roleId:'1'},
    {id:'4',name:'user4',img:'assets/img/user4-128x128.jpg',roleId:'1'},
    {id:'5',name:'user5',img:'assets/img/user5-128x128.jpg',roleId:'1'},
    {id:'6',name:'user6',img:'assets/img/user6-128x128.jpg',roleId:'1'},
    {id:'7',name:'user7',img:'assets/img/user7-128x128.jpg',roleId:'1'},
    {id:'8',name:'user8',img:'assets/img/user8-128x128.jpg',roleId:'1'}
  ];
  count:number=this.users.length+1;
  getId(){
    return this.count++;
  }
  get(){
    return this.users;
  }
  getById(id){
    let index=0;
    let arr;
    this.users.find((a,i)=>{
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
    this.users.push(data);
    return true;
  }
  edit(data){
    let index=this.getById(data.id).index;
    this.users[index]=data
    return true
  }
  delete(id){
    let index=this.getById(id).index;
    this.users.splice(index,1)
    return true;
  }
}
