import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  registerUser: FormGroup;

  constructor(private formBuilder: FormBuilder, private userServices: RegisterService) { }
  ngOnInit() {
    this.registerUser = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    });
  }
  addUser() {
    this.userServices.saveUser(this.registerUser.value).subscribe(data => {
      console.log('user entered successfully' + data);
      this.registerUser.reset();

    });
  }
}
