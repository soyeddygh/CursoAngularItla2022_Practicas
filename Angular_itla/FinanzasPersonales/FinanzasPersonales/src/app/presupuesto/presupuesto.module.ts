import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestoService } from './services/presupuesto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    RouterModule.forChild(rutas),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PresupuestoService
  ]
})
export class PresupuestoModule { }
