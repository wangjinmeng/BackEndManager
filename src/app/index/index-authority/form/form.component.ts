import {Component, OnInit, ViewChild, Input,  OnChanges} from '@angular/core';
import {FormText, FormHidden} from "../../../share/formDataModel/formDataModel";
import {ShareFormBoxComponent} from "../../../share/component/share-form-box/share-form-box.component";
import {Authority} from "../../core/authority.data";
import {Router, ActivatedRoute, ParamMap} from "@angular/router";
import {AuthorityService} from "../../core/service/authority.service";
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'index-authority-form',
  templateUrl: './form.component.html'
})
export class IndexAuthorityFormComponent implements OnInit{
  authorityData;
  curId;
  curMethod;
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
  constructor(
    private authService:AuthorityService,
    private router:Router,
    private route:ActivatedRoute
  ) { }
  ngOnInit() {
    this.curId = this.route.snapshot.paramMap.get('id');
    this.curMethod = this.route.snapshot.paramMap.get('method');
    console.log(this.curMethod);
    if(this.curId){
      this.authorityData=this.authService.getById(this.curId);
    }else{
      this.authorityData={};
    }
    setTimeout(()=>{
      this.reset(this.authorityData.arr)
    },300)
  }
  reset(data){
    if(this.formGroup){
      this.formGroup.reset(data)
    }
  }
  submit(){
    this.loadingFlag=true;
    if(this.curMethod==1){
      this.authService.edit(this.formGroup.value)
    }else{
      this.authService.add(this.formGroup.value)
    }
    this.back();
  }
  cancel(){
    this.reset({});
  }
  back(){
    if(this.curMethod==1){
      this.router.navigate(['../',{id:this.curId}],{relativeTo: this.route})
    }else{
      this.router.navigate(['../',{id:''}],{relativeTo: this.route})
    }
  }
}
