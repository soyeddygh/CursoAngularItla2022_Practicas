import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forChild(rutas)
  ]
})
export class TransaccionesModule { }
