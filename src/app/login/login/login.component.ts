import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../core/service/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  userPassword:string;
  loginForm:FormGroup;
  constructor(private loginService:LoginService,  private router: Router) {
    this.loginForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      password:new FormControl('',[Validators.required,Validators.minLength(3)])
    })
  }
  get name(){
    return this.loginForm.get('name')
  }
  get password(){
    return this.loginForm.get('password')
  }
  ngOnInit() {}
  validPassword(){
    this.loginService.validPassword(this.name.value,this.password.value).then((param)=>{
      this.router.navigate(['/index',param]);
    }).catch(function(){
      alert('用户名密码不匹配')
    })
  }
}
