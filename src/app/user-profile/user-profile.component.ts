import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User;

  constructor(private router: Router, private service:RegisterService) { }


    updateUser(){
      this.router.navigate(['/update-user']);
    }
    ngOnInit() {
      const c = localStorage.getItem('userId');
      this.service.getUserById(+c).subscribe(data =>{
        this.user=data;
      })
    }
  }
