import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { PresupuestoService } from 'src/app/presupuesto/services/presupuesto.service';
import { Tipo } from 'src/model/Tipo';
import { Transaccion } from 'src/model/transaccion';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public opcionTran: string ='';
  public transacciones: Transaccion[] = [];
  public tipos: Tipo[] = [];

  constructor(public preService: PresupuestoService, public appService: AppService) { }

  ngOnInit(): void {
    this.tipos = this.preService.obtenerTipos();
    console.log(this.appService.obtenerRegistros());
  }

  public filtrar()
  {
    this.transacciones = this.appService.obtenerRegistros()
               .filter(e => e.tipo == this.opcionTran);
  }

}
