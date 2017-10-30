import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'share-progress-bar',
  templateUrl: './share-progress-bar.component.html'
})
export class ShareProgressBarComponent implements OnInit,OnChanges {
  @Input() styleSize:string='';
  @Input() styleTheme:number=0;
  @Input() styleAnimate=false;
  @Input() styleStripe=false;
  @Input() valueCur:number=50;
  @Input() showText:Boolean=false;
  theme=['default','info','primary','success','warning','danger'];
  containerClass={};
  barClass={};
  setBarClass(){
    this.barClass={
      'progress-bar':true,
      'progress-bar-striped':this.styleStripe
    };
    if(typeof this.styleTheme=='number'&&this.theme[this.styleTheme]){
      this.barClass['progress-bar-'+this.theme[this.styleTheme]]=true;
    }
  };
  setContainerClass(){
    this.containerClass={
      "progress":true
    };
    if(this.styleSize=='sm'||this.styleSize=='xs'||this.styleSize=='xxs'){
      this.containerClass['progress-'+this.styleSize]=true;
    }
    if(this.styleAnimate){
      this.containerClass['active']=true;
    }
  }
  constructor() { }
  ngOnChanges() {
    this.setBarClass();
    this.setContainerClass()
  }
  ngOnInit() {
    this.ngOnChanges()
  }
}
