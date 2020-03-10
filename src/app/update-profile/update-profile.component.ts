import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateProfile: FormGroup;
  constructor(private registerService: RegisterService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    {
      this.updateProfile = this.formBuilder.group({
        id: [],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username:['',Validators.required],
        enabled:[],
        password:[],
        cpassword:[],
        phone: ['', Validators.required]
      });
      
      const id = localStorage.getItem('userId');
      if(+id)
      {
      this.registerService.getUserById(+id).subscribe(user => {
        this.updateProfile.patchValue(user);
      });
    }
  }
}
  updateTheUser(){
    this.registerService.updateUser(this.updateProfile.value).subscribe(u=>{
      this.router.navigate(['user-landing-page'])
    });
  } 
}



