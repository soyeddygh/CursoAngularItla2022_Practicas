import { Component } from '@angular/core';
import { Persona } from './models/IPersona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListadoPersonas';

  public personas: Persona[] = [];
}
