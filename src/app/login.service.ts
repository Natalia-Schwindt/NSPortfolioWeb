import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  currentUserSubject: BehaviorSubject<any>;
  private loggedIn = false;
  private url = "http://127.0.0.1:8090/api/";
  private url_login = "http://127.0.0.1:8090/api/User/";

  constructor(private http: HttpClient, private cookies: CookieService) {this.currentUserSubject = new BehaviorSubject<any>(
    JSON.parse(sessionStorage.getItem('token') || '{}')
);}

  login(User: any): Observable<any> {
  return this.http.post(this.url_login+"login", User).pipe(
    map((data) => {
      sessionStorage.setItem('token', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    })
    );
  }

public clear() {
  sessionStorage.clear();
  }

  get UsuarioAutenticado() {
  return this.currentUserSubject.value;
  }

  logout(): Observable<any> {
    return this.http.post<any>(this.url + 'logout', {});
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (
      this.UsuarioAutenticado
  ) {
    return true;
  } else {
    return false;
    }
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

  agregar(id: number, experiencia: any, opcion: any): Observable<any> {
    return this.http.post(
      this.url + opcion + '/crear/' + id,
      experiencia
    );
  }

  modificar(experiencia: any, opcion: any): Observable<any> {
    return this.http.put(
      this.url + opcion + '/editar',
      experiencia
    );
  }

  eliminar(id: number, experiencia: any, opcion: any): Observable<any> {
    return this.http.delete(
      this.url + opcion + '/eliminar/' + id,
      experiencia
    );
  }

ObtenerDatos(opcion: any): Observable<any> {
  return this.http.get<any>(this.url + opcion + '/ver');
  }
}