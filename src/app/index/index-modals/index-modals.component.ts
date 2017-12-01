import {Component, OnInit, TemplateRef, Renderer2} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-index-modals',
  templateUrl: './index-modals.component.html'
})
export class IndexModalsComponent implements OnInit {
  ngOnInit() {}
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private renderer: Renderer2
  ) {}

  openModal(template: TemplateRef<any>) {
    // this.modalRef  = this.modalService.show(LoadingModule);
  }
}
@Component({
  selector:'index-loading',
  template:`
  <div class="modal-header">
    <h4 class="modal-title pull-left">Modal</h4>
    <button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    This is a modal.
  </div>
`
})
export class LoadingModule{
  constructor(public bsModalRef:BsModalRef){}
}
