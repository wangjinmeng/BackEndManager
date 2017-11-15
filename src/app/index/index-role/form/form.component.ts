import {Component, OnInit, ViewChild, Output, Input, EventEmitter} from '@angular/core';
import {ShareFormBoxComponent} from "../../../share/component/share-form-box/share-form-box.component";
import {FormHidden, FormText, FormBase, FormCheck} from "../../../share/formDataModel/formDataModel";
import {Role} from "../../core/service/role.service";
import {FormBuilder} from "@angular/forms";
import {Authority} from "../../core/authority.data";

@Component({
  selector: 'index-role-form',
  templateUrl: './form.component.html'
})
export class IndexRoleFormComponent implements OnInit {
  @Input() authorities:Authority[];
  @Input() role:Role;
  @Input() formTitle='操作';
  @Output() submitEvent=new EventEmitter();
  @Output() cancelEvent=new EventEmitter();
  formData:FormBase<any>[];
  loadingFlag:boolean=false;
  @ViewChild(ShareFormBoxComponent)
  private formBoxComponent: ShareFormBoxComponent;
  get formGroup(){
    return this.formBoxComponent.formGroup;
  }
  constructor(private fb:FormBuilder) { }
  ngOnInit() {
    this.formData= [
      new FormHidden({
        value:'',
        key:'id',
      }),
      new FormText({
        value:'',
        label:'名字',
        key:'name',
        limit:{
          required:true
        }
      }),

    ];
    // let formCheck=
    let values={}
    let options=[];
    for(let i=0;i<this.authorities.length;i++){
      let  item=this.authorities[i];
      options.push({
        "key": item.id,
        "label": item.name
      });
      values[item.id]=false;
    }
    if(this.role){
      for(let i=0;i<this.role.authorityIds.length;i++){
        let  item=this.role.authorityIds[i];
        values[item]=true;
      }
    }
    this.formData.push(new FormCheck({
      "value": values,
      "label": "权限",
      "key": "authority",
      "limit": {},
      "controlType": "check",
      "options": options
    }))
  }
  ngOnChanges(){
    if(this.role){
      this.reset(this.format(this.role))
    }else{
      this.reset({})
    }
  }
  format(data){
    let res={
      id:data.id,
      name:data.name,
      authority:{}
    };
    for(let i=0;i<this.authorities.length;i++){
      let  item=this.authorities[i];
      res.authority[item.id]=false;
    }
    for(let i=0;i<data.authorityIds.length;i++){
      let  item=data.authorityIds[i];
      res.authority[item]=true;
    }
    return res;
  }
  reset(data){
    if(this.formGroup){
      this.formGroup.reset(data)
    }
  }
  formatData(data){
    let res={
      id:data.id,
      name:data.name,
      authorityIds:[]
    };
    for(let key in data.authority){
      if(data.authority[key]){
        res.authorityIds.push(key)
      }
    }
    return res;
  }
  submit(){
    this.loadingFlag=true;
    this.submitEvent.emit( this.formatData(this.formGroup.value));
    this.formGroup.reset();
    this.loadingFlag=false;
  }
  cancel(){
    this.reset({});
    this.cancelEvent.emit();
  }
}
