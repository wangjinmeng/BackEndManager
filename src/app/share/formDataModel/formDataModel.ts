export const formType=['text','password','select','check','radio','textarea']
export class Limit{
  required:boolean;
  minLength:number;
  maxLength:number;
  regRex:RegExp;
  constructor(opt:{
    required?:boolean,
    minLength?:number,
    maxLength?:number,
    regRex?:RegExp
  }={}){
    this.required=opt.required;
    this.minLength=opt.minLength;
    this.maxLength=opt.maxLength;
    this.regRex=opt.regRex;
  }
}
export class FormBase<T>{
  value:T;
  label:string;
  key:string;
  order:number;
  disabled:Boolean;
  limit:Limit;
  controlType:string;
  constructor(
    options:{
      value?:T,
      key?:string,
      order?:number,
      disabled?:Boolean,
      label?:string,
      limit?:Limit,
      type?:string
    }={}
  ){
    this.value=options.value;
    this.label=options.label;
    this.key=options.key;
    this.order=options.order;
    this.disabled=options.disabled;
    this.limit=options.limit||new Limit();
  }
}
export class FormText extends FormBase<string>{
  controlType=formType[0];
  placeholder:string;
  constructor(opts={}){
    super(opts);
    this.placeholder=opts['placeholder']||'请输入'+opts['label'];
  }
}
export class FormPassword extends FormBase<string>{
  controlType=formType[1];
  placeholder:string;
  constructor(opts={}){
    super(opts);
    this.placeholder=opts['placeholder']||'请输入'+opts['label'];
  }
}
export class FormSelect extends FormBase<string>{
  controlType=formType[2];
  options:{key:string,value:any}[]=[];
  constructor(opts={}){
    super(opts);
    this.options=opts['options']||[];
  }
}
export class FormCheck extends FormBase<string>{
  controlType=formType[3];
  options:{key:string,value:Boolean}[]=[];
  constructor(opts={}){
    super(opts);
    this.options=opts['options']||[];
  }
}
export class FormRadio extends FormBase<string>{
  controlType=formType[4];
  options:{key:string,value:Boolean}[]=[];
  constructor(opts={}){
    super(opts);
    this.options=opts['options']||[];
  }
}
export class FormTextarea extends FormBase<string>{
  controlType=formType[5];
  placeholder:string;
  constructor(opts={}){
    super(opts);
    this.placeholder=opts['placeholder']||'请输入'+opts['label'];
  }
}
