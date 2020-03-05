import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateUser: FormGroup;
  constructor(private registerService: RegisterService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    {
      this.updateUser = this.formBuilder.group({
        id: [],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username:['',Validators.required],
        phone: ['', Validators.required]
      });
      
      const id = localStorage.getItem('Id');
      if(+id)
      {
      this.registerService.getUserById(+id).subscribe(user => {
        this.updateUser.patchValue(user);
      });
    }
    
  

  }

}
  updateTheUser(){
    this.registerService.updateUser(this.updateUser.value).subscribe(u=>{
      this.router.navigate(['get-user'])
    });
  }

  
}
