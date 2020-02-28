import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockPriceService } from 'src/app/stock-price.service';
import { StockPrice } from 'src/app/model/stockprice';

@Component({
  selector: 'app-list-stock-price',
  templateUrl: './list-stock-price.component.html',
  styleUrls: ['./list-stock-price.component.css']
})
export class ListStockPriceComponent implements OnInit {

  stockPrices:StockPrice[]
  constructor(private stockService:StockPriceService,private router:Router) { }

  ngOnInit() {
    this.stockService.getAllStockPrice().subscribe(d=>{
    this.stockPrices=d;
    });
  }
  deleteStockPrice(stockPrice:StockPrice)
  {
    this.stockService.deleteStockPrice(stockPrice.id).subscribe();
    this.stockPrices=this.stockPrices.filter(c=>c!==stockPrice);
  }
  updateStockPrice(stockPrice:StockPrice)
  {
    localStorage.removeItem('stockId');
    localStorage.setItem('stockId',stockPrice.id.toString());
    this.router.navigate(['/update-stock-price'])
  }

}

