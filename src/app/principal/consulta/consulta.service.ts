import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consulta } from './consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private readonly API_BACK = 'http://localhost:8080/consulta/'

  constructor(private http: HttpClient) { }

  public listar(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(this.API_BACK+'listar')
  }

  public criar(consulta: Consulta): Observable<Consulta>{
    return this.http.post<Consulta>(this.API_BACK+'cadastrar', consulta)
  }

  public editar(consulta: Consulta): Observable<Consulta>{
    return this.http.put<Consulta>(this.API_BACK+'update', consulta)
  }

  public delete(consulta: Consulta): Observable<Consulta>{
    return this.http.put<Consulta>(this.API_BACK+'delete', consulta)
  }
}
