import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SharedService } from 'src/app/base/service/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder,private sharedeService:SharedService,private router:Router,private messageService: MessageService) { }

  loginForm:FormGroup = this.fb.group({
    username:['',Validators.required],
password:['',Validators.required],
  })
  
  ngOnInit() {
  }

  loginUser(){
    if(this.loginForm.invalid){
      return;
    }
    this.sharedeService.post("user/login",JSON.stringify(this.loginForm.value))
    .subscribe(
      res => {
        if(res.isSuccess){
          localStorage.setItem('token', (res.data.token));
          localStorage.setItem('userinfo',JSON.stringify(res.data.user));
          this.router.navigate(['/request']);
        }
        else {
          this.messageService.add({severity:'error', summary: 'Error', detail:res.errorMessage});
        }
        
      }
    )
  }
  register(){
    this.router.navigate(['/add-user']);

  }
}
