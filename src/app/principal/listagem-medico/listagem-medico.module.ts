import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ListagemMedicoComponent } from './listagem-medico.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:[
    ListagemMedicoComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ListagemMedicoComponent
  ],
})
export class ListagemMedicoModule {}
