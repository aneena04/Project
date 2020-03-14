import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company } from '../model/company';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {

    compareCompany:FormGroup;
    companies:Company[];
    constructor(private companyservice: CompanyService, private formBuilder: FormBuilder,private router:Router) { }
    ngOnInit() {
      this.compareCompany=this.formBuilder.group({
        "selectCompany":['',Validators.required],
        "selectStock":['',Validators.required],
        "companyName1":['',Validators.required],
        "companyName2":['',Validators.required],
        "from_period":['',Validators.required],
        "to_period":['',Validators.required]
      });
      this.companyservice.getAllCompany().subscribe(data=>{
        this.companies=data;
      });
    }
    onSubmit(){
      this.router.navigate(["/charts"],{
        queryParams:{
          formData:JSON.stringify(this.compareCompany.value)
        }
      })
    }
  }
  
  