import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title pull-left">Modal</h4>
  </div>
  <div class="modal-body">
    This is a modal.
  </div>
  `
})
export class ModalContentComponent{
  constructor(public bsModalRef: BsModalRef) { }
}
