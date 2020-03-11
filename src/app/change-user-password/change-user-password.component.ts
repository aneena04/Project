import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrls: ['./change-user-password.component.css']
})
export class ChangeUserPasswordComponent implements OnInit {

  constructor(private regService:RegisterService,private formBuilder:FormBuilder,private router:Router) { }

  updatePassword:FormGroup;

  ngOnInit() {
    this.updatePassword=this.formBuilder.group({
      old_password:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required]
    })
  }

  updateThePassword(){
    let old=this.updatePassword.controls.old_password.value;
    let pass=this.updatePassword.controls.password.value;
    let confirm=this.updatePassword.controls.confirm_password.value;
    let userId=sessionStorage.getItem("userId");
    this.regService.getUserById(+userId).subscribe(u=>{
      if(u.password===old){
        if(pass===confirm){
          u.password=pass;
          this.regService.updateUser(u).subscribe(us=>{
            alert("password changed successfully")
            this.router.navigate(['/logout'])
          })
        }
      }else{
        alert("old password doesnt match")
      }
    })
  }

}
