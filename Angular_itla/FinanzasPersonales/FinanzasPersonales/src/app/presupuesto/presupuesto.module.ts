import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes=[
  {
    path: '',  component: RegistroComponent
  }
]

@NgModule({
  declarations: [
    RegistroComponent    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ]
})
export class PresupuestoModule { }
