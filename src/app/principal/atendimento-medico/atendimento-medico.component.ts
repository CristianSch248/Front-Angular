import { MedicoService } from './../medico/medico.service';
import { Component, OnInit } from '@angular/core';
import { Consulta } from '../consulta/consulta';
import { ConsultaService } from './../consulta/consulta.service';
import { Medico } from '../medico/medico';

@Component({
  selector: 'app-atendimento-medico',
  templateUrl: './atendimento-medico.component.html',
  styleUrls: ['./atendimento-medico.component.css']
})
export class AtendimentoMedicoComponent implements OnInit {
  id: any;

  medico: Medico = new Medico();
  medicos: Medico[] = [];

  consultas: Consulta[] = [];
  consulta: Consulta | undefined;

  constructor(
    private medicoService: MedicoService,
    private consultaService: ConsultaService,
  ) { }

  ngOnInit(): void{
    this.listarMedico();
  }

  listarMedico(){
    this.medicoService.listar().subscribe((dados: Medico[])=> {
      this.medicos = dados;
    })
  }

  setIdMedico(event: any){
    this.id = event.target.value;

    let ID = parseInt(this.id)

    this.consultaService.getAtendimento(ID).subscribe({
      next: (body) => {
        this.consultas = body
        console.log("🚀 ~ file: atendimento-medico.component.ts:44 ~ AtendimentoMedicoComponent ~ this.consultaService.getAtendimento ~ this.consultas", this.consultas)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
