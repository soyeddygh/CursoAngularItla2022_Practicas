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

  borrarPersona(persona: Persona){
    //alert('onBorrar click' + persona.id)
    let id = persona.id-1;
    alert(id);
   // let borraPersona = persona.indexOf(id);
  
    //this.personas.slice(persona.id-1, 1)

    var newArray = this.personas.filter((item) => item.id == id);

}

}
