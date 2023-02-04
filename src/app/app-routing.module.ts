import { PacienteComponent } from './principal/paciente/paciente.component';
import { UsuarioComponent } from './principal/usuario/usuario.component';
import { MedicoComponent } from "./principal/medico/MedicoComponent";
import { HospitalComponent } from './principal/hospital/hospital.component';
import { ConsultaComponent } from './principal/consulta/consulta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PrincipalComponent} from "./principal/principal.component";
import {AuthGuardService} from "./security/auth-guard.service";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  {
    path: 'principal', component: PrincipalComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'paciente', component: PacienteComponent, canActivate: [AuthGuardService] },
      { path: 'consulta', component: ConsultaComponent, canActivate: [AuthGuardService] },
      { path: 'hospital', component: HospitalComponent, canActivate: [AuthGuardService] },
      { path: 'medico', component: MedicoComponent, canActivate: [AuthGuardService] },
      { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuardService] }
    ]
  },
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
