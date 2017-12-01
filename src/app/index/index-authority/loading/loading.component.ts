import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'app-loading',
  template: `
    <p>
      loading
    </p>
    `
})
export class IndexAuthorityLoadingComponent{
  constructor(public bsModalRef: BsModalRef){}
}
