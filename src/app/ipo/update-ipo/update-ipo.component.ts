import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IpoService } from 'src/app/services/ipo.service';
@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {
  updateIpoForm:FormGroup
  constructor(private ipoService:IpoService,private router:Router,private formBuilder:FormBuilder) { }
  ngOnInit() {
    this.updateIpoForm=this.formBuilder.group({
      id:[''],
      name:['',Validators.required],
      stockExchange:['',Validators.required],
      priceShare:['',Validators.required],
      noOfShares:['',Validators.required],
      date:['',Validators.required],
      remarks:['',Validators.required],
    });
    const id=localStorage.getItem('ipoId');
    if(+id>0){
      this.ipoService.getIpoById(+id).subscribe(ipo=>{
      this.updateIpoForm.patchValue(ipo);  
      });
    
  }
  }
  updateIpo()
    {
    this.ipoService.updateIpoInfo(this.updateIpoForm.value).subscribe(u => {
    this.router.navigate(['/get-ipo'])
    });
  }
}