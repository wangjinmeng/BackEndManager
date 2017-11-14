import { Component, OnInit } from '@angular/core';
import {AuthorityService, Authority} from "../core/service/authority.service";
import {RoleService, Role} from "../core/service/role.service";

@Component({
  selector: 'app-index-role',
  templateUrl: './index-role.component.html'
})
export class IndexRoleComponent implements OnInit {
  authorities:Authority[];
  roles:Role[];
  curRole;
  curEditId:string;
  curMethod:number=0;//0:添加；1:编辑
  constructor(
    private authService:AuthorityService,
    private roleService:RoleService
  ) { }
  ngOnInit() {
    this.roles=this.roleService.get();
    this.authorities=this.authService.get();
  }
  add(){
    this.curMethod=0;
    this.curRole={
      id:'',
      name:'',
      authorityIds:[]
    };
    this.curEditId='';
  }
  edit(item){
    this.curMethod=1;
    this.curRole=item;
    this.curEditId=item.id;
  }
  delete(id){
    this.roleService.delete(id)
  }
  submit(data){
    if(this.curMethod==0){
      this.roleService.add(data);
    }else{
      this.roleService.edit(data);
    }
  }
  cancel(){
    this.add();
  }
}
