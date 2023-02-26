import { CadastroConsulta } from './../consulta/consulta';
import { Component, OnInit } from '@angular/core';
import { Medico } from '../medico/medico';
import { Paciente } from '../paciente/paciente';
import { Consulta } from '../consulta/consulta';
import { MedicoService } from './../medico/medico.service';
import { PacienteService } from './../paciente/paciente.service';
import { ConsultaService } from '../consulta/consulta.service';

@Component({
  selector: 'app-listagem-consulta',
  templateUrl: './listagem-consulta.component.html',
  styleUrls: ['./listagem-consulta.component.css']
})
export class ListagemConsultaComponent implements OnInit {

  consulta: Consulta = new Consulta();
  consultas: Consulta[] = [];

  paciente: Paciente = new Paciente();
  pacientes: Paciente[] = [];

  medico: Medico = new Medico();
  medicos: Medico[] = [];

  constructor(
    private consultaService: ConsultaService,
    private pacienteService: PacienteService,
    private medicoService: MedicoService,
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.consultaService.listar().subscribe((dados: Consulta[])=> {
      this.consultas = dados;
    })

  }

  editar(consulta: CadastroConsulta){
    this.consultaService.editar(consulta).subscribe(()=>{
      this.consulta = new Consulta();
      this.listar();
    })
  }

  deletar(consulta: Consulta){
    this.consultaService.delete(consulta).subscribe(() => {
      this.listar();
    })
  }
}
