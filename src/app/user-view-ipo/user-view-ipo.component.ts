import { Component, OnInit } from '@angular/core';
import { IpoService } from '../services/ipo.service';
import { Router } from '@angular/router';
import { Ipo } from '../model/ipo';

@Component({
  selector: 'app-user-view-ipo',
  templateUrl: './user-view-ipo.component.html',
  styleUrls: ['./user-view-ipo.component.css']
})
export class UserViewIpoComponent implements OnInit {
  ipos:Ipo[]
  constructor(private ipoService:IpoService,private router:Router) { }

  ngOnInit() {
    this.ipoService.getAllIpo().subscribe(d=>{
    this.ipos=d;
    });
  }
}
