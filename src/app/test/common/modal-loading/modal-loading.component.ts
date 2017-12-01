import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-modal-loading',
  template:  `<div style="position: absolute;top: 50%;left: 50%;color: #ffffff;margin-top: -50px;margin-left: -50px">
                <i style="width: 100px;height: 100px;font-size: 100px;color: rgba(255,255,255,.8);" class="glyphicon glyphicon-refresh fa-spin"></i>
              </div>`
})
export class ModalLoadingComponent{
  constructor(public bsModalRef:BsModalRef) { }
}
