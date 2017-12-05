import {Component, OnInit, Input, Output, EventEmitter, TemplateRef} from '@angular/core';
import {Authority} from "../../core/authority.data";
import {AuthorityService} from "../../core/service/authority.service";
import {Router, ActivatedRoute} from "@angular/router";
import {MyModalService} from "../../../component/my-modal/my-modal.service";

@Component({
  selector: 'index-authority-list',
  templateUrl: './list.component.html'
})
export class IndexAuthorityListComponent implements OnInit {
  authorityList:Authority[];
  curEditId;
  deleteId;
  constructor(
    private authService:AuthorityService,
    private router:Router,
    private route:ActivatedRoute,
    private myModal:MyModalService
  ) {}
  ngOnInit() {
    this.getAuthorityList();
    this.curEditId = this.route.snapshot.paramMap.get('id');
  }
  getAuthorityList(){
    this.authorityList=this.authService.get();
  }
  add(){
    this.router.navigate(['form', {method:0}],{relativeTo: this.route})
  }
  delete(id,template){
    this.deleteId=id;
    this.myModal.confirm('确定删除吗？').subscribe((data)=>{
      if(data){
        this.authService.delete(this.deleteId)
      }
      this.deleteId='';
    })
  }
  edit(id){
    this.router.navigate(['form', {method:1,id:id}],{relativeTo: this.route})
  }
}
