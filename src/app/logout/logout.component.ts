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
    localStorage.removeItem('userId')
    alert("logged out successfully")
    this.router.navigate(['/login'])
  }

}
