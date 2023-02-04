import { HttpClientModule } from '@angular/common/http';
import { ConsultaComponent } from './consulta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConsultaComponent
  ],
  exports: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ConsultaModule { }
