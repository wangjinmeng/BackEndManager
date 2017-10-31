import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormBase, formType} from "../../formDataModel/formDataModel";

@Component({
  selector: 'share-form-text',
  templateUrl: './share-form-text.component.html',
  styleUrls: ['./share-form-text.component.css']
})
export class ShareFormTextComponent implements OnInit {
  @Input() formData:FormBase<string>;
  @Input() form:FormGroup;
  formType=formType;
  constructor() { }
  ngOnInit() {}
  get name(){
    return this.form.get(this.formData.key);
  }
  formState(){
    if(this.formData.disabled){
      return true
    }else{
      return ''
    }
  }
}
