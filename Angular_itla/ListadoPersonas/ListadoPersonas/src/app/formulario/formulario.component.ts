import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Persona } from '../models/IPersona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public fcNombre = new FormControl('')
  public fcTitulo = new FormControl('')
  public fcBio = new FormControl('')
  public fgPersona = new FormGroup({
    'nombre': this.fcNombre,
    'titulo': this.fcTitulo,
    'bio': this.fcBio
  });

  public titulos: string[];

  @Input()
  public personas: Persona[] = [];
  
  id : number = 0
  nombre : string = ''
  titulo : string = ''
  bio : string = ''

  constructor() { 
    this.titulos = [
      'Profesor(a)','Contador(a)','Auditor(a)','Medico','Programador(a)'
    ]
  }

  ngOnInit(): void {
  }

  guardar(){
    this.personas.push({
      id: this.personas.length + 1,
      nombre: this.fcNombre.value,
      titulo: this.fcTitulo.value,
      bio: this.fcBio.value
    })
    console.log(this.personas);
  }

}
