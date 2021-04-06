import { Component } from '@angular/core';
import { PersonasService } from './services/personas.service';
import { Persona } from './models/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrPersonas: Persona[];
  //injectamos el componente de forma private para poder acceder desde todos los métodos
  constructor(private personasService: PersonasService){ }

  ngOnInit(){
    //llamamos al método. creamos variable personas. El metodo getAll se podrá utilizar desde cualquier componente y podrá recibvir los datos
    //const personas = this.PersonasService.getAll();
    //console.log(personas);
    this.arrPersonas = this.personasService.getAll();
  }
  //comparto método con todos los componentes
  onClick(){
    //método del servicio
    this.personasService.create(new Persona('Nueva', 'García', 45, true ))
  }
}
