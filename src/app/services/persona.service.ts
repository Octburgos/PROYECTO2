import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
arregloPersonas: any [];
  constructor() { }
  

  agregarPersona(persona:any){
    this.arregloPersonas.push(persona);
  }
}
