import { Injectable } from '@angular/core';
import {BsModalService, BsModalRef} from "ngx-bootstrap";
import {ModalContentComponent} from "./modal-content/modal-content.component";
import {ModalLoadingComponent} from "./modal-loading/modal-loading.component";
import {ModalConfirmComponent} from "./modal-confirm/modal-confirm.component";
import {Observable} from "rxjs";

@Injectable()
export class ShowModalService {
  loadingFlag:boolean=false;
  loadingRef:BsModalRef;
  constructor(private modalService: BsModalService) {}
  show(){
    return this.modalService.show(ModalContentComponent);
  }
  loading(){
    if(this.loadingRef) return;
    this.loadingRef=this.modalService.show(ModalLoadingComponent,{
      ignoreBackdropClick: true,
      class:'full-screen',
      animated: false});
  }
  hideLoading(){
    if(this.loadingRef){
      this.loadingRef.hide();
      this.loadingRef=null;
    }
  }
  confirm(msg){
    return new Observable((observer)=>{
      let ref=this.modalService.show(ModalConfirmComponent);
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
}
