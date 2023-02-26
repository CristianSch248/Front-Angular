import { Component, OnInit } from '@angular/core';
import { Medico } from './medico';
import { MedicoService } from './medico.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  id: any;
  modo = 'CREATE';

  medico: Medico = new Medico();
  medicos: Medico[] = [];

  constructor(
    private service: MedicoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listar();
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    if(this.id != ''){
      this.service.getMedico(this.id).subscribe({
        next: (data) => {
          this.modo = 'UPD'
          this.medico = data
        },
        error: (err)=> {
          console.log(err)
        }
      })
    } else {
      this.modo = 'CREATE'
    }
  }

  cadastrar(){
    this.service.criar(this.medico).subscribe(()=>{
      this.medico = new Medico();
    })
    this.onSubmit();
  }

  edit(){
    this.service.editar(this.medico).subscribe(()=>{
      this.medico = new Medico();
    })
    this.onSubmit();
  }

  listar(){
    this.service.listar().subscribe((dados: Medico[]) =>{
      this.medicos = dados;
    })
  }

  onSubmit(){
    this.listar();
    this.router.navigate(['/principal/listar/medico'])
  }
}
