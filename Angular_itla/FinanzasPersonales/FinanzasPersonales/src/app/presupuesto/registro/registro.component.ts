import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Categoria } from 'src/model/Categoria';
import { Tipo } from 'src/model/Tipo';
import { PresupuestoService } from '../services/presupuesto.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public categorias: Categoria[]=[];
  public tipos: Tipo[]=[];
  public opcionSel: string = '';

  constructor(public appService: AppService, public presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
    this.categorias = this.presupuestoService.obtenerCategorias();
    this.tipos = this.presupuestoService.obtenerTipos();
  }

  filtrarPorTipos(){    
    this.categorias = this.presupuestoService.obtenerCategorias()
               .filter(e => e.tipo == this.opcionSel);
  }

  salvar(){
    this.presupuestoService.CrearTransaccion();  
  }
}
