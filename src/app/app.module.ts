import { MedicoModule } from './principal/medico/medico.module';
import { ListagemMedicoModule } from './principal/listagem-medico/listagem-medico.module';
import { JWTInterceptorService } from './security/jwtinterceptor.service';
import { LoginModule } from './login/login.module';
import { PacienteModule } from './principal/paciente/paciente.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './principal/usuario/usuario.component';
import { HospitalComponent } from './principal/hospital/hospital.component';
import { PrincipalModule } from "./principal/principal.module";

import {ErrorHandlerService} from "./security/error-handler.service";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListagemPacienteModule } from './principal/listagem-paciente/listagem-paciente.module';

import { ListagemConsultasModule } from './principal/listagem-consulta/listagem-consultas.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HospitalComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PacienteModule,
    MedicoModule,
    LoginModule,
    PrincipalModule,
    NoopAnimationsModule,
    ListagemPacienteModule,
    ListagemMedicoModule,
    ListagemConsultasModule

  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandlerService},
    {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
