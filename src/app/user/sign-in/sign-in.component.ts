import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'

import { UserService } from '../../shared/user.service'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
  // , providers: [UserService] i add it at provider in app.module.ts
})
export class SignInComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  constructor(private userService: UserService,private router : Router) { }

  model ={
    email :'',
    password:''
  };


  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        console.log(this.userService.userType);
        if(this.userService.userType===0){
          this.router.navigate(['/dashboard']);
        }
        else if(this.userService.userType===1){
          this.router.navigateByUrl('/producthome');
        }
       
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }  

}
