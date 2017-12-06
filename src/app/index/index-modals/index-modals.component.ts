import {Component, OnInit, TemplateRef, Renderer2} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {MyModalService} from "../../component/my-modal/my-modal.service";
import {MyHttpService, MyHttpConfig} from "../../component/my-http/my-http.service";

@Component({
  selector: 'app-index-modals',
  templateUrl: './index-modals.component.html'
})
export class IndexModalsComponent implements OnInit{
  pageData={
    name:'弹出层',
    style:'fa  fa-heartbeat',
    id:12
  };
  conf:MyHttpConfig={loading:true,successMsg:'获取成功',errorMsg:'发生错误了'}
  ngOnInit(){
    this.myHttp.get('/api/user/listPage',this.conf).subscribe({
      next:(data)=>{console.log(data)},
      error:(err)=>{console.log(err)},
      complete:()=>{console.log('complete')}
    })
  }
  modalRef: BsModalRef;
  constructor(
    private showModal:MyModalService,
    private myHttp:MyHttpService
  ) {}
  loading(){
    let ref= this.showModal.loading();
    setTimeout(()=>{
      this.showModal.hideModal(ref)
    },2000)
  }
  confirm(){
    this.showModal.confirm('确定删除吗').subscribe((data)=>{
      console.log(data);
    })
  }
  defaultMsg(){
    this.showModal.msg('这个是msg弹框，默认3s后自动消失')
  }
  msg(){
    this.showModal.msg('这个是msg弹框，2s后自动消失',2000)
  }
  popup(){
    this.showModal.popup('这个是popup弹框，不会自动消失')
  }
  showDom(ref){
    let modalRef=this.showModal.showDom(ref);
    setTimeout(()=>{
      this.showModal.hideModal(modalRef);
    },3000)
  }
}
