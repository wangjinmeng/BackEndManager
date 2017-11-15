import {Component, OnInit} from "@angular/core";
import {UserService, User} from "../core/service/user.service";
import {RoleService, Role} from "../core/service/role.service";
@Component({
  templateUrl:'./index-user.component.html'
})
export class IndexUserComponent implements OnInit{
  userList:User[];
  roles:Role[];
  curUser;
  curEditId:string;
  curMethod:number=0;//0:添加；1:编辑
  formTitle:string='添加';
  constructor(
    private userService:UserService,
    private roleService:RoleService
  ) { }
  ngOnInit() {
    this.roles=this.roleService.get();
    this.userList=this.userService.get();
  }
  add(){
    this.curMethod=0;
    this.formTitle='添加';
    this.curUser={
      id:'',
      name:'',
      img:'',
      roleId:'1'
    };
    this.curEditId='';
  }
  edit(item){
    this.curMethod=1;
    this.formTitle='编辑';
    this.curUser=item;
    this.curEditId=item.id;
  }
  delete(id){
    this.userService.delete(id)
  }

  submit(data){
    if(this.curMethod==0){
      this.userService.add(data);
    }else{
      this.userService.edit(data);
    }
  }
  cancel(){
    this.add();
  }
}
