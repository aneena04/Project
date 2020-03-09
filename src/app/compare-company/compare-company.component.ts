import { Component, OnInit } from '@angular/core';
import { CompareCompanyService } from '../services/compare-company.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Company } from '../model/company';

@Component({
  selector: 'app-compare-company',
  templateUrl: './compare-company.component.html',
  styleUrls: ['./compare-company.component.css']
})
export class CompareCompanyComponent implements OnInit {

    constructor(private service:CompareCompanyService, private formBuilder:FormBuilder) { }
    compare : FormGroup;
    company : Company[];
    // compareCompany(){
    //   alert(this.company.values);
    // }
    
    compareCompany(){
      console.log(this.compare.value);
    }
    
    ngOnInit() {
      this.service.getAllCompany().subscribe(data =>{
        this.company=data;
      });
      this.compare=this.formBuilder.group({
        c1:[''],
        c2:['']
      })
    }
    
  }
  