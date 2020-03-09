import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private httpUrl='http://localhost:8005/stockPrices/';
  constructor(private httpClient: HttpClient) { }
  uploadStockSheet(formData:FormData): Observable<void>{
    return this.httpClient.post<void>(this.httpUrl+"uploadStockSheet",formData);
  
  }


}




