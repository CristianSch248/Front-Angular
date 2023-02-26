import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PacienteComponent } from './paciente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PacienteComponent
  ],
  exports: [
    PacienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PacienteModule { }
