import {Component, Input, Output, EventEmitter, OnInit, OnChanges} from "@angular/core";
import {IndexUserService} from "../index-user.service";
import {MyModalService} from "../../../component/my-modal/my-modal.service";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
  selector:'index-user-list',
  templateUrl:'list.component.html'
})
export class IndexUserListComponent implements OnInit,OnChanges{
  userList;
  curEditId;
  constructor(
    public userServer:IndexUserService,
    public modalService:MyModalService,
    public router:Router,
    public route:ActivatedRoute
  ) { }
  ngOnInit() {
    this.getList();
  }
  ngOnChanges(){}
  getList(){
    this.userServer.getList().subscribe(data=>{this.userList=data;})
  }
  add(){
    this.router.navigate(['../form'],{relativeTo: this.route})
  }
  edit(id){
    this.router.navigate(['../form', {method:1,id:id}],{relativeTo: this.route})
  }
  delete(id){
    this.modalService.confirm('确定删除？').subscribe((data)=>{
      if(data){
        this.userServer.delete(id).subscribe(data=>{
          this.getList();
        });
      }
    })
  }
}
