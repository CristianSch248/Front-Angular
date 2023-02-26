import { ConsultaService } from './../consulta/consulta.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente/paciente';
import { PacienteService } from './../paciente/paciente.service';
import { Consulta } from '../consulta/consulta';

@Component({
  selector: 'app-historico-paciente',
  templateUrl: './historico-paciente.component.html',
  styleUrls: ['./historico-paciente.component.css']
})
export class HistoricoPacienteComponent implements OnInit {
  id : any;

  paciente: Paciente = new Paciente();
  pacientes: Paciente[] = [];

  consultas: Consulta[] = [];
  consulta: Consulta | undefined;

  constructor(
    private pacienteService: PacienteService,
    private consultaService: ConsultaService,
  ){}

  ngOnInit(): void{
    this.listarPacientes();
  }

  listarPacientes(){
    this.pacienteService.listar().subscribe((dados: Paciente[])=>{
      this.pacientes = dados;
    })
  }

  setIdPaciente(event: any){
    this.id = event.target.value;

    let ID = parseInt(this.id)

    this.consultaService.getHistorico(ID).subscribe({
      next: (body) => {
        this.consultas = body
      },
      error: (err) =>{
        console.log(err)
      }
    })
  }
}
