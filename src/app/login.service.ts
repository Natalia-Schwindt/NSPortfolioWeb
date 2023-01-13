import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private url = "/api/User/";

  constructor(private http: HttpClient, private cookie: CookieService) { }

  login(user:any):Observable<any>{
    return this.http.post(this.url+"login", user);
  }
    getUser(id:number):Observable<any>{
      return this.http.get(this.url+"/"+id);
  }
  setToken(token:string){
    this.cookie.set("token", token);
  }

}
