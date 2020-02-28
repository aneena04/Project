import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ExchangeService } from 'src/app/exchange.service';
import { Exchange } from 'src/app/model/exchange';


@Component({
  selector: 'app-add-exchange',
  templateUrl: './add-exchange.component.html',
  styleUrls: ['./add-exchange.component.css']
})
export class AddExchangeComponent implements OnInit {

  AddExchangeForm:FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router,private exchangeService:ExchangeService) { }
exchange:Exchange;

  ngOnInit() {
    this.AddExchangeForm=this.formBuilder.group({
      exchangename:['',Validators.required],
      contactAddress:['',Validators.required],
      brief:['',Validators.required],
      remarks:['',Validators.required]
    });
  }

    addExchange()
    {
      this.exchangeService.saveExchange(this.AddExchangeForm.value).subscribe(d=>{
        console.log("company inserted successfully");
        this.router.navigate(['/get-exchange']);
      })
    }
    // onSubmit(){
    //   console.log(this.AddExchangeForm.value);
    //   this.AddExchangeForm.reset();

    //}
}
