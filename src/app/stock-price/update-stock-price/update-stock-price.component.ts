import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StockPriceService } from 'src/app/services/stock-price.service';

@Component({
  selector: 'app-update-stock-price',
  templateUrl: './update-stock-price.component.html',
  styleUrls: ['./update-stock-price.component.css']
})
export class UpdateStockPriceComponent implements OnInit {
    updateStockPriceForm:FormGroup;
    constructor(private formBuilder:FormBuilder,private stockService:StockPriceService,private router:Router) { }
  
    ngOnInit() {
      this.updateStockPriceForm=this.formBuilder.group({
        id:[],
        companyCode:['',Validators.required],
        stockExchange:['',Validators.required],
        currentPrice:['',Validators.required],
        date:['',Validators.required],
        time:['',Validators.required]
      });
      const id=localStorage.getItem('stockId');
      if(+id>0){
        this.stockService.getStockPriceById(+id).subscribe(stock=>{
          this.updateStockPriceForm.patchValue(stock);
        });
  
      }
    
    }
  
    updateStockPrice()
    {
      this.stockService.updateStockPriceInfo(this.updateStockPriceForm.value).subscribe(u=>{
      this.router.navigate(['/list-stock-price'])
      });
    }
  

}
