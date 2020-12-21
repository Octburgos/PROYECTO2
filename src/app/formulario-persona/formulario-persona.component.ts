import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

  constructor() { }

   nombre: string;
   apellido: string;
   edad: number;
   telefono: number;
   arregloDatos:any[] = [];
  

  ngOnInit(): void {
  }

// la funcion push agrega un nuevo elemento al arreglo, 
// agregarDatos: agrega una persona al arreglo.
agregarDatos(){
  // usuario: objeto que creamos cada vez que agregamos una persona. 
  // Este objeto tiene como propiedades las variables que estan relacionadas con el ng model.
 let usuario: any = {
    nombre: this.nombre, 
    apellido: this.apellido,
    edad: this.edad,
    tel: this.telefono,
  }  
  let usuario2: any = {
    nombre: this.nombre, 
    
  
  }  
// agregamos el objeto creado al arreglo.
  this.arregloDatos.push(usuario);
  this.resetFormulario();
}

resetFormulario(){
  this.nombre = undefined;
  this.apellido = undefined;
  this.edad = undefined;
  this.telefono = undefined;
}
}



