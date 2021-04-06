import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../services/personas.service';
import { Persona } from '../models/persona.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  //declaramos la variable importandolo des del modelo
  arrPersonas: Persona[];

  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
    this.arrPersonas = this.personasService.getAll();
    
  }

}
