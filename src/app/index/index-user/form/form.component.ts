import {Component, ViewChild, Input, Output, EventEmitter} from "@angular/core";
import {ShareFormBoxComponent} from "../../../share/component/share-form-box/share-form-box.component";
import {FormHidden, FormText, FormPassword, FormTextarea} from "../../../share/formDataModel/formDataModel";
import {ActivatedRoute, Router} from "@angular/router";
import {IndexUserService} from "../index-user.service";
@Component({
  selector:'index-user-form',
  templateUrl:'form.component.html'
})
export class IndexUserFormComponent{
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userService:IndexUserService
  ){}
  formData=[];
  loadingFlag:boolean=false;
  method=0;//0 添加 1 修改
  handle:string;
  get handleTitle(){
    return this.method==0?'添加':'编辑'
  }
  curId:string='';
  @ViewChild(ShareFormBoxComponent)
  private formBoxComponent: ShareFormBoxComponent;
  get formGroup(){
    return this.formBoxComponent.formGroup;
  }
  ngOnInit() {
    this.formData= [
      new FormText({
        value:'',
        label:'姓名',
        key:'name',
        limit:{
          required:true
        }
      }),
      new FormPassword({
        value:'',
        label:'密码',
        key:'password',
        limit:{
          required:true
        }
      }),
      new FormText({
        value:'',
        label:'年龄',
        key:'age',
        limit:{
          required:true
        }
      }),
      new FormText({
        value:'',
        label:'地址',
        key:'address',
        limit:{
          required:true
        }
      }),
      new FormTextarea({
        value:'',
        label:'描述',
        key:'introduction',
        limit:{
          required:true
        }
      })
    ];
    this.method =parseInt(this.route.snapshot.paramMap.get('method'));
    if(this.method){
      this.formData.push(new FormHidden({value:'', key:'id'}));
      this.curId = this.route.snapshot.paramMap.get('id');
      this.userService.getItem(this.curId).subscribe((data)=>{
        this.reset(data)
      })
    }else{
      this.method=0
    }
  }
  ngOnChanges(){}
  reset(data){
    if(this.formGroup){
      this.formGroup.reset(data)
    }
  }
  submit(){
    this.loadingFlag=true;
    if(this.method==0){
      this.userService.add(this.formGroup.value).subscribe(data=>{
        if(data){
          this.back();
        }
      })
    }else{
      this.userService.update(this.formGroup.value).subscribe(data=>{
        if(data){
          this.back();
        }
      })
    }
    this.loadingFlag=false;
  }
  cancel(){
    let resetValue=this.method==0?{}:{id:this.curId}
    this.reset(resetValue);
  }
  back(){
    this.loadingFlag=false;
    if(this.method==1){
      this.router.navigate(['../',{id:this.curId}],{relativeTo: this.route})
    }else{
      this.router.navigate(['../'],{relativeTo: this.route})
    }
  }
}
