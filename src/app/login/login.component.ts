import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../model/user';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: User[];
  currentUser: User;
  //users : USERS;
  constructor(private authService:AuthService, private service:RegisterService, private formBuilder: FormBuilder, private router:Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      //id:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
  isValid(){
    let username=this.loginForm.get("username").value;
    let password=this.loginForm.get("password").value;
    const result$=this.authService.authenticate(username,password);
    result$.subscribe(data=>{
    if(data.role=='ROLE_ADMIN'){
      this.router.navigate(['/admin-landing-page']);

    }
    else{
      this.router.navigate(['/user-landing-page']);
    }
    })
    }


  // isValid(){
  //   let admin_userName="ADMIN";
  //   let admin_password="ADMIN";
  //   let userName = this.loginForm.controls.username.value;
  //   let password = this.loginForm.controls.password.value;
  //   if((userName == admin_userName) && (password == admin_password)){
  //     this.router.navigate(['/admin-landing-page']);
  //   }else{
  //     if( this.login(userName, password)){
  //       if(this.service.isActivated(this.currentUser)){
  //         localStorage.removeItem('userId');
  //         localStorage.setItem('userId',this.currentUser.id.toString());
  //         this.router.navigate(['/user-landing-page']);
  //       }else{
  //         alert("please activate your account to login ");
  //       } 
  //       }else{
  //         alert(" Invalid username or Password");
  //         this.loginForm.reset();
  //       }
  //     }
  //   }
  //   login(userName:string, password: string){
  //     for(let user of this.users ){
  //       if((userName == user.username) && (password == user.password)){
  //         this.currentUser= user;
  //         return true;
  //       }
  //     }
  //     return false;
  //   }
 }


