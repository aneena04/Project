import { Component, OnInit } from '@angular/core';
import { Exchange } from 'src/app/model/exchange';
import { ExchangeService } from 'src/app/exchange.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-exhange',
  templateUrl: './get-exhange.component.html',
  styleUrls: ['./get-exhange.component.css']
})
export class GetExhangeComponent implements OnInit {

  constructor(private exchangeService: ExchangeService, private router: Router) { }
  exchanges: Exchange[];

  ngOnInit() {
    this.exchangeService.getAllExchange().subscribe((exch: Exchange[]) => {
      this.exchanges = exch;
      console.log(exch);

    });
  }

  deleteExchange(exchange: Exchange) {
    this.exchangeService.deleteExchange(exchange.id).subscribe();
    this.exchanges = this.exchanges.filter(c => c !== exchange);
  }

  updateExchange(exchange: Exchange) {
    localStorage.removeItem('exchangeId');
    localStorage.setItem('exchangeId', exchange.id.toString());
    this.router.navigate(['/update-exchange']);
  }
}