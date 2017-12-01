import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-success',
  template: `
    <p>
      操作成功
    </p>
    `
})
export class IndexAuthoritySuccessComponent{
  constructor(public bsModalRef: BsModalRef){}
}
