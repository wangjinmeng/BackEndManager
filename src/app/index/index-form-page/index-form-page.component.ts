import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder, ValidatorFn, AbstractControl} from "@angular/forms";
import {
  FormText, FormPassword, FormBase, Limit, FormTextarea,
  FormSelect, FormRadio, FormCheck, formType, FormHidden
} from "../../share/formDataModel/formDataModel";
import {ShareFormBoxComponent} from "../../share/component/share-form-box/share-form-box.component";
@Component({
  selector: 'app-index-form-page',
  templateUrl: './index-form-page.component.html'
})
export class IndexFormPageComponent implements OnInit {
  pageData={
    name:'表单',
    style:'glyphicon glyphicon-list-alt',
    id:2
  };
  formData= [
    new FormText({
        value:'wjm',
        label:'名字',
        key:'name',
        disabled:true,
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
    new FormCheck({
      label:'爱好',
      key:'hobbies',
      value:{
        swimming:false,
        running:true
      },
      options:[
        {key:'swimming',label:'游泳'},
        {key:'running',label:'跑步'}
      ]
    }),
    new FormHidden({
      value:'1',
      key:'id'
    })
  ];
  @ViewChild(ShareFormBoxComponent)
  private formBoxComponent: ShareFormBoxComponent;
  get formGroup(){
    return this.formBoxComponent.formGroup;
  }
  reset(){
    if(this.formGroup){
      this.formGroup.reset();
    }
  }
  constructor() {}
  ngOnInit() {}
}
