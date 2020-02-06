import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { RegisterService } from '../register.service';
import { User } from '../model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;


  constructor(private registerService: RegisterService) { }
  user: User[];

  ngOnInit() {

    this.registerForm = new FormGroup({
      'name': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl(''),
      'password': new FormControl(''),
      'cpassword': new FormControl('')
    });


  }

  onSubmit() {
    this.registerService.saveUser(this.registerForm.value).subscribe(data => {
      console.log('user entered successfully' + data);
      this.registerForm.reset();

    })
  }
  
}
