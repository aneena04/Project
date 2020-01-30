import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  httpUrl = ' http://localhost:3002/companies/';

  constructor(private httpClient: HttpClient) { }

  getAllCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
}