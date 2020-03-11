import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  users: User[];

  constructor(private router:Router) { }

  ngOnInit() {
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('userType')
    alert("logged out successfully")
    this.router.navigate(['/login'])
  }

}
