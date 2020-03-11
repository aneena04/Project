import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RegisterService } from './register.service';
import { User } from '../model/user';
const url = "http://localhost:8765/user-service/login";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private registerService: RegisterService, private http: HttpClient) {}
  authenticate(username: string, password: string) {
    let authenticationToken = "Basic " + window.btoa(username + ":" + password);
    console.log(authenticationToken);
    let headers = new HttpHeaders({
      Authorization: authenticationToken
    });
    console.log("calling server")
    return this.http.get(url, { headers }).pipe(
      map(successData => {
        console.log("success ")
        sessionStorage.setItem("username",username);
        sessionStorage.setItem("token", authenticationToken);
        return successData;
      }),
      map(failureData => {
        console.log("failure")
        return failureData;
      }),
      map((data: User) => {
        console.log(data);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("userId", data.id.toString());
        sessionStorage.setItem("token", authenticationToken);
        sessionStorage.setItem("userType",data.role==='ROLE_ADMIN' ? "admin":"user"); 
        return data;
      }),
      map(error => {
        return error;
      })
  
    );

  }
  getAuthenticationToken() {
    if (this.isUserLoggedIn())
      return sessionStorage.getItem("token");
    return null;
  }
  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    if (user == null)
      return false;
    return true;
  }
  getProfileUrl(): string {
    let url = sessionStorage.getItem("profile");
    return url;
  }
  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem("token")
  }
  getUserDetails(): string {
    let user = sessionStorage.getItem('username');
    return user;
  }
}
