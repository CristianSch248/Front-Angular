import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit{
  constructor(private service: PacienteService) {}

  ngOnInit(): void {
    this.listar();
  }

  paciente: Paciente = new Paciente();
  pacientes: Paciente[] = [];

  listar(){
    this.service.listar().subscribe((dados: Paciente[])=> {
      this.pacientes = dados;
      console.log('pacientessss', this.pacientes)
    })
  }

  cadastrar(){
    this.service.criar(this.paciente).subscribe(()=>{
      this.paciente = new Paciente();
      this.listar()
    })
  }

  /**
   *editar(id?: number){
      this.opcao = 'edi';
      this.service.pesquisa(id).subcribe((dado: Paciente)=>{
        this.paciente = dado;
      })
    }
   *
   */

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

  /**
   * isAdmin(){
   *  const jwt = localStorage.getItem('jwt');
   *  if(jwt){
   *    var token = this.helper.decodeToken(jwt);
   *    if(token.permissao == 'ADMIN'){
   *      return true;
   *    }
   *  }
   *  return false;
   * }
   */


  // private atualizar(): void {
  //   this.service.listar().subscribe((dados) => {
  //     this.paciente = dados;
  //   });
  // }

  // cadastrar(){
  //   console.log('botão clicado' + this.paciente)
  //   if (this.cadastrado) {
  //     this.cadastrado = false;
  //   } else {
  //     this.cadastrado = true;
  //   }
  //   this.service.criar(this.paciente).subscribe( () => {
  //     this.atualizar();
  //   })
  // }
}
