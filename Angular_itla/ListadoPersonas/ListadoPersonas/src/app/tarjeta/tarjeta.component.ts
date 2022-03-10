import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Persona } from '../models/IPersona';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input()
  persona: Persona = {
    id:0,
    nombre:'',
    titulo:'',
    bio:''
  } 

  @Output()
  public onBorrar: EventEmitter<Persona> = new EventEmitter<Persona>();
  
  constructor() { }

  ngOnInit(): void {
  }

  borrar(){
    this.onBorrar.emit(this.persona);
  }

}
