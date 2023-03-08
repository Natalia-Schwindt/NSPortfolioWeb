import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private autentificador: LoginService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<Object>> {
    var currentUser = this.autentificador.UsuarioAutenticado;
    if (currentUser && currentUser.accessToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.accessToken}`,
        },
      });
    }
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (currentUser && currentUser.accessToken && err.status === 401) {
          this.autentificador.clear();
          window.location.href = '';
        }
        return throwError(err);
      })
    );
  }
}
