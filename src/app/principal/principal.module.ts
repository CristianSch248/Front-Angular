import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { ConsultaModule } from './consulta/consulta.module';
import { HospitalModule } from './hospital/hospital.module';
import { MedicoModule } from './medico/medico.module';
import { PacienteModule } from './paciente/paciente.module';
import { UsuarioModule } from './usuario/usuario.module';
import {RouterModule, RouterOutlet} from "@angular/router";
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    MatMenuModule,
    CommonModule,
    ConsultaModule,
    HospitalModule,
    MedicoModule,
    PacienteModule,
    UsuarioModule,
    RouterOutlet,
    RouterModule
  ]
})
export class PrincipalModule { }
