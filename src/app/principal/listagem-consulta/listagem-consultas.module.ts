import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemConsultaComponent } from './listagem-consulta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListagemConsultaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ListagemConsultaComponent
  ]
})
export class ListagemConsultasModule { }
