import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  template: `
  <div class="modal-body text-center">
    <p>{{msg}}</p>
    <button type="button" class="btn btn-default" (click)="confirm()" >确定</button>
    <button type="button" class="btn btn-primary" (click)="decline()" >取消</button>
  </div>
  `
})
export class ModalConfirmComponent implements OnInit {
  msg:string;
  constructor() { }
  ngOnInit() {}
  confirm:Function;
  decline:Function;
}
