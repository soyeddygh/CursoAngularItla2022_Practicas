import { Injectable } from '@angular/core';
import { Transaccion } from 'src/model/transaccion';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public transacciones: Transaccion[] = [];
  public opcionTran: string ='';

  constructor() { }

  public agregarRegistro(registro: Transaccion){
    this.transacciones.push(registro);
    this.setLocal(this.transacciones);
    console.log('total de transacciones:' + this.transacciones.length)
  }

  public obtenerRegistros(){
    return this.getLocal();
  }

  filtrarTransacciones(){    
    this.transacciones = this.obtenerRegistros()
               .filter(e => e.tipo == this.opcionTran);
  }

  private setLocal(transacciones: Transaccion[]){
    localStorage.setItem('transacciones', JSON.stringify(transacciones))
  }

  private getLocal(): Transaccion[] {
    const trans = localStorage.getItem("transacciones")
    if (trans) {
      return JSON.parse(trans) as Transaccion[];
    } else {
      this.setLocal([])
      return [];
    }
  }

}
