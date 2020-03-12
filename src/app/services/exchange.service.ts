import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exchange } from '../model/exchange';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  
  httpUrl = environment.host +'stock-exchange-service/exchange/';

  
  constructor(private httpClient: HttpClient, private exchangeService: ExchangeService) { }
  
  getAllExchange(): Observable<Exchange[]> {
     return this.httpClient.get<Exchange[]>(this.httpUrl);
   }
  saveExchange(exchange: Exchange): Observable<Exchange> {
    return this.httpClient.post<Exchange>(this.httpUrl, exchange);
  }
   deleteExchange(id: number): Observable<Exchange> {
     return this.httpClient.delete<Exchange>(this.httpUrl + id);
   }
 updateExchangeInfo(exchange: Exchange): Observable<Exchange> {
     return this.httpClient.put<Exchange>(this.httpUrl, exchange);
   }
   getExchangeById(id: number): Observable<Exchange> {
     return this.httpClient.get<Exchange>(this.httpUrl + id);
   }

}
