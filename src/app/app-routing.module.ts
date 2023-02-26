import { CanActivate } from '@angular/router';
import { ListagemMedicoComponent } from './principal/listagem-medico/listagem-medico.component';
import { PacienteComponent } from './principal/paciente/paciente.component';
import { UsuarioComponent } from './principal/usuario/usuario.component';
import { MedicoComponent } from "./principal/medico/medico.component";
import { ConsultaComponent } from './principal/consulta/consulta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PrincipalComponent} from "./principal/principal.component";
import {AuthGuardService} from "./security/auth-guard.service";
import { ListagemPacienteComponent } from './principal/listagem-paciente/listagem-paciente.component';
import { ListagemConsultaComponent } from './principal/listagem-consulta/listagem-consulta.component'
import { HistoricoPacienteComponent } from './principal/historico-paciente/historico-paciente.component';
import { AtendimentoMedicoComponent } from './principal/atendimento-medico/atendimento-medico.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  {
    path: 'principal', component: PrincipalComponent, canActivate: [AuthGuardService],
    //==================================================================================================
    children: [
      { path: 'paciente',
        children: [
          {
            path: '', component: PacienteComponent, canActivate: [AuthGuardService]
          },
          {
            path: ':id', component: PacienteComponent, canActivate: [AuthGuardService]
          }
        ]
      },
      { path: 'listar/paciente', component: ListagemPacienteComponent, canActivate: [AuthGuardService] },
      //===================================================================================================
      { path: 'consulta', component: ConsultaComponent, canActivate: [AuthGuardService],
        children: [
          {
            path: '', component: ConsultaComponent, canActivate: [AuthGuardService],
          },
          {
            path: ':numero', component: ConsultaComponent, canActivate: [AuthGuardService],
          }
        ]
      },
      {path: 'listar/consulta', component: ListagemConsultaComponent, canActivate: [AuthGuardService]},
      //=====================================================================================================
      { path: 'medico',
        children: [
          {
            path: '', component: MedicoComponent, canActivate: [AuthGuardService]
          },
          {
            path: ':id', component: MedicoComponent, canActivate: [AuthGuardService]
          }
        ]
      },
      { path: 'listar/medico', component: ListagemMedicoComponent, canActivate: [AuthGuardService] },
      //======================================================================================================
      { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuardService] },
      { path: 'historico/paciente', component: HistoricoPacienteComponent, canActivate: [AuthGuardService]},
      { path: 'atendimentos/medico', component: AtendimentoMedicoComponent, canActivate: [AuthGuardService]}
    ]
  },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
