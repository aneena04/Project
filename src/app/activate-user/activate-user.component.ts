import { Component, OnInit, Inject } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.css']
})
export class ActivateUserComponent implements OnInit {
  msg="Invalid Link";
  constructor(private regService:RegisterService) { }
  ngOnInit() {
    this.checkActivation()
  }
  checkActivation() {
    var urlad = document.URL
    var strarr = urlad.split("?")
    var str = strarr[1];
    var e=str.substr(0,str.length-1)
    this.regService.activateUser(e).subscribe(u=>{
      u.enabled=true;
      this.regService.updateUser(u).subscribe(u1=>{
        this.msg = "activation successfull"
      });
    });
  }
  
}
