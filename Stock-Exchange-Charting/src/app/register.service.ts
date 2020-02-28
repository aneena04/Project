import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  httpUrl = ' http://localhost:8080/user/';
  constructor(private httpClient: HttpClient) { }


  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.httpUrl, user);
  }
  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.httpUrl, user);
  }
  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.httpUrl);
  }
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(this.httpUrl + id);
  }
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.httpUrl + id);
  }
}

