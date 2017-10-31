import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder, ValidatorFn, AbstractControl} from "@angular/forms";
import {
  FormText, FormPassword, FormBase, Limit, FormTextarea,
  FormSelect, FormRadio, FormCheck, formType
} from "../../share/formDataModel/formDataModel";

@Component({
  selector: 'app-index-form-page',
  templateUrl: './index-form-page.component.html',
  styleUrls: ['./index-form-page.component.css']
})
export class IndexFormPageComponent implements OnInit {
  formGroup:FormGroup;
  formData= [
    new FormText({
        value:'wjm',
        label:'名字',
        key:'name',
        limit:{
          required:true,
          minLength:6,
          maxLength:12
        }
    }),
    new FormText({
      value:'',
      label:'邮箱',
      key:'email',
      limit:{
        required:true,
        minLength:6,
        maxLength:12
      }
    }),
    new FormPassword({
      value:'456',
      label:'密码',
      key:'password',
      limit:{
        required:true,
        minLength:6,
        maxLength:12
      }
    }),
    new FormTextarea({
      value:'',
      label:'意见',
      key:'advice',
      placeholder:'写下您宝贵的建议吧',
      limit:{
        required:true,
        minLength:6,
        maxLength:200
      }
    }),
    new FormSelect({
      value:'1',
      label:'时间',
      key:'time',
      disabled:true,
      options:[
        {key:'1',value:'上午'},
        {key:'2',value:'下午'}
      ]
    }),
    new FormRadio({
      value:'female',
      label:'性别',
      key:'sex',
      options:[
        {key:'male',value:'男'},
        {key:'female',value:'女'}
      ]
    }),
    // new FormCheck({
    //   label:'爱好',
    //   key:'hobbies',
    //   value:[1,2],
    //   options:[
    //     {key:'1',label:'羽毛球'},
    //     {key:'2',label:'游泳'},
    //     {key:'3',label:'跑步'}
    //   ]
    // })
  ];
  //将表单数据模型数据转换成formGroup对象
  toFormGroup(datas:FormBase<any>[]){
    let group={};
    datas.forEach(data=>{
      if(data.controlType===formType[3]){

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

  constructor(private fb:FormBuilder) {
    this.formGroup=this.toFormGroup(this.formData)
  }
  ngOnInit() {}
}
