import { Component, OnInit } from '@angular/core';
import { Ipo } from 'src/app/model/ipo';
import { IpoService } from 'src/app/services/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-ipo',
  templateUrl: './get-ipo.component.html',
  styleUrls: ['./get-ipo.component.css']
})
export class GetIpoComponent implements OnInit {

  ipos:Ipo[]
  constructor(private ipoService:IpoService,private router:Router) { }

  ngOnInit() {
    this.ipoService.getAllIpo().subscribe(d=>{
    this.ipos=d;
    });
  }
  deleteIpo(ipo:Ipo)
  {
    this.ipoService.deleteIpo(ipo.id).subscribe();
    this.ipos=this.ipos.filter(c=>c!==ipo);
  }
  updateIpo(ipo:Ipo)
  {
    localStorage.removeItem('ipoId');
    localStorage.setItem('ipoId',ipo.id.toString());
    this.router.navigate(['/update-ipo'])
  }
}