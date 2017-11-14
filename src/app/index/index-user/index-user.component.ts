import {Component, OnInit} from "@angular/core";
import {UserInfoService} from "../../core/service/user-infor/user-infor.service";
import {UserService, User} from "../core/service/user.service";
import {RoleService, Role} from "../core/service/role.service";
@Component({
  templateUrl:'./index-user.component.html'
})
export class IndexUserComponent implements OnInit{
  // userList;
  // constructor(
  //   private userService:UserService
  // ){}
  // ngOnInit() {
  //     this.userList=this.userService.get();
  // }
  previewImgFile:string;
  userList:User[];
  roles:Role[];
  curRole;
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
    console.log(this.userList)
  }
  add(){
    this.curMethod=0;
    this.formTitle='添加';
    this.curRole={
      id:'',
      name:'',
      img:'',
      roleId:''
    };
    this.curEditId='';
  }
  edit(item){
    this.curMethod=1;
    this.formTitle='编辑';
    this.curRole=item;
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
