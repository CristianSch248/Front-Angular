import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from './medico';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private readonly API_BACK = 'http://localhost:8080/medico/'

  constructor(private http: HttpClient) { }

  public listar(): Observable<Medico[]>{
    return this.http.get<Medico[]>(this.API_BACK+'listar')
  }

  public criar(medico: Medico): Observable<Medico>{
    return this.http.post<Medico>(this.API_BACK+'cadastrar', medico)
  }

  public editar(medico: Medico): Observable<Medico>{
    return this.http.put<Medico>(this.API_BACK + 'update', medico)
  }

  public delete(medico: Medico): Observable<Medico>{
    return this.http.put<Medico>(this.API_BACK + 'delete', medico)
  }
}
