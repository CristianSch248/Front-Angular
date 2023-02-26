import { MedicoService } from './../medico/medico.service';
import { PacienteService } from './../paciente/paciente.service';
import { Component } from '@angular/core';
import { Medico } from '../medico/medico';
import { Paciente } from '../paciente/paciente';
import { ConsultaService } from './consulta.service';
import { Consulta, CadastroConsulta } from './consulta';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  id : any;
  modo = 'CREATE';
  formConsulta = {
    idPaciente: 0,
    data: '',
    hora: '',
    caso: '',
    idMedico: 0
  }

  consultas: Consulta[] = [];
  consulta: Consulta | undefined;

  paciente: Paciente = new Paciente();
  pacientes: Paciente[] = [];

  medico: Medico = new Medico();
  medicos: Medico[] = [];

  constructor(
    private service: ConsultaService,
    private pacienteService: PacienteService,
    private medicoService: MedicoService,
    private route: ActivatedRoute,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.listarPacinetes();
    this.listarMedicos();
    this.listar();
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    if(this.id != ''){
      this.service.getConsulta(this.id).subscribe({
        next: (data) =>{
          this.modo = 'UPD'
          this.consulta = data

        },
        error: (err) => {
          console.log(err)
        }
      })
    } else {
      this.modo = 'CREATE'
    }
  }

  getSelectedId(id: number) {
    console.log(id);
  }
  setIdMedico(event: any){
    this.formConsulta.idMedico = event.target.value;
  }
  setIdPaciente(event: any){
    this.formConsulta.idPaciente = event.target.value;
  }

  listarPacinetes(){
    this.pacienteService.listar().subscribe((dados: Paciente[])=>{
      this.pacientes = dados;
    })
    console.log(this.pacientes);
  }

  listarMedicos(){
    this.medicoService.listar().subscribe((dados: Medico[])=>{
      this.medicos = dados;
    })
  }

  listar(){
    this.service.listar().subscribe((dados: Consulta[])=>{
      this.consultas = dados;
    })
  }

  cadastrar(){
    let cadastroConsulta: CadastroConsulta = new CadastroConsulta(this.formConsulta.data, this.formConsulta.hora, this.formConsulta.idPaciente, this.formConsulta.idMedico, this.formConsulta.caso );
    console.log("testando cadastro consulta"+ cadastroConsulta);
    this.service.criar(cadastroConsulta).subscribe(
      {
        next: (data) =>{
          console.log(data);
        },
        error: (err) => {
          console.log(err)
        }
      }

    )
    this.onSubmit();
  }

  edit(){
    let cadastroConsulta: CadastroConsulta = new CadastroConsulta(this.formConsulta.data, this.formConsulta.hora, this.formConsulta.idPaciente, this.formConsulta.idMedico, this.formConsulta.caso );
    this.service.editar(cadastroConsulta).subscribe(()=>{
      this.consulta = new Consulta();
    })
    this.onSubmit();
  }

  onSubmit() {
    this.listar();
    this.router.navigate(['/principal/listar/consulta'])
  }
}
