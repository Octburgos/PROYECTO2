import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

//variables de ng model.
   nombre: string;
   apellido: string;
   edad: number;
   telefono: number;
   arregloDatos:any[] = [];
// variables para formulario.
  personaForm: FormGroup;
 
// PASOS PARA CONSTRUIR UN FORMULARIO REACTIVOS:
//1-Crear un objeto del tipo FormGroup (en este caso personaForm)
//2-Crear una variable del tipo formBuilder dentro del contructor.
//3- Dentro del ngOnInit unimos el objeto del tipo formGroup con el formBuilder, 
//asignando cada propiedad con un valor y un validador.
  constructor(private fb: FormBuilder) { }

 
  // funcion que se ejecuta automaticamente (no la ejecutamos nosotros)
  // cuando se inicia el componente
  ngOnInit(): void {
    this.personaForm = this.fb.group({
    nom:["", Validators.required],
    ape:["", Validators.required],
    ed:["", Validators.required],
    tel:["", Validators.required],
    })
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


agregarPersona(){
  //creamos un objeto para guardar los valores 
  //del objeto formulario (personaForm)
  let persona: any = {
    nom: this.personaForm.value["nom"],
    ape: this.personaForm.value["ape"],
    ed: this.personaForm.value["ed"],
    tel: this.personaForm.value["tel"],
  }
  // agregamos el objeto creado al arreglo.
  this.arregloDatos.push(persona);
  //reset el formulario utilizando una funcion que esta implementada en el
  //objeto formulario
  this.personaForm.reset();
}
}






