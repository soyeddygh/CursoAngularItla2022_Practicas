import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../models/IPersona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input()
  public personas: Persona[] = []

  constructor() { }

  ngOnInit(): void {
  }

  borrarPersona(persona: Persona) {
    //let id = persona.id;
    const i = this.personas.findIndex(o => {
      return o.id === persona.id;
    });

    this.personas.splice(i, 1);
  }

}
