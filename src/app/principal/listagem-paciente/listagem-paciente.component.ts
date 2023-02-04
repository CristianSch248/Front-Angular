import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente/paciente';
import { PacienteService } from '../paciente/paciente.service';

@Component({
  selector: 'app-listagem-paciente',
  templateUrl: './listagem-paciente.component.html',
  styleUrls: ['./listagem-paciente.component.css']
})
export class ListagemPacienteComponent implements OnInit   {

  pacientes = [
    {
      id: 1,
      idade: 20,
      nome: 'kevin',
      sexo: 'homen',
      telefone: '55996019816',
      cpf: '0272423141231'
    },
    {
      id: 1,
      idade: 20,
      nome: 'kevin',
      sexo: 'homen',
      telefone: '55996019816',
      cpf: '0272423141231'
    },
    {
      id: 1,
      idade: 20,
      nome: 'kevin',
      sexo: 'homen',
      telefone: '55996019816',
      cpf: '0272423141231'
    },
    {
      id: 1,
      idade: 20,
      nome: 'kevin',
      sexo: 'homen',
      telefone: '55996019816',
      cpf: '0272423141231'
    },
  ];
  paciente: Paciente = new Paciente();

  constructor(private service: PacienteService) {


  }

  ngOnInit(): void {
    console.log(this.pacientes)
  }

  listar(){
    this.service.listar().subscribe((dados: Paciente[])=> {
      // this.pacientes = dados;
      // console.log('pacientessss', this.pacientes)
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
