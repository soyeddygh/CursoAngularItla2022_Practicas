import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Categoria } from 'src/model/Categoria';
import { Tipo } from 'src/model/Tipo';
import { Transaccion } from 'src/model/transaccion';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  public form: FormGroup;
  public categorias: Categoria[] = [
    {
      nombre: "Transporte", tipo: Tipo.Gasto 
    },
    {
      nombre: "Cafeteria", tipo: Tipo.Gasto 
    },
    {
      nombre: "Cobro nomina", tipo: Tipo.Ingreso 
    },
    {
      nombre: "Telefono", tipo: Tipo.Gasto 
    },
    {
      nombre: "Electricidad", tipo: Tipo.Gasto 
    }
]

  constructor(private formBuilder: FormBuilder, public appService: AppService) {
    this.form = this.formBuilder.group(
      {
        monto: [''],
        fecha: [''],
        tipo: ['']
      }
    )
   }

   public obtenerCategorias(){
     return this.categorias;
   }

   CrearTransaccion(){
     console.log(this.form);
     const tran: Transaccion = {
      id: 0,
      monto: this.form.get("monto")?.value,
      fecha: this.form.get("fecha")?.value, 
      tipo: this.form.get("tipo")?.value
    };
     this.appService.agregarRegistro(tran);
     console.log(tran);
   }
}
