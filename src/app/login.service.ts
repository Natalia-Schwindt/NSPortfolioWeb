import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "/api/User/";

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(User:any): Observable<any>{
    return this.http.post(this.url+"login", User);
  }

    getUser(id:number):Observable<any>{
      return this.http.get(this.url+"/"+id);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken(){
    return this.cookies.get("token");
  }

  deleteToken() {
    this.cookies.delete("token");
  }

  getUserLogged() {
    const token = this.getToken();
    return token;
  }
  ngOnInit(): void {
  }
}
