import { Injectable } from '@angular/core';
import { Transaccion } from 'src/model/transaccion';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private transacciones: Transaccion[] = [];

  constructor() { }

  public agregarRegistro(registro: Transaccion){
    this.transacciones.push(registro);
    this.setLocal(this.transacciones);
  }

  public obtenerRegistros(){
    return this.getLocal();
  }

  private setLocal(registros: Transaccion[]){
    localStorage.setItem('registros', JSON.stringify(registros))
  }

  private getLocal(): Transaccion[] {
    const registro = localStorage.getItem("transacciones")
    if (registro) {
      return JSON.parse(registro) as Transaccion[];
    } else {
      this.setLocal([])
      return [];
    }
  }

}
