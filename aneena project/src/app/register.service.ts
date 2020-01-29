import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    httpUrl = ' http://localhost:3001/users/';
    constructor(private httpClient: HttpClient) { }
  

  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.httpUrl, user);
  }


  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.httpUrl);
  }
  }

