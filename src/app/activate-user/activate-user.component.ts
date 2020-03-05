import { Component, OnInit, Inject } from '@angular/core';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.css']
})
export class ActivateUserComponent implements OnInit {
  msg;
  constructor(@Inject(RegisterService) private service) { }
  ngOnInit() {
    this.checkActivation()
  }
  checkActivation() {
    var urlad = document.URL
    var strarr = urlad.split("?")
    var str = strarr[1]
    str = str.substring(0, str.length - 1);
    this.service.serviceActivation({ email: str }).subscribe(dt => {
      if (dt.result == 1) {
        this.msg = "activation successfull"
      }
      else {
        this.msg = "already activated"
      }
    });
  }
  
}
