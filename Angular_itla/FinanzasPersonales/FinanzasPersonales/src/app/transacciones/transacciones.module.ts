import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestoService } from '../presupuesto/services/presupuesto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const rutas: Routes = [
  {
    path: '', component: ListadoComponent
  }
]

@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    PresupuestoService
  ]
})
export class TransaccionesModule { }
