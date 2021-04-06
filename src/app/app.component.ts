import { Component } from '@angular/core';
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //injectamos el componente de forma private para poder acceder desde todos los métodos
  constructor(private PersonasService: PersonasService){ }

  ngOnInit(){
    //llamamos al método. creamos variable personas
    const personas = this.PersonasService.getAll();
    console.log(personas);
  }
}
