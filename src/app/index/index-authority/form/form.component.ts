import {Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {FormText, FormHidden} from "../../../share/formDataModel/formDataModel";
import {ShareFormBoxComponent} from "../../../share/component/share-form-box/share-form-box.component";
import {Authority} from "../../core/service/authority.service";

@Component({
  selector: 'index-authority-form',
  templateUrl: './form.component.html'
})
export class IndexAuthorityFormComponent implements OnInit,OnChanges{
  @Input() authorityData:Authority;
  @Input() formTitle='操作';
  @Output() submitEvent=new EventEmitter();
  @Output() cancelEvent=new EventEmitter();
  formData= [
      new FormHidden({
        value:'',
        key:'id',
      }),
      new FormText({
        value:'',
        label:'图标',
        key:'style',
        limit:{
          required:true
        }
      }),
      new FormText({
        value:'',
        label:'名字',
        key:'name',
        limit:{
          required:true
        }
      }),
      new FormText({
        value:'',
        label:'路径',
        key:'path',
        limit:{
          required:true
        }
      })
    ];
  loadingFlag:boolean=false;
  @ViewChild(ShareFormBoxComponent)
  private formBoxComponent: ShareFormBoxComponent;
  get formGroup(){
    return this.formBoxComponent.formGroup;
  }
  constructor() { }
  ngOnInit() {}
  ngOnChanges(){
    this.reset(this.authorityData)
  }
  reset(data){
    if(this.formGroup){
      this.formGroup.reset(data)
    }
  }
  submit(){
    this.loadingFlag=true;
    this.submitEvent.emit(this.formGroup.value);
    this.formGroup.reset();
    this.loadingFlag=false;
  }
  cancel(){
    this.reset({});
    this.cancelEvent.emit();
  }
}
