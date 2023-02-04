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
import { MedicoComponent } from "./principal/medico/MedicoComponent";
import { ConsultaComponent } from './principal/consulta/consulta.component';
import { HospitalComponent } from './principal/hospital/hospital.component';
import { PrincipalModule } from "./principal/principal.module";

import {ErrorHandlerService} from "./security/error-handler.service";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ListagemPacienteComponent } from './principal/listagem-paciente/listagem-paciente.component';
import { ListagemPacienteModule } from './principal/listagem-paciente/listagem-paciente.module';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HospitalComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PacienteModule,
    LoginModule,
    PrincipalModule,
    NoopAnimationsModule,
    ListagemPacienteModule
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
