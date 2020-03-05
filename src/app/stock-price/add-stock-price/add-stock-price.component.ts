import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockPriceService } from 'src/app/services/stock-price.service';

@Component({
  selector: 'app-add-stock-price',
  templateUrl: './add-stock-price.component.html',
  styleUrls: ['./add-stock-price.component.css']
})
export class AddStockPriceComponent implements OnInit {

  AddStockPriceForm :FormGroup
      constructor(private formBuilder :FormBuilder,private StockService:StockPriceService,private router:Router) { }
    
      ngOnInit() {
        this.AddStockPriceForm = this.formBuilder.group({
          
          companyCode:['',Validators.required],
          stockExchange:['',Validators.required],
          currentPrice:['',Validators.required],
          date :['',Validators.required],
          time :['',Validators.required]
      });
    
    }
    
    addStockPrice()
    {
      this.StockService.saveStockPrice(this.AddStockPriceForm.value).subscribe( data =>{
        console.log("Company inserted Successfully")
       this.router.navigate(['/list-stock-price']); 
      });
      }
    
    
    onSubmit() {
      console.log(this.AddStockPriceForm.value);
    }
}
