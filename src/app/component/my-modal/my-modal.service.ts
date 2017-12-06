import {Injectable, TemplateRef} from '@angular/core';
import {BsModalService, BsModalRef} from "ngx-bootstrap";
import {LoadingComponent} from "./loading/loading.component";
import {ConfirmComponent} from "./confirm/confirm.component";
import {Observable} from "rxjs";
import {MsgComponent} from "./msg/msg.component";
import {number} from "freeng/component/validation/number";

@Injectable()
export class MyModalService {
  loadingFlag:boolean=false;
  loadingRef:BsModalRef;
  constructor(private modalService: BsModalService) {}
  loading(){
    let ref=this.modalService.show(LoadingComponent,{
      ignoreBackdropClick: true,
      class:'full-screen',
      animated: false});
    return  ref;
  }
  confirm(msg){
    return new Observable((observer)=>{
      let ref=this.modalService.show(ConfirmComponent,{class:' modal-sm'});
      ref.content.msg=msg;
      ref.content.confirm=function () {
        ref.hide();
        observer.next(true);
      };
      ref.content.decline=function () {
        ref.hide();
        observer.next(false);
      }
    })
  }
  msg(msg,delay?:number){
    let ref=this.popup(msg);
    let time=(delay>0&&typeof delay=='number')?delay:3000;
    setTimeout(()=>{ref.hide()},time);
  }
  popup(msg){
    let ref=this.modalService.show(MsgComponent,{backdrop:false,class:' modal-sm'});
    ref.content.msg=msg;
    ref.content.hide=ref.hide;
    return ref;
  }
  showDom(ref:TemplateRef<any>){
    let modalRef= this.modalService.show(ref);
    return modalRef;
  }
  hideModal(ref){
    ref.hide();
  }
}
