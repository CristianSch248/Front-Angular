import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consulta, CadastroConsulta } from './consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private readonly API_BACK = 'http://localhost:8080/consulta/'

  constructor(private http: HttpClient) { }

  public listar(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(this.API_BACK+'listar')
  }

  public getConsulta(id : any): Observable<Consulta>{
    return this.http.get<any>(`${this.API_BACK}${id}`);
  }

  public criar(consulta: CadastroConsulta): Observable<Consulta>{
    console.log("🚀 ~ file: consulta.service.ts:24 ~ ConsultaService ~ criar ~ consulta", consulta)

    return this.http.post<Consulta>(this.API_BACK+'cadastrar', consulta)
  }

  public editar(consulta: CadastroConsulta): Observable<Consulta>{
    return this.http.put<Consulta>(this.API_BACK+'update', consulta)
  }

  public delete(consulta: Consulta): Observable<Consulta>{
    return this.http.put<Consulta>(this.API_BACK+'delete', consulta)
  }

  public getHistorico(id : any): Observable<Consulta[]>{
    return this.http.post<Consulta[]>(this.API_BACK + 'todos-historico/Atendimantos-Paciente', id)
  }

  public getAtendimento(id: any): Observable<Consulta[]>{
    return this.http.post<Consulta[]>(this.API_BACK + 'todo/historico/atendimento/Medico', id)
  }
}
