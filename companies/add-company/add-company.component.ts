import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
AddCompanyForm :FormGroup
      constructor(private formBuilder :FormBuilder,private companyService:CompanyService,private router:Router) { }
    
      ngOnInit() {
        this.AddCompanyForm = this.formBuilder.group({
          
          name:['',Validators.required],
          city:['',Validators.required],
          turnOver:['',Validators.required],
          ceoName :['',Validators.required]
    
      });
    
    }
    
    addCompany()
    {
      this.companyService.addCompany(this.AddCompanyForm.value).subscribe( data =>{
       this.router.navigate(['/company']); 
      });
      }
    
    
    onSubmit() {
    }
    }
