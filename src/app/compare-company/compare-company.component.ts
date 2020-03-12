import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Company } from '../model/company';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {


    constructor(private service:CompanyService, private formBuilder:FormBuilder,private router:Router) { }
    compare : FormGroup;
    company : Company[];
    
    compareCompany(){
this.router.navigate(['/charts'])
      
    
    }
    onInputChange(e){
      this.service.getAllCompaniesByPattern(e.target.value).subscribe(data => {
            this.company = data;
      });
    }
    
    ngOnInit() {
      this.service.getAllCompany().subscribe(data =>{
        this.company=data;
      });
      this.compare=this.formBuilder.group({
        name:[''],
        name2:[''],
        date1:[''],
        date2:[''],


      })
    }
    
  }
  