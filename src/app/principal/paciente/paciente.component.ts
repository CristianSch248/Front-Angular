import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit{
  id : any;
  modo = 'CREATE';

  paciente: Paciente = new Paciente();
  pacientes: Paciente[] = [];

  constructor(
    private service: PacienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listar();
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    if(this.id != ''){
      this.service.getPaciente(this.id).subscribe({
        next: (data) =>{
          this.modo  = 'UPD'
          this.paciente = data
        },
        error: (err)=>{
          console.log(err);
        }
      })
    } else {
      this.modo = 'CREATE'
    }
  }

  cadastrar(){
    this.service.criar(this.paciente).subscribe(()=>{
      this.paciente = new Paciente();
    })
    this.onSubmit();
  }

  edit(){
    this.service.editar(this.paciente).subscribe(() =>{
      this.paciente = new Paciente();
    })
    this.onSubmit();
  }

  listar(){
    this.service.listar().subscribe((dados: Paciente[])=> {
      this.pacientes = dados;
    })
  }

  onSubmit() {
    this.listar();
    this.router.navigate(['/principal/listar/paciente'])
  }
}
