import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormArray} from "@angular/forms";
import {FormBase, formType} from "../../formDataModel/formDataModel";

@Component({
  selector: 'share-form-temp',
  templateUrl: './share-form-temp.component.html'
})
export class ShareFormTempComponent implements OnInit {
  @Input() formData:FormBase<string>;
  @Input() form:FormGroup;
  formType=formType;
  constructor() { }
  ngOnInit() {}
  get name(){
    return this.form.get(this.formData.key);
  }
  get names(){
    return this.form.get(this.formData.key) as FormArray;
  }
  formState(){
    if(this.formData.disabled){
      return true
    }else{
      return ''
    }
  }
}
