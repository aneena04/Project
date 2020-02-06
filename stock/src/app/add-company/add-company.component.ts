import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import{CompanyService} from '../company.service';
import { Company } from '../model/company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  companyForm: FormGroup;

  constructor(private companyService: CompanyService) { }
  company:Company;

  ngOnInit() {
    this.companyForm = new FormGroup({
      'name': new FormControl(''),
      'office': new FormControl(''),
      'turnover': new FormControl(''),
      'ceo': new FormControl(''),
      'directors':new FormControl('')
    });
  }
onSubmit(){
  this.companyService.addCompany(this.companyForm.value).subscribe(data=>{
    console.log('Company entered successfully '+data);
    this.companyForm.reset();
  })


  
}  


}
