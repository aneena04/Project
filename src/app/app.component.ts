import { Component, AfterViewInit, DoCheck } from '@angular/core';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  constructor(private regService:RegisterService){}
  
  title = 'Stock-Market-Charting';
  isLoggedIn:boolean = false;

  ngDoCheck(){
    this.isLoggedIn= this.regService.LoggedIn()
  }
}
