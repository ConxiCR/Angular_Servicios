import { Injectable } from '@angular/core';
//importo la clase Persona para poner el tipo a la propiedad o variable
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
//clase. Creamos un servicio donde generamos distitntos métodos para que los componentes accedan a los valores
//que hemos definido. Aqui se recogen a través de una array. Pero podria ser desde un fichero o desde internet(servidor)
export class PersonasService {
  //array de tipo personas
  personas: Persona[];

  constructor() { 
    //creo array de valores de personas
    this.personas = [
      new Persona('Mario', 'Rodríguez', 32, true),
      new Persona('Rocío', 'Gutierrez', 15, false),
      new Persona('Laura', 'Robles', 28, true),
      new Persona('Lorenzo', 'Romero', 65, true)
    ];
  }
  //metodo para acceder a los datos fuera del servicio. No se pueda atraves de la propiedad
  getAll(){
    return this.personas;
  }

}
