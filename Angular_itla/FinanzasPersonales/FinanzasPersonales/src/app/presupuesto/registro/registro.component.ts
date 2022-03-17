import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Categoria } from 'src/model/Categoria';
import { PresupuestoService } from '../services/presupuesto.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public categorias: Categoria[]=[];

  constructor(public appService: AppService, public presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
    this.categorias = this.presupuestoService.obtenerCategorias();
  }

  salvar(){
    console.log('click');
    this.presupuestoService.CrearTransaccion();
  }
}
