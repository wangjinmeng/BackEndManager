import {Component, Input, OnChanges, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'share-page-bar',
  templateUrl: './share-page-bar.component.html'
})
export class SharePageBarComponent implements OnInit {
  @Input() curPage:number=1;
  @Input() totalPage:number=1;
  @Input() size:string='normal';//normal s
  @Output() changePage=new EventEmitter();
  classes:string;//
  maxLen=5;
  pageArr:any[];
  constructor() {}
  //一共用三种模式：
  //1:12345;1234;123;12;1;
  //2: 1,2,3,4...,totalPage
  //3:1, ...,totalPage-3,totalPage-2, totalPage-1,totalPage
  //4:1, ...,curPage-1,curPage,curPage+1...,totalPage
  ngOnInit(): void {
    this.ngOnChanges()
  }
  ngOnChanges(): void {
    this.classes=this.size=='s'?'pagination pagination-sm no-margin':'pagination';
    this.pageArr=[];
    if(this.totalPage<=this.maxLen){
      for(let i=0;i<this.totalPage;i++){
        this.pageArr.push(i+1)
      }
    }else if (this.curPage<this.maxLen-1){
      this.pageArr=[1,2,3,4,'...',this.totalPage];
    }else if(this.curPage>this.totalPage-3){
      this.pageArr=[1,'...',this.totalPage-3,this.totalPage-2,this.totalPage-1,this.totalPage];
    }else{
      this.pageArr=[1,'...',this.curPage-1,this.curPage,this.curPage+1,'...',this.totalPage];
    }
  }
  choseItem(index){
    if(index<1||index>this.totalPage||index==this.curPage||index=='...'){
      return
    }else{
      console.log(index);
      this.changePage.emit(index)
    }
  }
}
