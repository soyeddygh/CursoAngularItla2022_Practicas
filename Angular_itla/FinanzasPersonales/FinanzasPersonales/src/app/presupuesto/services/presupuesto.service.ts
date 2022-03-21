import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Categoria } from 'src/model/Categoria';
import { Tipo } from 'src/model/Tipo';
import { Transaccion } from 'src/model/transaccion';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  public form: FormGroup;
  public tipos: Tipo[] = [
    {
      id: 'Ingreso', nombre: 'Ingreso'
    },
    {
      id: 'Gasto', nombre: 'Gasto'
    }
  ]

  public categorias: Categoria[] = [
    {
      nombre: "Transporte", tipo:'Gasto'
    },
    {
      nombre: "Cafeteria", tipo: 'Gasto'
    },
    {
      nombre: "Cobro nomina", tipo: 'Ingreso'
    },
    {
      nombre: "Otros ingresos", tipo: 'Ingreso'
    },
    {
      nombre: "Telefono", tipo: 'Gasto'
    },
    {
      nombre: "Electricidad", tipo: 'Gasto'
    }
  ]

  constructor(private formBuilder: FormBuilder, public appService: AppService) {
    this.form = this.formBuilder.group(
      {
        monto: ['', [Validators.required]],
        fecha: ['', [Validators.required]],
        cuenta: ['', [Validators.required]],
        tipo: ['', [Validators.required]]
      }
    )
  }

  public getRandomId() {
    return Math.floor((Math.random() * 6) + 1);
  }

  public obtenerID() {
    let id = this.getRandomId(); 
    return id;
  }

  public obtenerCategorias() {
    return this.categorias;
  }

  public obtenerTipos(){
    return this.tipos;
  }

  CrearTransaccion() {
    console.log(this.form);
    if(this.form.valid){
      const tran: Transaccion = {
        id: this.obtenerID(),
        monto: this.form.get("monto")?.value,
        fecha: this.form.get("fecha")?.value,
        cuenta: this.form.get("cuenta")?.value,
        tipo: this.form.get("tipo")?.value
      };
      this.appService.agregarRegistro(tran);
      console.log(tran);
      this.form.reset();
    }
    else
    {
      alert('No se completo la transacción. El formulario no es válido.');
    }
    
  }

  get monto() {
    return this.form.get("monto")
  }

  get fecha() {
    return this.form.get("fecha")
  }
  get tipo() {
    return this.form.get("tipo")
  }

  get cuenta() {
    return this.form.get("cuenta")
  }

}
