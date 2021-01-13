import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-tarjeta-persona',
  templateUrl: './tarjeta-persona.component.html',
  styleUrls: ['./tarjeta-persona.component.css']
})
export class TarjetaPersonaComponent implements OnInit {
  arregloPersona: any[] = []
  //@Input() nombre: string;
  //@Input() apellido: string;
  //@Input() edad: string;
  //@Input() tel: string;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  //guardamos en arregloPersona lo que nos devuelve la funcion obtenerPersona del Servicio.
  this.arregloPersona = this.personaService.obtenerPersonas();
  
  }

  


}
