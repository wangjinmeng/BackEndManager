import {Component, OnInit} from "@angular/core";
import {AuthorityService, Authority} from "../core/service/authority.service";
@Component({
  templateUrl:'./index-authority-component.html'
})
export class IndexAuthorityComponent implements OnInit{
  constructor(private authService:AuthorityService){}
  curEditId;
  authorityList:Authority[];
  curEditAuthority:Authority;
  curMethod:number=0;//0:添加；1:编辑
  formTitle:string="添加";
  ngOnInit(): void {
    this.getAuthorityList();
  }
  getAuthorityList(){
    this.authorityList=this.authService.get();
  }
  delete(id){
    console.log(id);
    this.authService.delete(id);
  }
  edit(item){
    this.formTitle=`编辑>${item.name}`;
    this.curMethod=1;
    this.curEditAuthority=item;
    this.curEditId=item.id;
  }
  add(){
    this.formTitle='添加';
    this.curMethod=0;
    this.curEditId='';
    this.curEditAuthority={
      id:'',
      style:'',
      name:'',
      path:''
    }
  }
//  form
  submitForm(data){
    if(this.curMethod==1){
      this.authService.edit(data)
    }else{
      this.authService.add(data)
    }
    this.add()
  }
  cancelForm(){
    this.add()
  }
}
