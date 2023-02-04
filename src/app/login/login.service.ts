import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Usuario} from "./usuario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API_URL = 'http://localhost:8080/';
  private readonly USUARIO_LOGADO = 'usuario-logado';

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.API_URL+'login', usuario);
  }

  setarUsuarioLogado(usuario: Usuario): void{
    sessionStorage.setItem(this.USUARIO_LOGADO, JSON.stringify(usuario));
  }

  logout():void{
    sessionStorage.removeItem(this.USUARIO_LOGADO);
    this.router.navigate(['/login'])
  }

  usuarioLogado(): Usuario{
    return JSON.parse(<string>sessionStorage.getItem(this.USUARIO_LOGADO));
  }
}
