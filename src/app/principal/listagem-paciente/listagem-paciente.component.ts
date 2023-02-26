import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente/paciente';
import { PacienteService } from '../paciente/paciente.service';

@Component({
  selector: 'app-listagem-paciente',
  templateUrl: './listagem-paciente.component.html',
  styleUrls: ['./listagem-paciente.component.css']
})
export class ListagemPacienteComponent implements OnInit   {

  paciente: Paciente = new Paciente();
  pacientes: Paciente[] = [];

  constructor(private service: PacienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.listar().subscribe((dados: Paciente[])=> {
      this.pacientes = dados;
    })
  }

  editar(paciente: Paciente){
    this.service.editar(paciente).subscribe(()=>{
      this.paciente = new Paciente();
      this.listar();
    })
  }

  deletar(paciente: Paciente){
    this.service.deletar(paciente).subscribe(()=>{
      this.listar();
    })
  }
}
