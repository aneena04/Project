import { Injectable } from '@angular/core';
import { Company } from '../model/company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompareCompanyService {
  private httpUrl='http://localhost:8000/company-by-user/';
  constructor(private httpClient:HttpClient) { }
  getAllCompany(): Observable <Company[]> {
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
}




