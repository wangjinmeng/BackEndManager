import {
  Component, OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  sideBarStatus:Boolean=false;
  currentHeight:number;
  ngOnInit(){
    var _this=this;
    _this.resizeHeight();
    window.onresize =function () {
      _this.resizeHeight()
    }
  }
  //修改侧边栏的状态是收起展开
  changeSide(){
    this.sideBarStatus=!this.sideBarStatus
  }
  //调整主要内容区的高度
  resizeHeight(){
    let height=document.body.clientHeight;
    let width=document.body.clientWidth;
    if(width>=767){
      this.currentHeight=height-101
    }else{
      this.currentHeight=height-151
    }
  }
}
