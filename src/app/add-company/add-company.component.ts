import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import{CompanyService} from '../services/company.service';
import { Company } from '../model/company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  companyForm: FormGroup;

  constructor( private formBuilder: FormBuilder,private companyService: CompanyService) { }
  company:Company;

  ngOnInit() {
    this.companyForm =this.formBuilder.group({
id:[''],
name:['',Validators.required],
      sector: ['',Validators.required],
      turnOver: ['',Validators.required],
      ceoName:  ['', Validators.required],
      directors:['', Validators.required]
    });
  }
onSubmit(){
  this.companyService.addCompany(this.companyForm.value).subscribe(data=>{
    console.log('Company entered successfully '+data);
    this.companyForm.reset();
  })


  
}  


}
