import { Component, OnInit } from '@angular/core';
import { Medico } from '../medico/medico';
import { MedicoService } from './../medico/medico.service';

@Component({
  selector: 'app-listagem-medico',
  templateUrl: './listagem-medico.component.html',
  styleUrls: ['./listagem-medico.component.css']
})
export class ListagemMedicoComponent implements OnInit {

  medico: Medico = new Medico();
  medicos: Medico[] = [];

  constructor(
    private service: MedicoService,
    ) {}

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.listar().subscribe((dados: Medico[])=> {
      this.medicos = dados;
    })
  }

  editar(medico: Medico){
    this.service.editar(medico).subscribe(()=>{
      this.medico = new Medico();
      this.listar();
    })
  }

  deletar(medico: Medico){
    this.service.delete(medico).subscribe(()=>{
      this.listar();
    })
  }
}
