import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { IpoService } from 'src/app/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ipo',
  templateUrl: './add-ipo.component.html',
  styleUrls: ['./add-ipo.component.css']
})
export class AddIpoComponent implements OnInit {

  addIpoForm:FormGroup
  constructor(private formBuilder:FormBuilder,private ipoService:IpoService,private router:Router) { }

  ngOnInit() {
    this.addIpoForm=this.formBuilder.group({
      id:['',Validators.required],
      name:['',Validators.required],
      stockExchange:['',Validators.required],
      priceShare:['',Validators.required],
      noOfShare:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required],
      date:['',Validators.required]
    });
  }
  
  addIpo(){
    this.ipoService.saveIpo(this.addIpoForm.value).subscribe(d=>{
      console.log("inserted successfully");
    })

  }

}
