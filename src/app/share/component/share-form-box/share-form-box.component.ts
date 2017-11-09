import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Limit, FormBase, formType} from "../../formDataModel/formDataModel";
import {FormBuilder, AbstractControl, Validators, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'share-form-box',
  templateUrl: './share-form-box.component.html'
})
export class ShareFormBoxComponent implements OnInit,OnChanges {
  @Input() formData;
  //将表单数据模型数据转换成formGroup对象
  toFormGroup(datas:FormBase<any>[]){
    let group={};
    datas.forEach(data=>{
      if(data.controlType===formType[3]){
        group[data.key]=this.fb.group(data.value);
      }else{
        let formLimit=this.toFormLimit(data.limit);
        let formControlValue=data.value;
        if(data.disabled===true){
          formControlValue={value:data.value,disabled:true};
        }
        if(formLimit){
          group[data.key]=new FormControl(formControlValue,formLimit);
        }else{
          group[data.key]=new FormControl(formControlValue);
        }
      }
    });
    return this.fb.group(group);
  }
  //将表单数据模型中的limit属性转换成表单中的表单验证，没有验证规则时返回false;有验证规则时返回验证规则数组
  toFormLimit(limit:Limit){
    let res=[];
    if(limit.required){
      res.push(Validators.required);
    }
    if(limit.minLength){
      res.push(Validators.minLength(limit.minLength));
    }
    if(limit.maxLength){
      res.push(Validators.maxLength(limit.maxLength));
    }
    if(limit.regRex){
      res.push(this.regRexLimit(limit.regRex));
    }
    if(res.length==0){
      return false
    }
    return res
  }
  //表单数据模型的limit属性中的regRex转换成表单验证规则
  regRexLimit(reg:RegExp){
    return (control:AbstractControl):{[key: string]: any}=>{
      if(reg.lastIndex){
        reg.lastIndex=0;
      }
      let res=reg.test(control.value);
      return res?null:{format:{tip:`格式不正确`,value: control.value}}
    }
  }
  formGroup:FormGroup;
  constructor(private fb:FormBuilder) {}
  ngOnInit() {
    this.ngOnChanges()
  };
  ngOnChanges(): void {
    this.formGroup=this.toFormGroup(this.formData)
  }
}
