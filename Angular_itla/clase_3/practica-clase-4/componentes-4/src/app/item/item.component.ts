import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  @Input()
  public persona: Persona = {id: 0, nombre: '', bio: '', titulo: ''};

  public nombre: string='';
  public bio: string='';
  public titulo: string='';

  @Output()
  public onBorrar: EventEmitter<Persona> = new EventEmitter<Persona>();
  
  constructor() { }


  ngOnInit(): void {
  }

  borrar() {
    this.onBorrar.emit(this.persona);
  }

}
