import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  httpUrl = ' http://localhost:8100/company/';

  constructor(private httpClient: HttpClient) { }

  getAllCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
  deleteCompany(id: number): Observable<Company> {
    return this.httpClient.delete<Company>(this.httpUrl + id);
  }
  addCompany(company:Company): Observable<Company>{
    return this.httpClient.post<Company>(this.httpUrl, company);

  }
  updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.httpUrl, company);
  }
  
  getComapanyById(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.httpUrl + id);
  }
  
  }
