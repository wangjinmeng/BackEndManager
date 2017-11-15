import {Component, ViewChild, Input, Output, EventEmitter} from "@angular/core";
import {ShareFormBoxComponent} from "../../../share/component/share-form-box/share-form-box.component";
import {FormHidden, FormText, FormRadio} from "../../../share/formDataModel/formDataModel";
import {User} from "../../core/service/user.service";
import {Role} from "../../core/service/role.service";
@Component({
  selector:'index-user-form',
  templateUrl:'form.component.html'
})
export class IndexUserFormComponent{
  @Input() roles:Role[];
  @Input() user:User;
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
      key:'img',
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
    })
  ];
  loadingFlag:boolean=false;
  @ViewChild(ShareFormBoxComponent)
  private formBoxComponent: ShareFormBoxComponent;
  get formGroup(){
    return this.formBoxComponent.formGroup;
  }
  ngOnInit() {
    this.formData= [
      new FormHidden({
        value:'',
        key:'id',
      }),
      new FormText({
        value:'',
        label:'头像',
        key:'img',
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
    ];
    let options=[];
    for(let i=0;i<this.roles.length;i++){
      let item=this.roles[i];
      options.push({key:item.id,value:item.name})
    }
    this.formData.push(
        new FormRadio({
          value:'1',
          label:'角色',
          key:'roleId',
          options:options
      })
    )
  }
  ngOnChanges(){
    if(this.user){
      this.reset(this.user)
    }else{
      this.reset({})
    }
  }
  reset(data){
    // data.roleId=data.roleId?data.roleId:1;
    if(this.formGroup){
      this.formGroup.reset(data)
      if(!data.roleId){
        this.formGroup.patchValue({roleId:1})
      }
    }
  }
  submit(){
    this.loadingFlag=true;
    this.submitEvent.emit(this.formGroup.value);
    this.reset({roleId:1});
    this.loadingFlag=false;
  }
  cancel(){
    this.reset({});
    this.cancelEvent.emit();
  }
}
