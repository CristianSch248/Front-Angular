import { Component, OnInit } from '@angular/core';
import { Medico } from './medico';
import { MedicoService } from './medico.service';


@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  constructor(private service: MedicoService) {}

  ngOnInit(): void {
    this.listar();
  }

  medico: Medico = new Medico();
  medicos: Medico[] = [];

  listar(){
    this.service.listar().subscribe((dados: Medico[])=> {
      this.medicos = dados;
      console.log('medicossss', this.medicos)
    })
  }

  cadastrar(){
    this.service.criar(this.medico).subscribe(()=>{
      this.medico = new Medico();
      this.listar();
    })
  }

  editar(){
    this.service.editar(this.medico).subscribe(()=>{
      this.medico = new Medico();
      this.listar();
    })
  }

  delete(){
    this.service.delete(this.medico).subscribe(()=>{
      this.listar();
    })
  }
}
