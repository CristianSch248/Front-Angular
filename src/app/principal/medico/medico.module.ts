import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MedicoComponent } from "./MedicoComponent";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MedicoComponent
  ],
  exports: [
    MedicoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class MedicoModule { }
