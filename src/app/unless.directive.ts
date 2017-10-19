import {Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";
@Directive({
  selector:'[myUnless]'
})
export class UnlessDirective{
  hasView=false;
  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef
  ){}
  @Input() set myUnless(condition:boolean){
      if(!condition&&!this.hasView){
        console.log(this.templateRef);
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.viewContainer.insert(this.templateRef.createEmbeddedView('<p>running</p>'));
        console.log(this.templateRef.createEmbeddedView('<p>running</p>'))
        this.hasView=true
      }else{
        this.viewContainer.clear();
        this.hasView=false;
      }
  }
}
