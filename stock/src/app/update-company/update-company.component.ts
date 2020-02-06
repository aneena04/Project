import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  updateCompany: FormGroup;
  constructor(private formBuilder:FormBuilder,private companyService:CompanyService,private router:Router) { }
  

  ngOnInit() {
    this.updateCompany = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      office: ['', Validators.required],
      ceo: ['', Validators.required],
      directors: ['', Validators.required]

    });
  
  const id = localStorage.getItem('Id');
  if(+id)
  {
  this.companyService.getComapanyById(+id).subscribe(user => {
    this.updateCompany.patchValue(user);
  });
  }
}
updateTheCompany(){
this.companyService.updateCompany(this.updateCompany.value).subscribe(u=>{
  this.router.navigate(['get-company'])
});
}
}


  
