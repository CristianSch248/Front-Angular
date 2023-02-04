import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemPacienteComponent } from './listagem-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';



@NgModule({
  declarations: [
    ListagemPacienteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [
    ListagemPacienteComponent
  ],

})
export class ListagemPacienteModule { }
