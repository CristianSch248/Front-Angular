import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemPacienteComponent } from './listagem-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListagemPacienteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ListagemPacienteComponent
  ],
})
export class ListagemPacienteModule { }
