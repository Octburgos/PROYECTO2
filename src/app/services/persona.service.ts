import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 // arregloPersona es un arreglo que va a almacenar
 // objetos del tipo persona adentro. 
arregloPersonas: any [] = [];
  constructor() { }
  
// esta funcion sirve para agregar una persona al arreglo.
  agregarPersona(persona:any){
    this.arregloPersonas.push(persona);
    
  }

// funcion que devuelve el arreglo de personas.
  obtenerPersonas(){
    return this.arregloPersonas;
  }
}
