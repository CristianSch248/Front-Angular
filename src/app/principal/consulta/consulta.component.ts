import { Component } from '@angular/core';
import { Medico } from '../medico/medico';
import { Paciente } from '../paciente/paciente';
import { ConsultaService } from './consulta.service';
import { Consulta } from './consulta';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  constructor(private service: ConsultaService){}

  ngOnInit(): void {

  }

  consulta: Consulta = new Consulta();
  consultas: Consulta[] = [];

  listar(){
    this.service.listar().subscribe((dados: Consulta[])=>{
      this.consultas = dados;
    })
  }

  cadastrar(){
    this.service.criar(this.consulta).subscribe(()=>{
      this.consulta = new Consulta();
      this.listar();
    })
  }

  editar(){
    this.service.editar(this.consulta).subscribe(()=>{
      this.consulta = new Consulta();
      this.listar();
    })
  }

  delete(){
    this.service.delete(this.consulta).subscribe(()=>{
      this.listar();
    })
  }
}
