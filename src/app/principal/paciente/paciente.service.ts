import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private readonly API_BACK = 'http://localhost:8080/paciente/'

  constructor(private http: HttpClient) { }

  public listar(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.API_BACK+'listar')
  }

  public getPaciente(id : any): Observable<Paciente>{
    return this.http.get<any>(`${this.API_BACK}${id}`);
  }

  public criar(paciente: Paciente): Observable<Paciente>{
    console.log("🚀 ~ file: paciente.service.ts:29 ~ PacienteService ~ criar ~ paciente", paciente)

    return this.http.post<Paciente>(this.API_BACK+'cadastrar', paciente);
  }

  public editar(paciente: Paciente): Observable<Paciente>{
    return this.http.put<Paciente>(this.API_BACK + 'update', paciente);
  }

  public deletar(paciente: Paciente): Observable<Paciente>{
    return this.http.put<Paciente>(this.API_BACK + 'delete', paciente)
  }

  public getHistorico(id : any): Observable<Paciente>{
    return this.http.post<any>(this.API_BACK + 'todos-historico/Atendimantos-Paciente', id)
  }
}
