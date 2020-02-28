import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { Company } from '../model/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit() {

    this.companyService.getAllCompany().subscribe(data => {
      this.companies = data;
    });


  }
  deleteCompany(company:Company){
    this.companyService.deleteCompany(company.id).subscribe();
    this.companies=this.companies.filter(c=> c !== company);
    }
    updateCompany(company:Company){
      localStorage.removeItem('Id');
  localStorage.setItem('Id',company.id.toString());
  this.router.navigate(['update-company'])

    }
} 