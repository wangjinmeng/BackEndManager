import {Component, OnInit, Input, Output, EventEmitter, TemplateRef} from '@angular/core';
import {Authority} from "../../core/authority.data";
import {AuthorityService} from "../../core/service/authority.service";
import {Router, ActivatedRoute} from "@angular/router";
import {BsModalService, BsModalRef} from "ngx-bootstrap";
import {IndexAuthorityLoadingComponent} from "../loading/loading.component";
import {IndexAuthoritySuccessComponent} from "../success/success.component";

@Component({
  selector: 'index-authority-list',
  templateUrl: './list.component.html'
})
export class IndexAuthorityListComponent implements OnInit {
  authorityList:Authority[];
  curEditId;
  bsModalRef:BsModalRef;
  constructor(
    private authService:AuthorityService,
    private router:Router,
    private route:ActivatedRoute,
    private modalService:BsModalService
  ) { }
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
  deleteId;
  delete(id,template){
    this.deleteId=id;
    this.bsModalRef=this.modalService.show(template);
  }
  edit(id){
    this.router.navigate(['form', {method:1,id:id}],{relativeTo: this.route})
  }
  confirm(){
    this.deleteId='';
    this.bsModalRef.hide();
    this.bsModalRef = this.modalService.show(IndexAuthorityLoadingComponent);
    this.authService.delete(this.deleteId).then(()=>{
      this.bsModalRef.hide();
      this.bsModalRef = this.modalService.show(IndexAuthoritySuccessComponent);
      setTimeout(()=>{
      },3000)
    });
  }
  decline(){
    this.deleteId='';
    this.bsModalRef.hide()
  }
}
