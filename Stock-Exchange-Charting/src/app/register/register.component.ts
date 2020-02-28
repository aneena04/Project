import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm:FormGroup
  constructor(private registerService: RegisterService,private formBuilder:FormBuilder) { }
  user: User[];

  ngOnInit() {


    this.registerForm = this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.required],
    phone:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required],
    cpassword:['',Validators.required],
    enabled:['']
     
    });


  
  }
  onSubmit() {
    this.registerService.saveUser(this.registerForm.value).subscribe(data => {
      console.log('user entered successfully' + data);
      console.log('registration status '+ data.regStatus)
      this.registerForm.reset();

    })
  }
  
}
