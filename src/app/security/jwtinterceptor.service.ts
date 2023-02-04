import { LoginService } from './../login/login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JWTInterceptorService implements HttpInterceptor{

  constructor(private service: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const usuario_logado = this.service.usuarioLogado();

    console.log('(log) - Requisição interceptada')

    if(usuario_logado){
      const req_auth = req.clone(
        {setHeaders: {'Authorization':'Bearer ' + usuario_logado.token}}
      );
      return next.handle(req_auth)
    } else {
      return next.handle(req);
    }
  }
}
