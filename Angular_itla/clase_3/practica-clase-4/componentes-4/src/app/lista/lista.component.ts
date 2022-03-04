import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public personas: Persona[] = [];
  public nombre: string = '';
  public titulo: string = '';
  public bio: string = '';
  
  constructor() { }

  //public nombre: string = ''

  ngOnInit(): void {
  }

  public incluir() {
    let persona: Persona = {
      id:0,
      nombre: this.nombre,
      titulo: this.titulo,
      bio: this.bio
    };

    this.personas.push(persona)
  }

  public borrarPersona(persona: Persona) {
    let personaBorrar: Persona = {
      id:0,
      nombre: persona.nombre,
      titulo: persona.titulo,
      bio: persona.bio
    };

    
  }

}
