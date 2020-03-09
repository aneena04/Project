import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor{
  constructor(public auth:AuthService) { }
  intercept(request:HttpRequest<any>,next:HttpHandler){
    console.log("inside interceptor");
    if(this.auth.getAuthenticationToken()){
      //request cannot be directly manipulated
      //it has to be cloned
      let AuthenticationToken=this.auth.getAuthenticationToken();
      request=request.clone({
        setHeaders:{
          Authorization:  AuthenticationToken
        }
      });
    }
        return next.handle(request)
  }
}
