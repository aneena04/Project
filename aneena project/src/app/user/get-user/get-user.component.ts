import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/register.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
constructor(private registerService:RegisterService,private router:Router) { }
users:User[];
  ngOnInit() {
    this.registerService.getAllUsers().subscribe(data =>{
      this.users=data;
  })

}
}
