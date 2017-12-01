import {Component, OnInit, Input, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {ModalContentComponent} from "../common/modal-content/modal-content.component";
import {ShowModalService} from "../common/show-modal.service";

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html'
})
export class AdBannerComponent implements OnInit {
  ngOnInit() {}
  modalRef: BsModalRef;
  constructor(private showModal:ShowModalService) {}

  openModal() {
    this.modalRef = this.showModal.show();
  }
  loading(){
    this.showModal.loading();
    // setTimeout(()=>{
    //   this.showModal.hideLoading()
    // },2000)
  }
  confirm(){
    this.showModal.confirm('确定删除吗').subscribe((data)=>{
      console.log(data);
    })
  }
}




